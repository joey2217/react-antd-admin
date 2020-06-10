import React from "react";
import styled from "styled-components";
import { Button, Divider } from "antd";
import { ColumnHeightOutlined } from "@ant-design/icons";

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

interface Props {
  title: string;
}

const TableToolbar = ({ title }: Props) => {
  return (
    <TableToolbarWrapper>
      <div className="title">{title}</div>
      <div className="right">
        <Button>new</Button>
        <Divider type="vertical" />
        <ColumnHeightOutlined />
      </div>
    </TableToolbarWrapper>
  );
};
export default TableToolbar;
