// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Gauge } from "@ant-design/charts";
import { Card } from "antd";
import { useStore } from "../../../store";
import { observer } from "mobx-react";

const DemoGauge: React.FC = () => {
  const {
    appStore: { theme },
  } = useStore();
  const config = {
    title: {
      visible: true,
      text: "仪表盘个性化配置",
      style: {
        fontSize: 18,
        fill: theme === "default" ? "black" : "#fff",
      },
    },
    width: 400,
    height: 400,
    value: 75,
    min: 0,
    max: 100,
    range: [0, 75],
    color: ["l(0) 0:#5d7cef 1:#e35767"],
    axis: {
      offset: -15,
      tickLine: {
        visible: true,
        length: 10,
      },
      label: { visible: false },
    },
    pivot: {
      visible: true,
      thickness: 10,
      pointer: {
        visible: true,
        style: { fill: "#e25869" },
      },
      pin: {
        visible: true,
        style: { fill: "#e8e6ea" },
      },
    },
    statistic: {
      visible: true,
      position: ["50%", "100%"] as string[],
      text: "26/48",
      color: "#2e3033",
      size: 40,
    },
  };
  return (
    <Card bodyStyle={{ padding: 10 }}>
      <Gauge {...config} />
    </Card>
  );
};

export default observer(DemoGauge);
