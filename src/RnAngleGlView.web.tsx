import * as React from 'react';

import { RnAngleGlViewProps } from './RnAngleGl.types';

export default function RnAngleGlView(props: RnAngleGlViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
