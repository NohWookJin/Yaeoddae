import axios from "axios";

// config
import { API_BASE_URL } from "./config";

// store
import { cartList } from "../store/cartList";

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

      setList(data);
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
