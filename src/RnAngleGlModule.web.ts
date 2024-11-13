import { registerWebModule, NativeModule } from 'expo';

import { RnAngleGlModuleEvents } from './RnAngleGl.types';

class RnAngleGlModule extends NativeModule<RnAngleGlModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(RnAngleGlModule);
