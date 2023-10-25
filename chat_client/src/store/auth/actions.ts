import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../core/api";
import axios from "axios";
import { User } from "./types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../index";

export const signInUserWithCredentials = createAsyncThunk(
  "auth/signInUserWithCredentials",
  async ({
    username,
    password
  }: {
    username: string,
    password: string
  }) => {
    try {
      const response = await api.post("/chat/signin/", {username, password});
      return response.data
    } catch (error) {
      console.error(error)
      throw error;
    }
    }
)


export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async ({
    username,
    firstname,
    lastname,
    password
  }: {
    username: string,
    firstname: string,
    lastname: string,
    password: string
  })=> {

    try {
      const data = {
        username: username,
        first_name: firstname,
        last_name: lastname,
        password: password
      }
      const response = await api.post("/chat/signup/", data);

      return response.data;
    } catch (error) {
    }
  }
)
