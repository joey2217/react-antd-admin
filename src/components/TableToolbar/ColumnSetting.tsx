import React, { useState } from "react";
import {
  SettingOutlined,
  VerticalAlignMiddleOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import { Tooltip, Checkbox, Popover, Button, Typography, Space } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

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

const ColumnSetting: React.FC<ColumnSettingProps> = ({
  columns,
  onColumnsChange,
}) => {
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

  const getColumns = (list: Column[]) => {
    const fixedLeft = list.filter((column) => column.fixed === "left");
    const fixedRight = list.filter((column) => column.fixed === "right");
    const noFixed = list.filter((column) => column.fixed === undefined);
    return [...fixedLeft, ...noFixed, ...fixedRight];
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const checked = e.target.checked;
    const checkedList = checked ? allCheckedList : [];
    setCheckedList(checkedList);
    setIndeterminate(false);
    setCheckAll(checked);
    const list = columnOptions.filter((column) =>
      checkedList.includes(column.key)
    );
    onColumnsChange(getColumns(list));
  };

  const onReset = () => {
    setCheckedList(allCheckedList);
    setIndeterminate(false);
    setCheckAll(true);
    setColumnOptions(defaultColumns);
    onColumnsChange(columns);
  };

  const ColumnSettingTitle = (
    <div className="flex items-center justify-between h-8">
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
    </div>
  );

  const onChange = (checkedValueList: (string | number)[]) => {
    setCheckedList(checkedValueList);
    const indeterminate =
      !!checkedValueList.length && checkedValueList.length < columns.length;
    setIndeterminate(indeterminate);
    setCheckAll(checkedValueList.length === columns.length);
    const list = columnOptions.filter((column) =>
      checkedValueList.includes(column.key)
    );
    onColumnsChange(getColumns(list));
  };

  const onColumnFixedChange = (key: ColumnKey, fixed: FixedType) => {
    const list = [...columnOptions];
    const index = columns.findIndex((column) => column.key === key);
    const column = { ...columns[index], fixed };
    console.log(column, index);
    list.splice(index, 1, column);
    setColumnOptions(list);
    onColumnsChange(getColumns(list));
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
          <div
            className="flex items-center justify-between h-8"
            key={column.key}
          >
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
          </div>
        ))}
        {noFixed.length > 0 && noFixed.length < columnOptions.length && (
          <Typography.Text type="secondary">Not Fixed</Typography.Text>
        )}
        {noFixed.map((column: Column) => (
          <div
            className="flex items-center justify-between h-8"
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
                    rotate={-90}
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
          </div>
        ))}
        {fixedRight.length > 0 && (
          <Typography.Text type="secondary">Fixed the right</Typography.Text>
        )}
        {fixedRight.map((column: Column) => (
          <div
            className="flex items-center justify-between h-8"
            key={column.key}
          >
            <Checkbox value={column.key}>{column.title}</Checkbox>
            <Space>
              <Tooltip title="Fixed Left">
                <PushpinOutlined
                  rotate={-90}
                  onClick={() => onColumnFixedChange(column.key, "left")}
                />
              </Tooltip>
              <Tooltip title="No Fixed">
                <VerticalAlignMiddleOutlined
                  onClick={() => onColumnFixedChange(column.key, undefined)}
                />
              </Tooltip>
            </Space>
          </div>
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
