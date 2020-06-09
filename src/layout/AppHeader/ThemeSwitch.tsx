import React from "react";
import { Switch } from "antd";
import { useStore } from "../../store";

const ThemeSwitch = () => {
  const {
    appStore: { theme, toggleTheme },
  } = useStore();
  return (
    <div className="theme-switch action">
      <Switch
        checkedChildren="🌞"
        unCheckedChildren="🌛"
        defaultChecked={theme === "default"}
        onChange={()=>toggleTheme()}
      />
    </div>
  );
};
export default ThemeSwitch;
