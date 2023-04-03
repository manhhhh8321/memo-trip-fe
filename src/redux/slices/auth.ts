import { createSlice } from "@reduxjs/toolkit";

// import { IAuth, ILogin, IUser } from "@interfaces";
// import { authApi } from "@api";
import { RootState } from ".";

// export const login = createAsyncThunk<IAuth, ILogin>(
//     "auth/login",
//     async (values: ILogin, { rejectWithValue }) => {
//         try {
//             const res = await authApi.login(values);
//             return res.data as IAuth;
//         } catch (err: any) {
//             return rejectWithValue(err.response.data);
//         }
//     }
// );
interface IState {
    auth: any;
}

const initialState: IState = {
    auth: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout: () => {
            return initialState;
        },
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(login.fulfilled, (state, action: { payload: any }) => {
    //         if (action.payload.accessToken) {
    //             state.auth = action.payload;
    //         }
    //         // if (!state.isRemember) {
    //         //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //         //     state.token!.refreshToken = null;
    //         // }
    //     });

    //     builder.addCase(login.rejected, (state) => {
    //         state.auth = null;
    //     });
    // },
});

export const selectAuth = (state: RootState) => state.auth;

export const { logout, setAuth } = authSlice.actions;

export default authSlice.reducer;
