import os from 'os';
// import { FacebookUser } from 'fbgraph';
// import { Request } from 'express';
import Config from './class/config/env/config';
import { add } from './function/helper';

(() => {
  console.log(os.hostname());
  const c = new Config();
  console.log(c.log());
  console.log(add(1, 2));
  // TODO: Extend types
  // const u: Partial<FacebookUser> = {
  //   id: '111',
  // };
  // const req: Partial<Request> = {
  //   user: 1,
  // };
  // TODO: Import absolute path
})();
