import React from "react";
import { ContextMenu } from "gg-editor";
import MenuItem from "./MenuItem";

const FlowContextMenu:React.FC = () => (
  <ContextMenu
    renderContent={(item, position, hide) => {
      const { x: left, y: top } = position;
      return (
        <div
          className="contextMenu"
          style={{ position: "absolute", top, left }}
        >
          <MenuItem command="undo" hide={hide} />
          <MenuItem command="redo" hide={hide} />
          <MenuItem
            command="pasteHere"
            hide={hide}
            icon="paste"
            text="Paste Here"
          />
        </div>
      );
    }}
  />
);

export default FlowContextMenu;
