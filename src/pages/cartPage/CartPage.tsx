// components
import CartSectionBox from "../../components/Cart/CartSectionBox";
import CartResevation from "../../components/Cart/CartResevation";
import CartNoReservation from "../../components/Cart/CartNoReservation";

// libraires
import axios from "axios";

// config
import { API_BASE_URL } from "../../api/config";

// styles
import styled from "styled-components";
import { useEffect, useState } from "react";

export interface ICart {
  id: number;
  guestNumber: number;
  checkIn: string;
  checkOut: string;

  roomGetResponse: {
    Id: null;
    roomTypeId: number;
    name: string;
    description: string;
    price?: number;
    image: string;
    stock: number;
    capacity: number;
  };

  accommodationGetResponse: {
    accommodationId: number;
    image: string;
    description: string;
    name: string;
    location: {
      address: string;
      phone: string;
      areaCode: number;
      latitude: number;
      longitude: number;
    };
  };
}

function CartPage() {
  const [list, setList] = useState<ICart[]>([]);
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(false);

  const refreshCart = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${API_BASE_URL}/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response.data;
      setList(data);

      if (data === undefined) setIsCartEmpty(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    refreshCart();
  }, []);

  if (isCartEmpty) {
    return (
      <Container>
        <CartNoReservation />
      </Container>
    );
  } else {
    return (
      <Container>
        <CartSectionBox list={list} />
        <CartResevation />
      </Container>
    );
  }
}

export default CartPage;

const Container = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: scroll;
  background-color: ${({ theme }) => theme.Color.backgroundColor}};
`;
