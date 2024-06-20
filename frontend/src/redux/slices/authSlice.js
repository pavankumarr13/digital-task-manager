import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../assets/data";

const initialState = {
  user:
    localStorage.getItem("userInfo") && localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,

  isSidebarOpen: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    },
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setCredentials, logout, setOpenSidebar, setLoggedIn } =
  authSlice.actions;

export default authSlice.reducer;
