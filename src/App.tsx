import React from "react";
// https://tailwindcss.com/docs/dark-mode
import { Provider } from "react-redux";
import configStore from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IntlWrapper from "./lang";
import Login from "./pages/login";
import Layout from "./layout";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <div className="text-black dark:text-white bg-white dark:bg-black">
        <IntlWrapper>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route component={Layout} />
            </Switch>
          </BrowserRouter>
        </IntlWrapper>
      </div>
    </Provider>
  );
}

export default App;
