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
        <Loader />
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
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;

const Loader = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2rem;
  height: 2rem;
  border: 5px solid gray;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
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
