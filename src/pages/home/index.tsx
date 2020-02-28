import React, { useEffect } from "react";
import { login } from "../../api/user";

const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const res = await login({ username: "", password: "" });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return <>Home</>;
};
export default Home;
