// Copyright 2016-present 650 Industries. All rights reserved.

#import <ExpoModulesCore/EXCameraInterface.h>

#import <RnAngleGl/EXGLContext.h>
#import <RnAngleGl/EXGLObject.h>

@interface EXGLCameraObject : EXGLObject

- (instancetype)initWithContext:(EXGLContext *)glContext andCamera:(id<EXCameraInterface>)camera;

@end
