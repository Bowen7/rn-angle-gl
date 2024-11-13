// Reexport the native module. On web, it will be resolved to RnAngleGlModule.web.ts
// and on native platforms to RnAngleGlModule.ts
export { default } from './RnAngleGlModule';
export { default as RnAngleGlView } from './RnAngleGlView';
export * from  './RnAngleGl.types';
