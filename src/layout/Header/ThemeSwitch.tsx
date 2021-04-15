import React, { memo } from "react";
import { Select } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import { RootState } from "../../store";
import { Theme } from "../../store/app/type";
import { toggleTheme } from "../../store/app/actions";
const { Option } = Select;

const ThemeSwitch: React.FC = () => {
  const { theme } = useSelector<RootState, { theme: Theme }>(
    (state) => ({
      theme: state.app.theme,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const { formatMessage: f } = useIntl();

  return (
    <div className="header-block">
      <Select
        className="w-28"
        defaultValue={theme}
        onChange={(theme: Theme) => dispatch(toggleTheme(theme))}
      >
        <Option value="dark"> 🌙 {f({ id: "dark" })}</Option>
        <Option value="light"> ☀ {f({ id: "light" })}</Option>
        <Option value="system"> 🖥 {f({ id: "systemTheme" })}</Option>
      </Select>
    </div>
  );
};
export default memo(ThemeSwitch);
