import React from "react";
import { Command } from "gg-editor";
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
      className="inline-block w-7 h-7 mx-2 pb-1 text-center cursor-pointer hover:border-gray-400"
      disabledClassName="cursor-not-allowed text-gray-600"
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
