import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*


    컴포넌트에서 사용 되는 상태관리 template 입니다.


*/

interface InitialState {}
const initialState: InitialState = {};
// Create Slice
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    //  any -> 용도에 맞게 변경
    testing(state, action: PayloadAction<any>) {},
  },
});

export const { testing } = slackSlice.actions;
export default testSlice.reducer;
