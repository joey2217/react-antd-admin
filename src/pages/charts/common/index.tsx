import React from "react";
import { Row, Col } from "antd";
import Rose from "./Rose";
import WordCloud from "./WordCloud";
import Liquid from "./Liquid";
import Gauge from "./Gauge";

const CommonCharts = () => {
  return (
    <Row>
      <Col xs={24} sm={12}>
        <Rose />
      </Col>
      <Col xs={24} sm={12}>
        <WordCloud />
      </Col>
      <Col xs={24} sm={12}>
        <Liquid />
      </Col>
      <Col xs={24} sm={12}>
        <Gauge />
      </Col>
    </Row>
  );
};
export default CommonCharts;
