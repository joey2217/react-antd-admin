import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./pages/layout";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Switch>
          <Route path="/" exact component={Layout} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
