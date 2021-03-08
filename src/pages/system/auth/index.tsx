import React, { useState, useEffect } from "react";
import { Card, Table, Space, Button, Popconfirm } from "antd";
import { Auth } from "../../../api/system";
import { getAuthList } from "../../../api/system";
import TableToolbar, {
  TableSize,
  Column,
} from "../../../components/TableToolbar";

const AuthPage = () => {
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
      width: "100px",
      render: (_: any, record: Auth) => (
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

  const [list, setList] = useState<Auth[]>([]);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<TableSize>("middle");
  const [currColumns, setCurrColumns] = useState<Array<Column>>(columns);

  useEffect(() => {
    getListData();
  }, []);

  const getListData = async () => {
    try {
      setLoading(true);
      const {
        data: { list },
      } = await getAuthList();
      setList(list);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onNewClick = () => {};

  const onColumnsChange = (columns: Array<Column>) => {
    setCurrColumns(columns);
  };

  return (
    <Card>
      <TableToolbar
        title="AuthList"
        size={size}
        onSizeChange={setSize}
        onReload={() => getListData()}
        columns={columns}
        onColumnsChange={onColumnsChange}
      >
        <Button onClick={onNewClick}>NewAuth</Button>
      </TableToolbar>
      <Table
        loading={loading}
        columns={currColumns}
        rowKey="id"
        dataSource={list}
        pagination={false}
      />
    </Card>
  );
};
export default AuthPage;
