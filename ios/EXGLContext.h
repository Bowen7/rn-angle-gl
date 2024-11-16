// Copyright 2016-present 650 Industries. All rights reserved.

#include <libEGL/EGL/egl.h>
#import <RnAngleGl/EXGLNativeApi.h>
#import <ExpoModulesCore/EXModuleRegistry.h>

@class EXGLContext;

@protocol EXGLContextDelegate <NSObject>

- (void)glContextFlushed:(nonnull EXGLContext *)context;
- (void)glContextInitialized:(nonnull EXGLContext *)context;
- (void)glContextWillDestroy:(nonnull EXGLContext *)context;
- (EXGLObjectId)glContextGetDefaultFramebuffer;

@end

@interface EXGLContext : NSObject

- (nonnull instancetype)initWithDelegate:(nullable id<EXGLContextDelegate>)delegate
                       andModuleRegistry:(nonnull EXModuleRegistry *)moduleRegistry;
- (void)prepare:(nullable void(^)(BOOL))callback andEnableExperimentalWorkletSupport:(BOOL)enableExperimentalWorkletSupport;
- (BOOL)isInitialized;
- (nonnull EGLContext)createSharedEGLContext;
- (void)runAsync:(nonnull void(^)(void))callback;
- (void)runInEGLContext:(nonnull EGLContext)context callback:(nonnull void(^)(void))callback;
- (void)takeSnapshotWithOptions:(nonnull NSDictionary *)options resolve:(nonnull EXPromiseResolveBlock)resolve reject:(nonnull EXPromiseRejectBlock)reject;
- (void)destroy;

// "protected"
@property (nonatomic, assign) EXGLContextId contextId;
@property (nonatomic, assign, nonnull) EGLContext eglCtx;
@property (nonatomic, weak, nullable) id <EXGLContextDelegate> delegate;

@end
