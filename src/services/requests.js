import axiosBase from "./axiosBase";

function createBearerAuthorization(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}
const signUp = ({ body }) => axiosBase.post("/sign-up", body);
const signIn = ({ body }) => axiosBase.post("/sign-in", body);
const submitSubscription = ({ body, token }) =>
  axiosBase.post("/subscription", body, createBearerAuthorization(token));
const API = { signUp, signIn, submitSubscription };

export default API;
