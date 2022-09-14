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

  res
    .status(200)
    .json(require("../../src/_workshop-internals/data/applications.json"));
};

export default handler;
