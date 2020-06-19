import React from "react";
import { Divider } from "antd";
import { constants } from "gg-editor";
import "./index.less";
import ToolbarButton from "./ToolbarButton";

const { EditorCommand } = constants;

const FLOW_COMMAND_LIST = [
  EditorCommand.Undo,
  EditorCommand.Redo,
  "|",
  EditorCommand.Copy,
  EditorCommand.Paste,
  EditorCommand.Remove,
  "|",
  EditorCommand.ZoomIn,
  EditorCommand.ZoomOut,
];

const FlowToolbar = () => {
  return (
    <div className="toolbar">
      {FLOW_COMMAND_LIST.map((name, index) => {
        if (name === "|") {
          return <Divider key={index} type="vertical" />;
        }
        return <ToolbarButton key={name} command={name} />;
      })}
    </div>
  );
};

export default FlowToolbar;
