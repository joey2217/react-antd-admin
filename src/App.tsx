import React from "react";
import "./App.css";
import { useStore } from "./store";
import { observer } from "mobx-react";

function App() {
  const {
    countStore: { count, increase, decrease, doubleCount },
  } = useStore();
  return (
    <div className="App">
      <div>count:{count}</div>
      <div>doubleCount:{doubleCount}</div>
      <button onClick={ increase}>increase</button>
      <button onClick={ decrease}>decrease</button>
    </div>
  );
}

export default observer(App);
