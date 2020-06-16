import React, { useState } from "react";
import {
  SettingOutlined,
  VerticalAlignMiddleOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import { Tooltip, Checkbox, Popover, Button, Typography, Space } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
`;

type FixedType = "left" | "right" | undefined;
type ColumnKey = string | number;

export interface Column {
  key: ColumnKey;
  title: string;
  fixed?: FixedType;
  [prop: string]: any;
}

export interface ColumnSettingProps {
  columns: Array<Column>;
  onColumnsChange: (columns: Array<Column>) => void;
}

const ColumnSetting = ({ columns, onColumnsChange }: ColumnSettingProps) => {
  const allCheckedList = Array.from(columns, (column) => column.key);
  const defaultColumns = Array.from(columns, (column) => ({
    fixed: undefined,
    ...column,
  }));

  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);
  const [checkedList, setCheckedList] = useState(allCheckedList);
  const [currKey, setCurrKey] = useState<ColumnKey>("");
  const [columnOptions, setColumnOptions] = useState<Column[]>(defaultColumns);

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const checked = e.target.checked;
    const checkedList = checked ? allCheckedList : [];
    setCheckedList(checkedList);
    setIndeterminate(false);
    setCheckAll(checked);
    onColumnsChange(
      columnOptions.filter((column) => checkedList.includes(column.key))
    );
  };

  const onReset = () => {
    setCheckedList(allCheckedList);
    setIndeterminate(false);
    setCheckAll(true);
    setColumnOptions(defaultColumns);
    onColumnsChange(columns);
  };

  const ColumnSettingTitle = (
    <FlexWrapper>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Column Display
      </Checkbox>
      <Button type="link" size="small" onClick={onReset}>
        Reset
      </Button>
    </FlexWrapper>
  );

  const onChange = (checkedList: (string | number)[]) => {
    setCheckedList(checkedList);
    const indeterminate =
      !!checkedList.length && checkedList.length < columns.length;
    setIndeterminate(indeterminate);
    setCheckAll(checkedList.length === columns.length);
    onColumnsChange(
      columnOptions.filter((column) => checkedList.includes(column.key))
    );
  };

  const onColumnFixedChange = (key: ColumnKey, fixed: FixedType) => {
    const list = [...columnOptions];
    const index = columns.findIndex((column) => column.key === key);
    const column = { ...columns[index], fixed };
    console.log(column, index);
    list.splice(index, 1, column);
    setColumnOptions(list);
    const fixedLeft = list.filter((column) => column.fixed === "left");
    const fixedRight = list.filter((column) => column.fixed === "right");
    const noFixed = list.filter((column) => column.fixed === undefined);
    onColumnsChange([...fixedLeft, ...noFixed, ...fixedRight]);
  };
  const ColumnSettingContent = () => {
    const fixedLeft = columnOptions.filter((column) => column.fixed === "left");
    const fixedRight = columnOptions.filter(
      (column) => column.fixed === "right"
    );
    const noFixed = columnOptions.filter(
      (column) => column.fixed === undefined
    );
    return (
      <Checkbox.Group
        style={{ display: "flex", flexDirection: "column" }}
        value={checkedList}
        onChange={(checkedList) => onChange(checkedList as (string | number)[])}
      >
        {fixedLeft.length > 0 && (
          <Typography.Text type="secondary">Fixed the left</Typography.Text>
        )}
        {fixedLeft.map((column: Column) => (
          <FlexWrapper key={column.key}>
            <Checkbox style={{ marginRight: "auto" }} value={column.key}>
              {column.title}
            </Checkbox>
            <Space>
              <Tooltip title="No Fixed">
                <VerticalAlignMiddleOutlined
                  onClick={() => onColumnFixedChange(column.key, undefined)}
                />
              </Tooltip>
              <Tooltip title="Fixed Right">
                <PushpinOutlined
                  onClick={() => onColumnFixedChange(column.key, "right")}
                />
              </Tooltip>
            </Space>
          </FlexWrapper>
        ))}
        {noFixed.length > 0 && noFixed.length < columnOptions.length && (
          <Typography.Text type="secondary">Not Fixed</Typography.Text>
        )}
        {noFixed.map((column: Column) => (
          <FlexWrapper
            key={column.key}
            onMouseEnter={() => {
              setCurrKey(column.key);
            }}
            onMouseLeave={() => {
              setCurrKey("");
            }}
          >
            <Checkbox style={{ marginRight: "auto" }} value={column.key}>
              {column.title}
            </Checkbox>
            {currKey === column.key && (
              <Space>
                <Tooltip title="Fixed Left">
                  <PushpinOutlined
                    style={{ transform: "rotate(-90deg)" }}
                    onClick={() => onColumnFixedChange(column.key, "left")}
                  />
                </Tooltip>
                <Tooltip title="Fixed Right">
                  <PushpinOutlined
                    onClick={() => onColumnFixedChange(column.key, "right")}
                  />
                </Tooltip>
              </Space>
            )}
          </FlexWrapper>
        ))}
        {fixedRight.length > 0 && (
          <Typography.Text type="secondary">Fixed the right</Typography.Text>
        )}
        {fixedRight.map((column: Column) => (
          <FlexWrapper key={column.key}>
            <Checkbox value={column.key}>{column.title}</Checkbox>
            <Space>
              <Tooltip title="Fixed Left">
                <PushpinOutlined
                  style={{ transform: "rotate(-90deg)" }}
                  onClick={() => onColumnFixedChange(column.key, "left")}
                />
              </Tooltip>
              <Tooltip title="No Fixed">
                <VerticalAlignMiddleOutlined
                  onClick={() => onColumnFixedChange(column.key, undefined)}
                />
              </Tooltip>
            </Space>
          </FlexWrapper>
        ))}
      </Checkbox.Group>
    );
  };
  return (
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
  );
};
export default ColumnSetting;
