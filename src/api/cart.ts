import axios from "axios";

// config
import { API_BASE_URL } from "./config";

// store
import { cartList } from "../store/cartList";
import moment from "moment";

const useCartAPI = () => {
  const { setList } = cartList();

  const token = localStorage.getItem("token");

  const refreshCart = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response.data;

      const updatedData = data.map(
        (item: {
          roomGetResponse: { price: number };
          checkIn: string;
          checkOut: string;
          price: number;
        }) => {
          const {
            checkIn,
            checkOut,
            roomGetResponse: { price },
          } = item;
          const daysDiff = moment(checkOut, "YYYY-MM-DD").diff(
            moment(checkIn, "YYYY-MM-DD"),
            "days"
          );
          const updatedPrice = daysDiff * price;

          return {
            ...item,
            roomGetResponse: {
              ...item.roomGetResponse,
              price: Number(updatedPrice),
            },
          };
        }
      );

      setList(updatedData);
    } catch (e) {
      console.error(e);
    }
  };

  const removeCart = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/carts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return { refreshCart, removeCart };
};

export default useCartAPI;
