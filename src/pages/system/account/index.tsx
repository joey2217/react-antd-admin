import React, { useCallback, useState } from "react";
import { Table, Tag, Space, Card, Button, Popconfirm, message } from "antd";
import Search from "../../../components/SearchForm";
import TableToolbar, {
  TableSize,
  Column,
} from "../../../components/TableToolbar";
import {
  getAccountList,
  deleteAccount,
  Status,
  Role,
  Account,
} from "../../../api/system";
import AccountForm, { Op } from "./AccountForm";
import { Page, usePage } from "../../../hooks/usePage";

const AccountPage: React.FC = () => {
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      sorter: (a: Account, b: Account) => a.username.length - b.username.length,
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
      sorter: (a: Account, b: Account) => a.username.length - b.username.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "DISABLED",
          value: 0,
        },
        {
          text: "ENABLED",
          value: 1,
        },
      ],
      onFilter: (value: number, record: Account) => record.status === value,
      render: (status: Status) => {
        if (status === 0) {
          return <span style={{ color: "#f5222d" }}>Disabled</span>;
        } else {
          return <span style={{ color: "#52c41a" }}>Enabled</span>;
        }
      },
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
      filters: [
        {
          text: "Admin",
          value: "admin",
        },
        {
          text: "User",
          value: "user",
        },
      ],
      onFilter: (value: Role, record: Account) => record.roles.includes(value),
      render: (roles: Role[]) => (
        <>
          {roles.map((role) => {
            const color = role === "admin" ? "success" : "default";
            return (
              <Tag color={color} key={role}>
                {role.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Account) => (
        <Space size="middle">
          <Button
            type="link"
            size="small"
            onClick={() => {
              setOp("update");
              setShow(true);
              setAccountData(record);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => record.id && onDelete([record.id])}
          >
            <Button type="link" size="small">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const [size, setSize] = useState<TableSize>("middle");
  const [currColumns, setCurrColumns] = useState<Array<Column>>(columns);
  const [search, setSearch] = useState<Partial<Account>>({});
  const [show, setShow] = useState(false);
  const [accountData, setAccountData] = useState<Account>();
  const [op, setOp] = useState<Op>("add");
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);

  const getList = useCallback(
    async (page: Page) => {
      const {
        data: { total, list },
      } = await getAccountList({
        pageNum: page.page,
        pageSize: page.size,
        ...search,
      });
      return {
        list,
        total,
      };
    },
    [search],
  )

  const { loading, dataSource, pagination } = usePage(getList);

  const onNewClick = () => {
    setShow(true);
    setOp("add");
    setAccountData({
      username: "",
      account: "",
      status: Status.ENABLED,
      roles: ["user"],
    });
  };

  const onColumnsChange = (columns: Array<Column>) => {
    setCurrColumns(columns);
  };

  const reload = () => setSearch({ ...search });

  const onDelete = async (ids: (string | number)[]) => {
    const {
      data: { message: msg },
    } = await deleteAccount(ids);
    if (selectedRowKeys.length > 0) {
      setSelectedRowKeys([]);
    }
    message.success(msg);
    reload();
  };

  return (
    <div>
      <Card>
        <Search
          fields={[
            { name: "username", label: "Username" },
            { name: "account", label: "Account" },
          ]}
          onSearch={(v) => setSearch({ ...v })}
        />
      </Card>
      <Card>
        <TableToolbar
          title="AccountList"
          size={size}
          onSizeChange={setSize}
          onReload={reload}
          columns={columns}
          onColumnsChange={onColumnsChange}
        >
          <Button onClick={onNewClick}>NewAccount</Button>
          {selectedRowKeys.length > 0 && (
            <Button onClick={() => onDelete(selectedRowKeys)}>
              Delete {selectedRowKeys.length} accounts
            </Button>
          )}
        </TableToolbar>
        <Table
          columns={currColumns}
          size={size}
          rowKey="id"
          rowSelection={{
            onChange: (selectedRowKeys) => {
              setSelectedRowKeys(selectedRowKeys as number[]);
            },
          }}
          dataSource={dataSource}
          loading={loading}
          pagination={pagination}
        />
      </Card>
      <AccountForm
        show={show}
        op={op}
        accountData={accountData}
        onClose={() => setShow(false)}
        refresh={reload}
      />
    </div>
  );
};
export default AccountPage;
