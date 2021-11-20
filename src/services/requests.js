import axiosBase from "./axiosBase";

const signUp = ({ body }) => axiosBase.post("/sign-up", body);

const API = {signUp};

export default API;