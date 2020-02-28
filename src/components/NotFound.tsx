import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
 
const NotFound = () => {
  return (
    <Row justify="center" align="middle" style={{height:'80vh'}}>
      <Col>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
          alt="NotFound"
        />
      </Col>
      <Col>
        <Title>404</Title>
        <Title type="secondary" level={4}>抱歉，你访问的页面不存在。</Title>
        <Link to="/">
         <Button type="primary">Home</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default NotFound;
