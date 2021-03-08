import React from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import { RootState } from "../../store";
import { Theme } from "../../store/app/type";
import { toggleTheme } from "../../store/app/actions";
const { Option } = Select;

const ThemeSwitch: React.FC = () => {
  const theme = useSelector<RootState>((state) => state.app.theme) as Theme;
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
export default ThemeSwitch;
