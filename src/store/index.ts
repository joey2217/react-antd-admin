import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/reducer";
import appReducer from "./app/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
