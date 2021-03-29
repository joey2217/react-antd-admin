import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Avatar, Dropdown, Menu, message } from "antd";
import {
  GithubOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { logoutAction } from "../../store/user/actions";
import { RootState } from "../../store";

const UserAvatar: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { formatMessage: f } = useIntl();
  const { username, avatar } = useSelector<RootState, { username: string; avatar: string }>(
    (state) => ({
      username: state.user.username,
      avatar: state.user.avatar
    }),
    shallowEqual
  )
  const userLogout = async () => {
    try {
      const msg = await dispatch(logoutAction());
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
      <Menu.Item>
        <GithubOutlined />
        <a
          href="https://github.com/BurNing1993/react-antd-admin"
          target="_blank"
          style={{ display: "inline-block" }}
          rel="noopener noreferrer"
        >
          <span>Github</span>
        </a>
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
      <div className="header-block cursor-pointer flex items-center">
        <Avatar src={avatar} />
        <span className="ml-2">{username}</span>
      </div>
    </Dropdown>
  );
};

export default UserAvatar;
