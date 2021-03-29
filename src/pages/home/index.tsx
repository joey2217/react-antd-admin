import React from "react";
import { Typography, DatePicker } from "antd";
import { useIntl } from "react-intl";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../store";

const { Title } = Typography;

const Home: React.FC = () => {
  const { formatMessage: f } = useIntl();

  const { username, lang } = useSelector<RootState, { username: string; lang: string }>((state) => ({
    username: state.user.username,
    lang: state.app.lang,
  }), shallowEqual)
  return (
    <div>
      <Title level={3}>Username:{username}</Title>
      <Title level={3}>Lang:{lang}</Title>
      <Title level={3}>I18n:{f({ id: "hello" })}</Title>
      <DatePicker />
    </div>
  );
};

export default Home;
