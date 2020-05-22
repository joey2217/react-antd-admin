import React from "react";
import { Typography } from "antd";

import { useStore } from "../../store";
import { observer } from "mobx-react";

const { Title } = Typography;

const Home = () => {
  const {
    userStore: { username },
  } = useStore();

  return <Title level={3}>Username:{username}</Title>;
};

export default observer(Home);
