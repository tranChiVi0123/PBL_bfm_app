import axios from "axios";
import config from "./config";
import headerHelper from "./header_helper";

const apiCaller =  async (endpoint, method = "GET", body) => {
  return await axios({
    method: method,
    url: `${config.API_URL}${endpoint}`,
    data: body,
    headers: headerHelper(),
  });
};

export default apiCaller;
