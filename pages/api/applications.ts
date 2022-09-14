// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IApplication } from "../../src/features/applications/types/IApplication";
import { roll } from "../../src/_workshop-internals/utils/chance";
import { delay } from "../../src/_workshop-internals/utils/delay";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IApplication[]>
) => {
  await delay([100, 3000]);

  if (roll(0.2)) {
    res.status(500).json([]);

    return;
  }

  let result: IApplication[] = require("../../src/_workshop-internals/data/applications.json");

  if ("sort" in req.query) {
    result = result.sort((a, b) => {
      switch (req.query.sort) {
        case "namespace":
          return a.namespace.localeCompare(b.namespace);
        case "name":
          return a.name.localeCompare(b.name);
        case "state":
          return a.state.localeCompare(b.state);
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
