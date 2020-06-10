import React, { useState } from "react";
import { Form, Row, Col, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface Field {
  name: string;
  label: string;
  rules?: Array<any>; // Form.rules
  placeholder?: string;
}

interface SearchProps {
  fields: Array<Field>;
  onSearch: (p: any) => void;
  showLabel?: boolean;
}

const Search = ({ fields, onSearch, showLabel = false }: SearchProps) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    let count = 0;
    if (fields.length > 3) {
      count = expand ? fields.length : 3;
    } else {
      count = fields.length;
    }
    const children = [];
    for (let i = 0; i < count; i++) {
      const field = fields[i];
      children.push(
        <Col span={8} key={field.name}>
          <Form.Item
            name={field.name}
            label={showLabel && field.label}
            rules={field.rules}
          >
            <Input placeholder={field.placeholder || field.label} />
          </Form.Item>
        </Col>
      );
    }
    return children;
  };

  const getRow = () => {
    if (fields && fields.length > 2) {
      return (
        <>
          <Row gutter={24}>{getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button
                style={{ margin: "0 8px" }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                Clear
              </Button>
              {fields && fields.length > 3 && (
                <div
                  className="action-button"
                  style={{ fontSize: 12 }}
                  onClick={() => {
                    setExpand(!expand);
                  }}
                >
                  {expand ? <UpOutlined /> : <DownOutlined />} Collapse
                </div>
              )}
            </Col>
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Row gutter={24}>
            {getFields()}
            <Col span={8} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button
                style={{ margin: "0 8px" }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                Clear
              </Button>
            </Col>
          </Row>
        </>
      );
    }
  };

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="search-form"
      onFinish={onFinish}
    >
      {getRow()}
    </Form>
  );
};
export default Search;
