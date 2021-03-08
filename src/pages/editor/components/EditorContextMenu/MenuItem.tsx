import React from "react";
import IconFont from "../common/IconFont";
import { Command } from "gg-editor";

const upperFirst = (str: string) =>
  str.toLowerCase().replace(/( |^)[a-z]/g, (l: string) => l.toUpperCase());

interface MenuItemProps {
  command: string;
  hide: () => void;
  icon?: string;
  text?: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ command, hide, icon, text }) => {
  return (
    <Command
      name={command}
      key={command}
      className="command"
      disabledClassName="commandDisabled"
    >
      <div className="item" onClick={hide}>
        <IconFont type={`icon-${icon || command}`} />
        <span>{text || upperFirst(command)}</span>
      </div>
    </Command>
  );
};

export default MenuItem;
