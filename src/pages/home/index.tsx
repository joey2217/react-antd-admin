import React, { memo } from "react";
import { Typography, DatePicker } from "antd";
import { useIntl } from "react-intl";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../store";
import useRequest from "../../hooks/useRequest";
import { AxiosRequestConfig } from "axios";

const { Title } = Typography;

const config: AxiosRequestConfig = { url: "/api/hello" };

const Home: React.FC = () => {
  const { formatMessage: f } = useIntl();

  const { username, lang } = useSelector<
    RootState,
    { username: string; lang: string }
  >(
    (state) => ({
      username: state.user.username,
      lang: state.app.lang,
    }),
    shallowEqual
  );

  const { data } = useRequest<string>(config);

  return (
    <div>
      <Title level={3}>Username:{username}</Title>
      <Title level={3}>Lang:{lang}</Title>
      <Title level={3}>I18n:{f({ id: "hello" })}</Title>
      <DatePicker />
      <h2>{data}</h2>
    </div>
  );
};

export default memo(Home);
