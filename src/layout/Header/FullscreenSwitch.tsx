import React, { useState } from "react";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";

const FullscreenSwitch: React.FC = () => {
  const { formatMessage: f } = useIntl();

  const [fullscreen, setFullscreen] = useState(
    document.fullscreenElement !== null
  );

  const toggleFull = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullscreen(false);
      }
    }
  };

  return (
    <div className="header-block">
      {fullscreen ? (
        <FullscreenExitOutlined
          className="text-base"
          title={f({ id: "exitFullscreen" })}
          onClick={toggleFull}
        />
      ) : (
        <FullscreenOutlined
          className="text-base"
          title={f({ id: "fullscreen" })}
          onClick={toggleFull}
        />
      )}
    </div>
  );
};
export default FullscreenSwitch;
