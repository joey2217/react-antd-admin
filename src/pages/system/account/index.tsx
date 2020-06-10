import React from "react";
import { Table, Tag, Space, Card } from "antd";
import Search from "../../../components/SearchForm";
import TableToolbar from "../../../components/TableToolbar";

const { Column } = Table;

const data: any[] | undefined = [
  {
    name: "123",
    username: "123123",
    status: 1,
    roles: ["admin"],
  },
];

const Account = () => {
  return (
    <div>
      <Card>
        <Search
          fields={[
            { name: "name", label: "Name" },
            { name: "name", label: "Name" },
            { name: "name", label: "Name" },
            { name: "name", label: "Name" },
          ]}
          onSearch={(v) => console.log(v)}
        />
      </Card>
      <Card>
        <TableToolbar title="账号"></TableToolbar>
        <Table dataSource={data}>
          <Column title="Name" dataIndex="name" />
          <Column title="username" dataIndex="username" />
          <Column title="status" dataIndex="status" />
          <Column
            title="roles"
            dataIndex="roles"
            render={(roles) => (
              <>
                {roles.map((role: string) => (
                  <Tag color="cyan" key={role}>
                    {role}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <button className="action-button">Edit</button>
                <button className="action-button">Delete</button>
              </Space>
            )}
          />
        </Table>
      </Card>
    </div>
  );
};
export default Account;
