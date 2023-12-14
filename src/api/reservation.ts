import axios from "axios";
import { useNavigate } from "react-router";
import { API_BASE_URL } from "./config";
import { CartReservation, SingleReservation } from "../types/reservationTypes";

const useReservationApi = () => {
  const navigate = useNavigate();

  const getAuth = () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      return token;
    }
  };

  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: { Authorization: `Bearer  + ${getAuth()}` },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getAuth();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.log("interceptor request error: ", error);
      Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const redirectPath = location.pathname + location.search;
      const handle401 = () => {
        alert("인증 수단이 만료되었습니다. 다시 로그인 후 이용해 주세요");
        navigate(`/login?redirectUrl=${redirectPath}`);
      };

      if (error.response.status === 401) {
        handle401();
      } else {
        console.log(error.response.status);
      }
      return Promise.reject(error);
    }
  );

  const getData = async (endPoint: string) => {
    const apiURL = `/${endPoint}`;
    const { data } = await instance.get(apiURL);

    return data;
  };

  const postSingleReservation = async (postData: SingleReservation) => {
    const apiURL = `/reservations`;
    const { data } = await instance.post(apiURL, postData);

    return data;
  };
  const postCartReservation = async (postData: CartReservation) => {
    const apiURL = `/reservations/from-cart`;
    const { data } = await instance.post(apiURL, postData);

    return data;
  };

  return { getData, postSingleReservation, postCartReservation };
};

export default useReservationApi;
