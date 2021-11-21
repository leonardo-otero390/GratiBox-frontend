import axiosBase from "./axiosBase";

const signUp = ({ body }) => axiosBase.post("/sign-up", body);
const signIn = ({ body }) => axiosBase.post("/sign-in", body);
const API = { signUp, signIn };

export default API;
