import { WebPlugin } from '@capacitor/core';
import { EchoPlugin } from './definitions';

export class EchoWeb extends WebPlugin implements EchoPlugin {
  constructor() {
    super({
      name: 'Echo',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const Echo = new EchoWeb();

export { Echo };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Echo);
