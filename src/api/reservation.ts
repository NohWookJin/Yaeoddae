// library
import axios from "axios";

// config
import { API_BASE_URL } from "./config";

const getAuth = () => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    return token;
  }
};

/** endPoint를 입력하면 해당 주소로 get 요청 후 res.data를 return하는 함수 */
const getData = async (endPoint: string) => {
  const apiURL = `${API_BASE_URL}/${endPoint}`;
  const config = {
    headers: { Authorization: `Bearer ${getAuth()}` },
  };
  const result = await axios.get(apiURL, config);

  return result.data;
};

export { getData };
