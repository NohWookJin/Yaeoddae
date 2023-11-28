import axios from "axios";
import CityItem from "./CityItem";
import styled from "styled-components";
import { API_BASE_URL } from "../../api/config";
import { useQuery } from "@tanstack/react-query";

function CityList({ areacode }: CityListProp) {
  const fetchData = () => {
    return axios.get(`${API_BASE_URL}/accommodations/page/1?keyword=_&area-code=${areacode}`);
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["main", areacode],
    queryFn: fetchData,
  });

  const res: ItemType[] = data?.data.data.slice(0, 4);

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
    const errorMessage = (error as Error).message;
    return <ListContainer>{errorMessage}</ListContainer>;
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
