import React, { useState, useEffect } from "react";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import { toggleFullscreen } from "../../utils/dom";
import {useIntl} from 'react-intl';

const FullscreenSwitch = () => {
  const {formatMessage:f} =useIntl();

  const [fullscreen, setFullscreen] = useState(document.fullscreen);

  const toggleFull = () => {
    toggleFullscreen();
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", function (event) {
      if (document.fullscreenElement) {
        setFullscreen(true);
      } else {
        setFullscreen(false);
      }
    });
  }, []);

  return (
    <div className="fullscreen-switch action">
      {fullscreen ? (
        <FullscreenExitOutlined title={f({id:'exitFullscreen'})} onClick={toggleFull} />
      ) : (
        <FullscreenOutlined title={f({id:'fullscreen'})} onClick={toggleFull} />
      )}
    </div>
  );
};
export default FullscreenSwitch;
