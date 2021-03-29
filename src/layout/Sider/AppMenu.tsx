import React, { useEffect } from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  TableOutlined,
  FormOutlined,
  MenuOutlined,
  SettingOutlined,
  HighlightOutlined,
  LineChartOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useHistory } from "react-router";
import { getUserInfoAction } from "../../store/user/actions";
import { IMenu } from "../../api/login";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const menuIcons: { [prop: string]: any } = {
  DashboardOutlined: DashboardOutlined,
  TableOutlined: TableOutlined,
  FormOutlined: FormOutlined,
  MenuOutlined: MenuOutlined,
  SettingOutlined: SettingOutlined,
  HighlightOutlined: HighlightOutlined,
  LineChartOutlined: LineChartOutlined,
  EditOutlined: EditOutlined,
};

const AppMenu: React.FC = () => {
  const { formatMessage: f } = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();
  const { token, userId, menus} = useSelector<RootState, { token: string; userId: string; menus: IMenu[]}>(state =>  ({
    token: state.user.token,
    userId: state.user.userId,
    menus: state.user.menus,
  }),shallowEqual)
  useEffect(() => {
    (async () => {
      console.log(token, userId, history, dispatch);
      try {
        if (token) {
          if (!userId) {
            await dispatch(getUserInfoAction());
          }
        } else {
          history.replace("/login", { form: history.location });
        }
      } catch (error) {
        console.error(error);
        history.replace("/login", { form: history.location });
      }
    })();
  }, [token, userId, history, dispatch]);

  const generateMenu = (menuList: IMenu[]) =>
    menuList.map((menuItem) => {
      if (menuItem.children && menuItem.children.length > 0) {
        return (
          <SubMenu
            title={f({ id: menuItem.title })}
            key={menuItem.path}
            icon={menuItem.icon && React.createElement(menuIcons[menuItem.icon])}
          >
            {generateMenu(menuItem.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item
            {...menuItem}
            title={f({ id: menuItem.title })}
            key={menuItem.path}
            icon={menuItem.icon && React.createElement(menuIcons[menuItem.icon])}
          >
            <Link to={menuItem.path}>{f({ id: menuItem.title })}</Link>
          </Menu.Item>
        );
      }
    });

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[history.location.pathname]}>
      {generateMenu(menus)}
    </Menu>
  );
};

export default AppMenu;
