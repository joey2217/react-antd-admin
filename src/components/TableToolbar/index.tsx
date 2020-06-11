import React, { PropsWithChildren, useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Divider,
  Space,
  Dropdown,
  Menu,
  Tooltip,
  Popover,
  Checkbox,
} from "antd";
import {
  ColumnHeightOutlined,
  RedoOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

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

export type TableSize = "small" | "middle" | "large";

interface Column {
  key: string | number;
  title: string;
  [prop: string]: any;
}

interface Props {
  title: string;
  size: TableSize;
  onSizeChange: (size: TableSize) => void;
  onReload: () => void;
  columns: Array<Column>;
  onColumnsChange: (checkedList: string[]) => void;
}

const TableToolbar = ({
  title,
  children,
  size,
  onSizeChange,
  onReload,
  columns,
  onColumnsChange,
}: PropsWithChildren<Props>) => {
  const options = Array.from(columns, (column: Column) => ({
    label: column.title,
    value: column.key,
    ...column,
  }));

  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);
  const [checkedList, setCheckedList] = useState(
    Array.from(options, (option) => option.value)
  );

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

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const checked = e.target.checked;
    const checkedList = checked
      ? Array.from(options, (option) => option.value)
      : [];
    setCheckedList(checkedList);
    setIndeterminate(false);
    setCheckAll(checked);
    onColumnsChange(checkedList as string[]);
  };

  const ColumnSettingTitle = (
    <div>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
    </div>
  );

  const onChange = (checkedList: string[]) => {
    setCheckedList(checkedList);
    const indeterminate =
      !!checkedList.length && checkedList.length < options.length;
    setIndeterminate(indeterminate);
    setCheckAll(checkedList.length === options.length);
    onColumnsChange(checkedList as string[]);
  };

  const ColumnSettingContent = (
    <Checkbox.Group
      style={{ display: "flex", flexDirection: "column" }}
      options={options}
      value={checkedList}
      onChange={(checkedList) => onChange(checkedList as string[])}
    />
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
        <Popover
          content={ColumnSettingContent}
          title={ColumnSettingTitle}
          trigger="click"
          placement="bottomRight"
        >
          <Tooltip title="ColumnSetting">
            <SettingOutlined />
          </Tooltip>
        </Popover>
      </Space>
    </TableToolbarWrapper>
  );
};

export default TableToolbar;
