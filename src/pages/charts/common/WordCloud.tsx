// @ts-nocheck
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
      "https://gw.alipayobjects.com/os/antfincdn/fLPUlSQCRI/word-cloud.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = getWordCloudConfig(data);
  function getDataList(data: any[]) {
    const list: { word: any; weight: any; id: number }[] = [];
    data.forEach((d: { name: any; value: any }) => {
      list.push({
        word: d.name,
        weight: d.value,
        id: list.length,
      });
    });
    return list;
  }
  function getWordCloudConfig(data: never[]) {
    return {
      width: 600,
      height: 400,
      data: getDataList(data),
      maskImage:
        "https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ",
      wordStyle: {
        rotation: [-Math.PI / 2, Math.PI / 2] as number[],
        rotateRatio: 0.5,
        rotationSteps: 4,
        fontSize: [10, 60],
        color: (word: any, weight: any) => {
          return getRandomColor();
        },
        active: {
          shadowColor: "#333333",
          shadowBlur: 10,
        },
        gridSize: 8,
      },
      shape: "cardioid",
      shuffle: false,
      backgroundColor: "#fff",
      tooltip: { visible: true },
      selected: -1,
      onWordCloudHover: hoverAction,
    };
  }
  function getRandomColor() {
    const arr = [
      "#5B8FF9",
      "#5AD8A6",
      "#5D7092",
      "#F6BD16",
      "#E8684A",
      "#6DC8EC",
      "#9270CA",
      "#FF9D4D",
      "#269A99",
      "#FF99C3",
    ];
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  }
  function hoverAction(item: any, dimension: any, evt: any, start: any) {}
  return (
    <Card bodyStyle={{ padding: 0, overflow: "hidden" }}>
      {/* @ts-ignore */}
      <h3 style={{ textAlign: "center" }}>词云图</h3>
      <WordCloud {...config} />
    </Card>
  );
};

export default DemoWordCloud;
