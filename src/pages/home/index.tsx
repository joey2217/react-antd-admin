import React from "react";
import { Typography, DatePicker } from "antd";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const { Title } = Typography;

const Home: React.FC = () => {
  const { formatMessage: f } = useIntl();

  const username = useSelector<RootState>(
    (state) => state.user.username
  ) as string;
  const lang = useSelector<RootState>((state) => state.app.lang) as string;

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
