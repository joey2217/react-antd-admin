import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Button, Divider, Space, Dropdown, Menu, Tooltip } from "antd";
import { ColumnHeightOutlined, RedoOutlined } from "@ant-design/icons";
import ColumnSetting, { ColumnSettingProps, Column as ColumnSettingColumn } from "./ColumnSetting";

const TableToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  .title {
    font-size: 16px;
    line-height: 24px;
    opacity: 0.85;
  }
  .right {
    flex-flow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
export type Column = ColumnSettingColumn;

export type TableSize = "small" | "middle" | "large";

interface Props {
  title: string;
  size: TableSize;
  onSizeChange: (size: TableSize) => void;
  onReload: () => void;
}

const TableToolbar = ({
  title,
  children,
  size,
  onSizeChange,
  onReload,
  columns,
  onColumnsChange,
}: PropsWithChildren<Props & ColumnSettingProps>) => {
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
    <TableToolbarWrapper>
      <div className="title">{title}</div>
      <Space className="right">
        <Button>new</Button>
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
    </TableToolbarWrapper>
  );
};

export default TableToolbar;
