import React, { useState } from 'react';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { toggleFullscreen } from '../../utils/dom'


const FullscreenSwitch = () => {
  const [fullscreen, setFullscreen] = useState(document.fullscreen);

  const toggleFull = (full: boolean) => {
    setFullscreen(full);
    toggleFullscreen();
  }

  return (
    <div className="fullscreen-switch action">
      {
        fullscreen ? <FullscreenExitOutlined title="exit fullscreen" onClick={() => toggleFull(false)} /> : <FullscreenOutlined title="fullscreen" onClick={() => toggleFull(true)} />
      }
    </div>
  )
}
export default FullscreenSwitch;
