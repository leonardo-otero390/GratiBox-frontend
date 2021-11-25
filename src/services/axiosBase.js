import axios from "axios";

const axiosBase = axios.create({
	baseURL: "https://grati-box-driven.herokuapp.com",
});

export default axiosBase;
