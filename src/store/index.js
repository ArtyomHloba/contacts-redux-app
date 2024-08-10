import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./slices/contactsSlice/contsctsSlice";

const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
  },
});

export default store;
