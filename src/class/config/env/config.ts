import { say } from '@src/function/helper';

export default class Config {
  config = 'env';

  getConfig() {
    return this.config;
  }

  setConfig(e: string) {
    this.config = e;
  }

  log() {
    return say(this.getConfig());
  }
}
