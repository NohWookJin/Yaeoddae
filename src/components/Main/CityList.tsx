import axios from "axios";
import { useEffect, useState } from "react";
import CityItem from "./CityItem";
import styled from "styled-components";
import { API_BASE_URL } from "../../api/config";

function CityList({ areacode }: CityListProp) {
  const [res, setRes] = useState<null | ItemType[]>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<null | string>(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/accommodations/page/1?keyword=_&area-code=${areacode}`)
      .then((response) => {
        const res = response.data.data;
        setRes(res.slice(0, 4));
      })
      .catch((err) => {
        setIsError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <ListContainer>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </ListContainer>
    );
  }

  if (isError) {
    return <ListContainer>{isError}</ListContainer>;
  }

  return (
    <ListContainer>
      {res?.map((item) => <CityItem key={item.AccommodationId} item={item} />)}
    </ListContainer>
  );
}

export default CityList;

const ListContainer = styled.div`
  min-width: 375px;
  min-height: 400px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;

const Skeleton = styled.div`
  width: 150px;
  height: 140px;
  border-radius: ${({ theme }) => theme.Br.default};
  background-image: linear-gradient(
    100deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1)
  );
  margin-bottom: 60px;
  background-size: 400% 100%;
  color: rgba(0, 0, 0, 0);

  animation: skeleton-loading 7s linear infinite;
  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export interface ItemType {
  AccommodationId: number;
  accommodationType: string;
  name: string;
  location: {
    address: string;
    phone: string;
    areaCode: string;
    latitude: string;
    longitude: string;
  };
  image: string;
  description: string;
}

interface CityListProp {
  areacode: string;
}
