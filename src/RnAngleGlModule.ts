import { NativeModule, requireNativeModule } from 'expo';

import { RnAngleGlModuleEvents } from './RnAngleGl.types';

declare class RnAngleGlModule extends NativeModule<RnAngleGlModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<RnAngleGlModule>('RnAngleGl');
