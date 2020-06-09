import React from "react";
import { Avatar, Menu, Dropdown, message } from "antd";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";

import { useStore } from "../../store";

const UserAvatar = () => {
  const {
    userStore: { avatar, username, logout },
  } = useStore();

  const history = useHistory();

  const { formatMessage: f } = useIntl();

  const userLogout = async () => {
    try {
      const msg = await logout();
      message.success(msg);
      history.push("/login");
    } catch (error) {
      throw new Error(error);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <HomeOutlined />
        <Link to="/home" style={{ display: "inline-block" }}>
          {f({ id: "home" })}
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={userLogout}>
        <LogoutOutlined />
        <span>{f({ id: "logout" })}</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["hover", "click"]}>
      <div className="user-avatar action">
        <Avatar src={avatar} className="user-avatar-img" />
        <span className="user-avatar-name">{username}</span>
      </div>
    </Dropdown>
  );
};

export default observer(UserAvatar);
