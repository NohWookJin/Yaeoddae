// hooks
import { useEffect, useState } from "react";
import { refreshAccommodation, refreshAccommodationRooms } from "../../api/detail";

// components
import DetailSectionTop from "../../components/Detail/DetailSectionTop";
import DetailDateAndCount from "../../components/Detail/DetailDateAndCount";
import DetailSectionBottomBox from "../../components/Detail/DetailSectionBottomBox";

// style
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useDate } from "../../hook/useDate";

export interface IAccommodation {
  id: number;
  name: string;
  image: string;
  address: string;
}

export interface IAccommodationRooms {
  roomTypeId: number;
  name: string;
  description: string;
  image: string;
  stock: number;
  capacity: number;
  price: number;
}

function DetailPage() {
  const [hotelAccommodation, setHotelAccommodation] = useState<null | IAccommodation>(null);
  const [roomAccommodation, setRoomAccommodation] = useState<IAccommodationRooms[]>([]);

  const { asTodayCheckIn, asTodayCheckOut } = useDate();

  const params = useParams();
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const areaCode = searchParams.get("area-code") as string;
  const accommodationId = params.id as string;

  let keyword = searchParams.get("keyword") as string;
  if (keyword?.includes("[")) {
    keyword = keyword.split("[")[0] as string;
  }

  useEffect(() => {
    history.replaceState(
      null,
      "",
      `/detail/${params.id}?keyword=${keyword}&area-code=${areaCode}&checkIn=${asTodayCheckIn}&checkOut=${asTodayCheckOut}&memberCount=${2}`
    );

    refreshAccommodation(keyword, areaCode, setHotelAccommodation);
    refreshAccommodationRooms(
      accommodationId,
      String(20 + asTodayCheckIn),
      String(20 + asTodayCheckOut),
      setRoomAccommodation
    );
  }, [
    accommodationId,
    areaCode,
    asTodayCheckIn,
    asTodayCheckOut,
    keyword,
    params.areaCode,
    params.id,
    params.keyword,
    search,
  ]);

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
