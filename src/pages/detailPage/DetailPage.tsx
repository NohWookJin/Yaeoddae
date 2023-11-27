import { useEffect, useState } from "react";

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
  description: string;
  image: string;
  location: {
    address: string;
    phone: string;
    areaCode: string;
    latitude: number;
    longitude: number;
  };
}

export interface RoomAccmodation {
  id: number;
  room: [
    {
      id: number;
      roomTypeId: number;
      name: string;
      description: string;
      image: string;
      stock: number;
      capacity: number;
    },
  ];
}

function DetailPage() {
  const [hotelAccommodation, setHotelAccommodation] = useState<null | HotelAccomodation>(null);
  const [roomAccommodation, setRoomAccommodation] = useState<null | RoomAccmodation>(null);

  const { asTodayCheckIn, asTodayCheckOut } = useDate();

  const navigate = useNavigate();
  const params = useParams();

  const MOCK_AREA_CODE = "서울"; // params.areaCode
  const MOCK_KEYWORD = "강릉세인트존스호텔"; // params.keyword

  useEffect(() => {
    navigate(
      `/detail/${params.id}?keyword=${MOCK_KEYWORD}&area-code=${MOCK_AREA_CODE}&checkIn=${asTodayCheckIn}&checkOut=${asTodayCheckOut}&memberCount=${2}`
    );

    // 호텔 정보 조회(GET, parameters = keywords, areaCode)
    fetch("/mock/roomsDataOri.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        result.map((item: HotelAccomodation) => {
          if (item.id === Number(`${params.id}`)) {
            setHotelAccommodation(item);
          }
        });
      });

    // 객실 정보 조회
    fetch("/mock/roomsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        result.map((item: RoomAccmodation) => {
          if (item.id === Number(`${params.id}`)) {
            setRoomAccommodation(item);
          }
        });
      });
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
