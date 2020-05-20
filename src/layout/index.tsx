import React, { useEffect } from "react";
import { useStore } from "../store";
import { useHistory, useLocation } from "react-router-dom";
import { Layout } from "antd";

import AppHeader from "./AppHeader";
import SideBar from "./SideBar";
import AppContent from "./AppContent";
import "./style.css";

const AppLayout: React.FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();


  const {
    userStore: { accessToken,getUserInfo },
  } = useStore();

  useEffect(() => {
    (async () => {
      try {
        if (accessToken) {
          await getUserInfo();
        }else{
          throw new Error("No AccessToken!")
        }
      } catch (error) {
        console.error(error);
        history.replace(`/login?ref=${pathname}`);
      }
    })();
  }, [accessToken, getUserInfo, history, pathname]);

  return (
    <Layout id="layout" className="layout">
      <SideBar />
      <Layout>
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
