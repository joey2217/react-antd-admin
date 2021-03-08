import React, { PropsWithChildren } from "react";
import { Divider, Space, Dropdown, Menu, Tooltip } from "antd";
import { ColumnHeightOutlined, RedoOutlined } from "@ant-design/icons";
import ColumnSetting, {
  ColumnSettingProps,
  Column as ColumnSettingColumn,
} from "./ColumnSetting";

export type Column = ColumnSettingColumn;

export type TableSize = "small" | "middle" | "large";

interface Props {
  title: string;
  size?: TableSize;
  onSizeChange: (size: TableSize) => void;
  onReload: () => void;
}

const TableToolbar: React.FC<PropsWithChildren<Props & ColumnSettingProps>> = ({
  title,
  children,
  size = "middle",
  onSizeChange,
  onReload,
  columns,
  onColumnsChange,
}) => {
  const sizeMenu = (
    <Menu
      onClick={({ key }) => onSizeChange(key as TableSize)}
      selectedKeys={[size]}
    >
      <Menu.Item key="default">default</Menu.Item>
      <Menu.Item key="middle">middle</Menu.Item>
      <Menu.Item key="small">small</Menu.Item>
    </Menu>
  );

  return (
    <div className="flex justify-between items-center pb-4">
      <div>{title}</div>
      <Space>
        {children}
        <Divider type="vertical" />
        <Dropdown overlay={sizeMenu} trigger={["click"]}>
          <Tooltip title="Size">
            <ColumnHeightOutlined />
          </Tooltip>
        </Dropdown>
        <Tooltip title="Reload">
          <RedoOutlined onClick={onReload} />
        </Tooltip>
        <ColumnSetting {...{ columns, onColumnsChange }} />
      </Space>
    </div>
  );
};

export default TableToolbar;
