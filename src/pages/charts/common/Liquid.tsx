import React from "react";
import { Liquid } from "@ant-design/charts";
import { Card } from "antd";
import { useStore } from "../../../store";
import { observer } from "mobx-react";

const DemoLiquid: React.FC = () => {
  const {
    appStore: { theme },
  } = useStore();
  
  const config = {
    title: {
      visible: true,
      text: "水波图",
    },
    description: {
      visible: true,
      text: "水波图 - 百分比显示",
      style: {
        fontSize: 18,
        fill: theme === "default" ? "black" : "#fff",
      },
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

export default observer(DemoLiquid);
