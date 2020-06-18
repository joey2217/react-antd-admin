import React from "react";
import { Card, Table, Space, Button, Popconfirm } from "antd";

const data: any[] | undefined = [
  
];

const Auth = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Account) => (
        <Space size="middle">
          <Button type="link" size="small" onClick={() => {}}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {}}
          >
            <Button type="link" size="small">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Card>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </>
  );
};
export default Auth;
