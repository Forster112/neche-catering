import { createSlice } from "@reduxjs/toolkit";

const initialState = { desertType: "CAKES" };

const desertType = createSlice({
  name: "desertType",
  initialState,
  reducers: {
    changeType(state, action) {
      state.desertType = action.payload
    }
  }
});

export const desertTypeActions = desertType.actions;
export default desertType