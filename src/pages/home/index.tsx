import React from "react";
import { Typography, DatePicker } from "antd";
import { observer } from "mobx-react";
import {useIntl} from 'react-intl';

import { useStore } from "../../store";


const { Title } = Typography;

const Home = () => {

  const {formatMessage:f} =useIntl();

  const {
    userStore: { username },
    appStore:{lang}
  } = useStore();

  return (
    <div>
      <Title level={3}>Username:{username}</Title>
      <Title level={3}>Lang:{lang}</Title>
      <Title level={3}>I18n:{f({id:'hello'})}</Title>
      <DatePicker />
    </div>
  )
};

export default observer(Home);
