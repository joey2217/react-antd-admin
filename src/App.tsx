import React,{Suspense, lazy} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from './components/NotFound'
import { Spin } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Suspense fallback={<Spin/>}>
          <Switch>
            <Route path="/" exact component={lazy(()=>import('./pages/home'))}  />
            <Route path="/login"  component={lazy(()=>import('./pages/login'))}  />
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
