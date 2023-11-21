import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        chat: chatSlice,
        searchSlice: searchSlice,
    },
});
export default store;
