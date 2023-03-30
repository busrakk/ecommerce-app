import { createSlice } from "@reduxjs/toolkit";
import { getUserAsync } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
    user: [],
    userStatus: STATUS.IDLE
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // get user
        .addCase(getUserAsync.pending, (state, action) => {
            state.userStatus = STATUS.LOADING;
        })
        .addCase(getUserAsync.fulfilled, (state, action) => {
            state.user = action.payload;
            state.userStatus = STATUS.SUCCEEDED;
        })
        .addCase(getUserAsync.rejected, (state, action) => {
            state.userStatus = STATUS.FAILED;
        })
    }
})

export const getUser = (state) => state.user.user;
export const getUserStatus = (state) => state.user.userStatus;
export default userSlice.reducer;