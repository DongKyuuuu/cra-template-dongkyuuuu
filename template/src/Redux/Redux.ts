import { combineReducers } from "redux";

const rootReducer = combineReducers({
  //   import reducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
