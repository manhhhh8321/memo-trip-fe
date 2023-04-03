import { createAction } from "@reduxjs/toolkit";
import { setAuth } from "@redux";
import { store } from "@redux";

export const setToken = (token: any) => {
    // set token in localStorage
    localStorage.setItem("token", JSON.stringify(token));

    // set token in Redux store
    store.dispatch(setAuth(token));
};
