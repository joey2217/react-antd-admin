/**
 * 全屏切换
 */
export function toggleFullscreen(){
  // TODO 浏览器兼容
  if (document.fullscreen) { 
    document.exitFullscreen() 
  } else { 
    document.documentElement.requestFullscreen() 
  } 
}