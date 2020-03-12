import React from "react";
import { Menu, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useStore } from "../../../store";
import { observer } from "mobx-react";

const DropdownItem = styled(GlobalOutlined)`
  cursor: pointer;
  width: 1em;
  height: 1em;
`;

const localeList = [
  {
    label: "中文",
    value: "zh"
  },
  {
    label: "English",
    value: "en"
  }
];

const LocaleMenu = () => {
  const {
    appStore: { locale, toggleLocale }
  } = useStore();
  return (
    <Menu defaultOpenKeys={[locale]} onClick={e => toggleLocale(e.key)}>
      {localeList.map(locale => (
        <Menu.Item key={locale.value}> {locale.label} </Menu.Item>
      ))}
    </Menu>
  );
};

const LocaleDropdown = () => {
  return (
    <Dropdown overlay={<LocaleMenu />}>
      <DropdownItem />
    </Dropdown>
  );
};
export default LocaleDropdown;
