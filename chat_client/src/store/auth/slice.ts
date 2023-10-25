import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { AuthStateType } from "./types";
import { signInUserWithCredentials, signUpUser } from "./actions";

const initialState: AuthStateType = {
  user: undefined,
  loading: false,
  hasErrors: false,
  authenticated: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUserWithCredentials.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.user = action.payload;
        state.authenticated = true;
    })
      .addCase(signUpUser.fulfilled, (state) => {
        state.loading = false;
        state.hasErrors = false;
      });
    builder
      .addMatcher(
        isAnyOf(
          signInUserWithCredentials.pending,
          signUpUser.pending,
        ),
        (state) => {
          state.loading = true;
          state.hasErrors = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signInUserWithCredentials.rejected,
          signUpUser.rejected
        ),
        (state) => {
          state.loading = false;
          state.hasErrors = true;
        }
      )
  }
});
