// library
import axios from "axios";
import { useNavigate } from "react-router";

// config
import { API_BASE_URL } from "./config";

// type
import { CartReservation, SingleReservation } from "../types/reservationTypes";

const useReservationApi = () => {
  const navigate = useNavigate();

  const getAuth = () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      return token;
    }
  };

  const instance = axios.create();

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const redirectPath = location.pathname + location.search;
      const handle401 = () => {
        // 토큰 만료 시 로그인 화면으로 보냄
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

  /** endPoint를 입력하면 해당 주소로 get 요청 후 res.data를 return하는 함수 */
  const getData = async (endPoint: string) => {
    const apiURL = `${API_BASE_URL}/${endPoint}`;
    const config = {
      headers: { Authorization: `Bearer ${getAuth()}` },
    };
    const result = await instance.get(apiURL, config);

    return result.data;
  };

  const postSingleReservation = async (data: SingleReservation) => {
    const apiURL = `${API_BASE_URL}/reservations`;
    const config = {
      headers: { Authorization: `Bearer ${getAuth()}` },
    };

    const result = await instance.post(apiURL, data, config);

    return result.data;
  };
  const postCartReservation = async (data: CartReservation) => {
    const apiURL = `${API_BASE_URL}/reservations/from-cart`;
    const config = {
      headers: { Authorization: `Bearer ${getAuth()}` },
    };

    const result = await instance.post(apiURL, data, config);

    return result.data;
  };

  return { getData, postSingleReservation, postCartReservation };
};

export default useReservationApi;
