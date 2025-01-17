import { Mastra, createLogger } from "@mastra/core";

import { catOne, catTwo } from "./agents/index";

export const mastra = new Mastra({
  agents: { catOne, catTwo },

  logger: createLogger({
    type: "CONSOLE",
    level: "INFO"
  })
});
