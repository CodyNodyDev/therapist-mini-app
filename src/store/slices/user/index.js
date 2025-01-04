import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userSex: "",
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (!action) {
                return;
            }
            state.user = action.payload;
        },
        setUserSex: (state, action) => {
            if (!action) {
                return;
            }
            state.userSex = action.payload;
        },
    },
});

export const { setUser, setUserSex } = userSlice.actions;
export default userSlice.reducer;
