// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ApplicationState } from "../../src/features/applications/enums/ApplicationState";
import { IApplication } from "../../src/features/applications/types/IApplication";
import { delay } from "../../src/_workshop-internals/utils/delay";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IApplication[]>
) => {
  await delay([100, 3000]);

  // res.status(404).json(null);
  // return;
  // TODO Fill with more (dummy?) data, or make something more "real"
  res.status(200).json([
    {
      id: "abc1",
      namespace: "ms",
      name: "trader",
      state: ApplicationState.Online,
      branches: ["main", "develop", "feature/MI-23"],
      deployments: [
        { environment: "TEST", tag: "nj4hx8k2", timestamp: 1663165311286 },
        { environment: "PROD", tag: "2nd77tk3", timestamp: 1612221798123 },
      ],
    },
  ]);
};

export default handler;
