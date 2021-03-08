import React from 'react';
import { Liquid } from '@ant-design/charts';
import { Card } from 'antd';

const DemoLiquid: React.FC = () => {
  var config = {
    percent: 0.25,
    statistic: {
      content: {
        style: {
          fontSize: 60,
          fill: 'black',
          lineHeight: 1,
        },
      },
    },
  };
  return (
    <Card>
      {/* @ts-ignore */}
      <Liquid {...config} />
    </Card>
  );
};

export default DemoLiquid;