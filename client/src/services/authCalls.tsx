import axios from "axios";
import { userType } from "./types";
axios.defaults.withCredentials = true;
const { REACT_APP_BACKEND_URL } = process.env;
type authResponseProp = {
  success: Boolean;
  user: userType;
  message: string;
};
type signupProps = {
  name: String;
  email: String;
  password: String;
};
export async function signup({
  name,
  email,
  password,
}: signupProps): Promise<authResponseProp | undefined> {
  try {
    const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/signup`, {
      name,
      email,
      password,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}
export async function login(
  email: String,
  password: String
): Promise<authResponseProp | undefined> {
  try {
    const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/login`, {
      email,
      password,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}
export const signout = async () => {
  try {
    await axios.get(`${REACT_APP_BACKEND_URL}/logout`);
  } catch (err) {
    console.log(err);
  }
};
export const updateUserScore = async (score: number) => {
  try {
    console.log(score);
    const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/quiz/score`, {
      score,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/users`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const loadUser = async () => {
  try {
    const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/userDashboard`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
