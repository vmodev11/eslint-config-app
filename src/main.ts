import os from 'os';
import { Request } from 'express';
import { FacebookUser } from 'fbgraph';
import Config from './class/config/env/config';
import { add } from './function/helper';

(() => {
  console.log(os.hostname());
  const c = new Config();
  console.log(c.log());
  console.log(add(1, 2));
  const u: Partial<FacebookUser> = {
    id: '111',
  };
  const req: Partial<Request> = {
    user: 1,
  };
})();
