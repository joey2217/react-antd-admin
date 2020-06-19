import { Item, ItemPanel, constants } from "gg-editor";

import { Card } from "antd";
import React from "react";
import "./index.less";

const { ItemType } = constants;

const FlowItemPanel = () => (
  <ItemPanel className="itemPanel">
    <Card style={{width:'100%',height:'100%'}}>
      <Item
        className="item"
        type={ItemType.Node}
        model={{
          color: "#FA8C16",
          label: "Node",
          size: [125,65],
        }}
      >
        <img
          src="https://via.placeholder.com/125x65/9FD5FC/000000/?text=Node"
          width="100"
          height="65"
          draggable={false}
          alt="circle"
        />
      </Item>
      <Item
        className="item"
        type={ItemType.Node}
        model={{
          color: "#FA8C16",
          shape: 'string',
          type: 'string',
          size: 50,
          label: "Circle",
        }}
      >
        <img
          src="https://gw.alicdn.com/tfs/TB1IRuSnRr0gK0jSZFnXXbRRXXa-110-112.png"
          width="55"
          height="56"
          draggable={false}
          alt="circle"
        />
      </Item>
      <Item
        className="item"
        type={ItemType.Node}
        model={{
          type: "rect",
          size: [80, 24],
          label: "rect",
        }}
      >
        <img
          src="https://gw.alicdn.com/tfs/TB1reKOnUT1gK0jSZFrXXcNCXXa-178-76.png"
          width="89"
          height="38"
          draggable={false}
          alt="rect"
        />
      </Item>
      <Item
        className="item"
        model={{
          type: "ellipse",
          size: [100, 50],
          label: "ellipse",
        }}
      >
        <img
          src="https://gw.alicdn.com/tfs/TB1AvmVnUH1gK0jSZSyXXXtlpXa-216-126.png"
          width="108"
          height="63"
          draggable={false}
          alt="ellipse"
        />
      </Item>
      <Item
        className="item"
        model={{
          type: "diamond",
          size: [80, 80],
          label: "diamond",
        }}
      >
        <img
          src="https://gw.alicdn.com/tfs/TB1EB9VnNz1gK0jSZSgXXavwpXa-178-184.png"
          width="89"
          height="92"
          draggable={false}
          alt="diamond"
        />
      </Item>
      <Item
        className="item"
        model={{
          type: "triangle",
          size: [30, 30],
          label: "triangle",
        }}
      >
        <img
          src="https://gw.alicdn.com/tfs/TB12sC2nKH2gK0jSZJnXXaT1FXa-126-156.png"
          width="63"
          height="78"
          draggable={false}
          alt="triangle"
        />
      </Item>
    </Card>
  </ItemPanel>
);

export default FlowItemPanel;
