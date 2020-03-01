import React, { useEffect, useState } from "react";
import { useStore } from "../../store";
import { message, Spin } from "antd";

const Layout = () => {
  const [loading, setLoading] = useState(false);

  const {
    userStore: { getUserInfo }
  } = useStore();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const msg = await getUserInfo();
        message.success(msg);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [getUserInfo]);

  return (
    <Spin spinning={loading} tip="Loading...">
      <div>Layout</div>
    </Spin>
  );
};
export default Layout;
