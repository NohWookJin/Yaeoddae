import { useEffect, useState } from "react";

// components
import DetailSectionTop from "../../components/Detail/DetailSectionTop";
import DetailSectionBottomBox from "../../components/Detail/DetailSectionBottomBox";
import DetailDateAndCount from "../../components/Detail/DetailDateAndCount";

// hooks
import { useDate } from "../../hook/useDate";
import { useDetailAPI } from "../../api/detail";

// library
import { useQuery } from "@tanstack/react-query";

// style
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";

export interface IAccommodation {
  id: number;
  name: string;
  image: string;
  address: string;
}

function DetailPage() {
  const [hotelAccommodation, setHotelAccommodation] = useState<null | IAccommodation>(null);

  const { asTodayCheckIn, asTodayCheckOut } = useDate();

  const params = useParams();
  const { search } = useLocation();

  const { refreshAccommodation, refreshAccommodationRooms } = useDetailAPI();

  // const {isLoading, isError, data} = useQuery({
  //   queryKey: []
  // })

  const callAPI = () => {
    const searchParams = new URLSearchParams(search);
    const areaCode = searchParams.get("area-code") as string;
    const accommodationId = Number(params.id);

    let keyword = searchParams.get("keyword") as string;
    if (keyword?.includes("[")) {
      keyword = keyword.split("[")[0] as string;
    }

    history.replaceState(
      null,
      "",
      `/detail/${params.id}?keyword=${keyword}&area-code=${areaCode}&checkIn=${asTodayCheckIn}&checkOut=${asTodayCheckOut}&memberCount=${2}`
    );

    refreshAccommodation(keyword, areaCode, setHotelAccommodation);
    refreshAccommodationRooms(
      accommodationId,
      String(20 + asTodayCheckIn),
      String(20 + asTodayCheckOut)
    );
  };

  useEffect(() => {
    callAPI();
  }, []);

  if (hotelAccommodation) {
    return (
      <Container>
        <DetailSectionTop accommodation={hotelAccommodation} />
        <DetailDateAndCount />
        <DetailSectionBottomBox />
      </Container>
    );
  }
}

export default DetailPage;

const Container = styled.section`
  background-color: ${({ theme }) => theme.Color.backgroundColor}};
`;
