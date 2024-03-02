import { configureStore } from "@reduxjs/toolkit";
import userReducer from "/src/redux/userSlice.jsx";

const store = configureStore({
    reducer: {
        users: userReducer,
    },
});
export default store;
