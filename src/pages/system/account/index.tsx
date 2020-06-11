import React, { useState } from "react";
import { Table, Tag, Space, Card } from "antd";
import Search from "../../../components/SearchForm";
import TableToolbar, { TableSize } from "../../../components/TableToolbar";

const { Column } = Table;

const data: any[] | undefined = [
  {
    name: "123",
    username: "123123",
    status: 1,
    roles: ["admin"],
  },
];

const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "username",
    dataIndex: "username",
    key: "username2",
  },
];

const Account = () => {
  const [size, setSize] = useState<TableSize>("middle");
  const [currColumns, setCurrColumns] = useState(columns);

  const onColumnsChange = (checkedList: string[]) => {
    setCurrColumns(
      columns.filter((column) => checkedList.includes(column.key))
    );
  };

  return (
    <div>
      <Card>
        <Search
          fields={[{ name: "name", label: "Name" }]}
          onSearch={(v) => console.log(v)}
        />
      </Card>
      <Card>
        <TableToolbar
          title="账号"
          size={size}
          onSizeChange={setSize}
          onReload={() => {}}
          columns={columns}
          onColumnsChange={onColumnsChange}
        ></TableToolbar>
        <Table dataSource={data} columns={currColumns} size={size} />
      </Card>
    </div>
  );
};
export default Account;
