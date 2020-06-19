import { Command } from "gg-editor";
import React from "react";
import { Tooltip } from "antd";
import IconFont from "../common/IconFont";

const upperFirst = (str: string) =>
  str.toLowerCase().replace(/( |^)[a-z]/g, (l: string) => l.toUpperCase());

interface ToolbarButtonProps {
  command: string;
  icon?: string;
  text?: string;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  command,
  icon,
  text,
}) => {
  return (
    <Command
      key={command}
      name={command}
      className="command"
      disabledClassName="commandDisabled"
    >
      <Tooltip
        title={text || upperFirst(command)}
        placement="bottom"
        overlayClassName="tooltip"
      >
        <IconFont type={`icon-${icon || command}`} />
      </Tooltip>
    </Command>
  );
};

export default ToolbarButton;
