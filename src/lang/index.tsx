import React, { PropsWithChildren, useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Lang } from "../store/app/type";

import enUSAntd from "antd/es/locale/en_US";
import zhCNAntd from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import en from "./en";
import zhCN from "./zhCN";

moment.locale("en");

const IntlWrapper = (props: PropsWithChildren<unknown>) => {
  const lang = useSelector<RootState>((state) => state.app.lang) as Lang;

  const [intlMessage, setIntlMessage] = useState(zhCN);
  const [configLocale, setConfigLocale] = useState(zhCNAntd);

  useEffect(() => {
    if (/zh/.test(lang)) {
      setConfigLocale(zhCNAntd);
      moment.locale("zh-cn");
      setIntlMessage(zhCN);
    } else {
      setConfigLocale(enUSAntd);
      moment.locale("en");
      setIntlMessage(en);
    }
  }, [lang]);

  return (
    <IntlProvider locale={lang} messages={intlMessage}>
      <ConfigProvider locale={configLocale}>{props.children}</ConfigProvider>
    </IntlProvider>
  );
};

export default IntlWrapper;
