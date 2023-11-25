import { useEffect, useState } from "react";

// components
import DetailSectionTop from "../../components/Detail/DetailSectionTop";
import DetailDateAndCount from "../../components/Detail/DetailDateAndCount";
import DetailSectionBottomBox from "../../components/Detail/DetailSectionBottomBox";

// style
import styled from "styled-components";

export interface IAccmodation {
  id: number;
  accommodation: {
    name: string;
    location: string;
    image: string;
  };
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
  const [accommodation, setAccommodation] = useState<null | IAccmodation>(null);

  useEffect(() => {
    fetch("/mock/roomsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setAccommodation(result));
  }, []);

  if (accommodation) {
    return (
      <Container>
        <DetailSectionTop accommodation={accommodation} />
        <DetailDateAndCount />
        <DetailSectionBottomBox accommodation={accommodation} />
      </Container>
    );
  }
}

export default DetailPage;

const Container = styled.section`
  background-color: ${({ theme }) => theme.Color.backgroundColor}};
`;
