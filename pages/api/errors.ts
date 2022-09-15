// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IError } from "../../src/features/errors/types/IError";
import { roll } from "../../src/_workshop-internals/utils/chance";
import { delay } from "../../src/_workshop-internals/utils/delay";

const handler = async (req: NextApiRequest, res: NextApiResponse<IError[]>) => {
  await delay([100, 3000]);

  if (roll(0.2)) {
    res.status(500).json([]);

    return;
  }

  let result: IError[] = require("../../src/_workshop-internals/data/errors.json");

  if ("sort" in req.query) {
    result = result.sort((a, b) => {
      switch (req.query.sort) {
        case "timestamp":
          return b.timestamp - a.timestamp;
        case "severity":
          return b.severity - a.severity;
        case "message":
          if (!a.message && !b.message) {
            return 0;
          } else if (!a.message) {
            return 1;
          } else if (!b.message) {
            return -1;
          }

          return a.message.localeCompare(b.message);
      }

      return 0;
    });
  }

  if ("index" in req.query && "limit" in req.query) {
    const index = +req.query.index!;
    const limit = +req.query.limit!;

    const start = index * limit;
    const end = start + limit;

    result = result.slice(start, end);
  }

  res.status(200).json(result);
};

export default handler;
