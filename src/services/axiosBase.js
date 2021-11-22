import axios from "axios";

const axiosBase = axios.create({
	baseURL: "http://grati-box-driven.herokuapp.com",
});

export default axiosBase;