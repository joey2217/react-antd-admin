import React from "react";
import { Liquid } from "@ant-design/charts";
import { Card } from "antd";

const DemoLiquid: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: "水波图",
    },
    description: {
      visible: true,
      text: "水波图 - 百分比显示",
    },
    min: 0,
    max: 10000,
    value: 5639,
    statistic: {
      formatter: (value: number) => ((100 * value) / 10000).toFixed(1) + "%",
    },
  };
  return (
    <Card bodyStyle={{ padding: 10 }}>
      <Liquid {...config} />
    </Card>
  );
};

export default DemoLiquid;
