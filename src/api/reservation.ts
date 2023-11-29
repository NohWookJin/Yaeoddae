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

const getReservationHistory = async () => {
  const apiURL = `${API_BASE_URL}/reservations`;
  const config = {
    headers: { Authorization: `Bearer ${getAuth()}` },
  };
  const result = await axios.get(apiURL, config);

  return result.data;
};

export { getReservationHistory };
