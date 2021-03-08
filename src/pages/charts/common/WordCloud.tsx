import React, { useState, useEffect } from "react";
import { WordCloud } from "@ant-design/charts";
import { Card } from "antd";

const DemoWordCloud: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antvdemo/assets/data/world-population.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  var config = {
    data: data,
    wordField: "x",
    weightField: "value",
    color: "#122c6a",
    wordStyle: {
      fontFamily: "Verdana",
      fontSize: [24, 80],
    },
    interactions: [{ type: "element-active" }],
    state: { active: { style: { lineWidth: 3 } } },
  };
  // @ts-ignore
  return (
    <Card>
      {/* @ts-ignore */}
      <WordCloud {...config} />
    </Card>
  );
};

export default DemoWordCloud;
