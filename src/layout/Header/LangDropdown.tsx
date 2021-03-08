import React from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Lang } from "../../store/app/type";
import { changeLang } from "../../store/app/actions";

const langList: { label: string; value: Lang }[] = [
  {
    label: "简体中文",
    value: "zh-CN",
  },
  {
    label: "English",
    value: "en",
  },
];

const LangDropdown: React.FC = () => {
  const lang = useSelector<RootState>((state) => state.app.lang) as Lang;
  const dispatch = useDispatch();
  const menu = (
    <Menu
      onClick={({ key }) => dispatch(changeLang(key as Lang))}
      selectedKeys={[lang]}
    >
      {langList.map((lang) => (
        <Menu.Item key={lang.value}>{lang.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["hover", "click"]}>
      <div className="cursor-pointer header-block">
        <GlobalOutlined />
      </div>
    </Dropdown>
  );
};

export default LangDropdown;
