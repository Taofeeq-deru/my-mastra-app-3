
import { Mastra, createLogger } from '@mastra/core';


import { catOne } from './agents/index';

export const mastra = new Mastra({
  agents: { catOne },
  
  logger: createLogger({
    type: 'CONSOLE',
    level: 'INFO',
  }),
});
