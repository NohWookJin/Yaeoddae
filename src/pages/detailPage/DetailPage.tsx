import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// components
import DetailSectionTop from "../../components/Detail/DetailSectionTop";
import DetailDateAndCount from "../../components/Detail/DetailDateAndCount";
import DetailSectionBottomBox from "../../components/Detail/DetailSectionBottomBox";

// style
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDate } from "../../hook/useDate";

export interface HotelAccomodation {
  id: number;
  name: string;
  image: string;
  address: string;
}

export interface RoomAccmodation {
  roomTypeId: number;
  name: string;
  description: string;
  image: string;
  stock: number;
  capacity: number;
  price: number;
}

function DetailPage() {
  const [hotelAccommodation, setHotelAccommodation] = useState<null | HotelAccomodation>(null);
  const [roomAccommodation, setRoomAccommodation] = useState<RoomAccmodation[]>([]);

  const { asTodayCheckIn, asTodayCheckOut } = useDate();

  const navigate = useNavigate();
  const params = useParams();

  const MOCK_AREA_CODE = "SEOUL";
  const MOCK_KEYWORD = "고운";

  const testLoginAPI = async () => {
    try {
      const response = await axios.post(`https://travel-server.up.railway.app/members/signin`, {
        email: "test3@gmail.com",
        password: "12345",
      });

      const { token } = response.data.data;

      localStorage.setItem("ImsiToken", token);
    } catch (e) {
      console.log(e);
    }
  };

  // // 호텔 정보 조회(GET, parameters = keywords, areaCode)
  const refreshHotelAPI = async () => {
    try {
      const response = await axios.get(
        `https://travel-server.up.railway.app/accommodations?keyword=${MOCK_KEYWORD}&area-code=${MOCK_AREA_CODE}`
      );

      const { data } = response.data;
      setHotelAccommodation(data);
    } catch (e) {
      console.log(e);
    }
  };

  // // 방 정보 조회(GET, parameter = accommodationId)
  const refreshRoomAPI = async () => {
    try {
      const response = await axios.get(`https://travel-server.up.railway.app/rooms/2950469`);

      const { data } = response.data;
      setRoomAccommodation(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    history.replaceState(
      null,
      "",
      `/detail/${params.id}?keyword=${MOCK_KEYWORD}&area-code=${MOCK_AREA_CODE}&checkIn=${asTodayCheckIn}&checkOut=${asTodayCheckOut}&memberCount=${2}`
    );

    testLoginAPI();
    refreshHotelAPI();
    refreshRoomAPI();
  }, [navigate, params.id, asTodayCheckIn, asTodayCheckOut]);

  if (hotelAccommodation && roomAccommodation) {
    return (
      <Container>
        <DetailSectionTop accommodation={hotelAccommodation} />
        <DetailDateAndCount />
        <DetailSectionBottomBox accommodation={roomAccommodation} />
      </Container>
    );
  }
}

export default DetailPage;

const Container = styled.section`
  background-color: ${({ theme }) => theme.Color.backgroundColor}};
`;
