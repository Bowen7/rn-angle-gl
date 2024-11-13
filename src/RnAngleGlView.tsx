import { requireNativeView } from 'expo';
import * as React from 'react';

import { RnAngleGlViewProps } from './RnAngleGl.types';

const NativeView: React.ComponentType<RnAngleGlViewProps> =
  requireNativeView('RnAngleGl');

export default function RnAngleGlView(props: RnAngleGlViewProps) {
  return <NativeView {...props} />;
}
