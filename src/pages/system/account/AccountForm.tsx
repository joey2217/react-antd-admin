import React, { useEffect } from "react";
import { Modal, Form, Input, Select, message } from "antd";
import {Account} from "../../../api/system"
import { addAccount, updateAccount } from "../../../api/system";

const { Option } = Select;

export type Op = "add" | "update";

interface Props {
  show: boolean;
  accountData: Account | undefined;
  op: Op;
  onClose: () => void;
  refresh: () => void;
}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

const AccountForm = ({ show, onClose, accountData, op, refresh }: Props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (accountData) {
      form.setFieldsValue(accountData);
    }
  }, [accountData, form]);

  const onOK = async () => {
    try {
      const values: any = await form.validateFields();
      if (op === "add") {
        const {
          data: { message: msg },
        } = await addAccount(values);
        message.success(msg);
      } else if (op === "update") {
        const {
          data: { message: msg },
        } = await updateAccount(values);
        message.success(msg);
      }
      onClose();
      refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal title="AccountForm" visible={show} onOk={onOK} onCancel={onClose}>
      <Form name="basic" form={form} {...layout}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Account"
          name="account"
          rules={[{ required: true, message: "Please input your account!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please select your status!" }]}
        >
          <Select placeholder="Status" allowClear>
            <Option value={1}>Enabled</Option>
            <Option value={0}>Disabled</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Roles"
          name="roles"
          rules={[{ required: true, message: "Please select your roles!" }]}
        >
          <Select mode="multiple" placeholder="Roles" allowClear>
            <Option value="admin">Admin</Option>
            <Option value="user">User</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AccountForm;
