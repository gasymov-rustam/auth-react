const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    id: null,
    email: null,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, { payload }) {
            state.id = payload.id;
            state.email = payload.email;
            state.token = payload.token;
        },
        removeUser(state) {
            state.id = null;
            state.email = null;
            state.token = null;
        },
    },
});

export const { removeUser, setUser } = userSlice.actions;
export const userState = (state) => state.user;
export default userSlice.reducer;
