import { combineReducers } from "@reduxjs/toolkit";
// import reducers..

const rootReducer = combineReducers({
  // aliasName: reducer
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
