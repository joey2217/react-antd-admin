import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";
import { Card } from "antd";

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data: data,
    xField: "year",
    yField: "gdp",
    seriesField: "name",
    yAxis: {
      label: {
        formatter: function formatter(v: number) {
          return "".concat((v / 1000000000).toFixed(1), " B");
        },
      },
    },
    legend: { position: "top" },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };
  return (
    <Card bodyStyle={{ padding: 10 }}>
      {/*  @ts-ignore */}
      <Line {...config} />;
    </Card>
  );
};

export default DemoLine;
