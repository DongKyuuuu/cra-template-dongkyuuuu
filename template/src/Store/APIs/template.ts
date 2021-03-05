import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*


    비동기 API 호출에 맞게 생성한 template 입니다.


*/

interface InitialState {}
const initialState: InitialState = {};

// 액션 이름은 reducer/ACTION_TYPE의 형태로 만들어줍니다.
export const testThunk = createAsyncThunk("reducer/ACTION_TYPE", async () => {
  try {
    const response = await axios.get(/* API_URL */);
    return response;
  } catch (e) {
    throw e;
  }
});

// promise로 작성한 버전입니다
export const test2Thunk = createAsyncThunk("reducer/ACTION_TYPE2", () => {
  return new Promise((resolve, reject) => {
    axios
      .get(/* API_URL */)
      .then((result: any) => {
        return resolve(result);
      })
      .catch((error: any) => {
        return reject(error);
      });
  });
});

// Create Slice
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    //  any -> 용도에 맞게 변경
    testing(state, action: PayloadAction<any>) {},
  },
  extraReducers: (builder) => {
    builder.addCase(testThunk.pending, (state, action) => {});
    builder.addCase(testThunk.fulfilled, (state, action) => {});
    builder.addCase(testThunk.rejected, (state, action) => {});
  },
});

export const { testing } = slackSlice.actions;
export default testSlice.reducer;
