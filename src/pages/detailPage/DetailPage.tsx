import { useEffect, useState } from "react";

import DetailSectionTop from "../../components/Detail/DetailSectionTop";
import DetailDateAndCount from "../../components/Detail/DetailDateAndCount";
import DetailSectionBottomBox from "../../components/Detail/DetailSectionBottomBox";

import styled from "styled-components";

export interface IAccmodation {
  id: number;
  guest_number: number;
  check_in: string;
  check_out: string;
  accommodation: {
    name: string;
    address: string;
    image: string;
  };
  rooms: [
    {
      id: null;
      roomTypeId: number;
      name: string;
      description: string;
      price: number;
      image: string;
      stock: number;
      capacity: number;
      accommodation: null;
    },
  ];
}

function DetailPage() {
  const [accommodation, setAccommodation] = useState<null | IAccmodation>(null);

  useEffect(() => {
    fetch("/data/roomsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setAccommodation(result));
  }, []);

  if (accommodation) {
    return (
      <Container>
        <DetailSectionTop accommodation={accommodation} />
        <DetailDateAndCount accommodation={accommodation} />
        <DetailSectionBottomBox accommodation={accommodation} />
      </Container>
    );
  }
}

export default DetailPage;

const Container = styled.section`
  background-color: ${({ theme }) => theme.Color.backgroundColor}};
`;
