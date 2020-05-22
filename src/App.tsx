import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout";
import Login from "./pages/login";
import NotFound from "./components/Exception/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"  exact render={() => <Redirect to="/home" />} />
        <Route path="/login" component={Login} />
        <Route path="/home"  component={Layout} />
        <Route path="/table"  component={Layout} />
        <Route path="/form"  component={Layout} />
        <Route path="/menu"  component={Layout} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
