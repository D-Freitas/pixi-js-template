import { IApplicationOptions } from 'pixi.js'

export const applicationOptions: IApplicationOptions  = {
  width: window.innerWidth,
  height: window.innerHeight,
  autoDensity: true,
  sharedTicker: true,
  resizeTo: window,
  resolution: 1,
  powerPreference: 'high-performance',
  forceCanvas: false
}
