import React from 'react';
import GGEditor, { Mind, EditableLabel } from 'gg-editor';
import { MindData } from 'gg-editor/lib/common/interfaces';
import { Card, Row, Col } from 'antd';
import MindToolbar from '../components/EditorToolbar/MindToolbar';
import FlowContextMenu from '../components/EditorContextMenu/FlowContextMenu';
import styled from 'styled-components';

const MindWrapper = styled(Mind)`
  position: relative;
  height: 600px;
  overflow:hidden;
`;

const data: MindData = {
  id: '0',
  label: 'Central Topic',
  children: [
    {
      id: '1',
      side: 'left',
      label: 'Main Topic 1',
    },
    {
      id: '2',
      side: 'right',
      label: 'Main Topic 2',
    },
    {
      id: '3',
      side: 'right',
      label: 'Main Topic 3',
    },
  ],
};

function MindPage() {
  return (
    <Card title="MindEditor" bodyStyle={{ padding: 0 }}>
    <GGEditor>
      <Row>
        <Col span={24}>
          <MindToolbar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <MindWrapper  data={data} />
          <EditableLabel/>
        </Col>
      </Row>
      <FlowContextMenu />
    </GGEditor>
  </Card>
  );
}

export default MindPage;