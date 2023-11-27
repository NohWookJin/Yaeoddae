import axios from "axios";
import { useEffect, useState } from "react";
import CityItem from "./CityItem";
import styled from "styled-components";

function CityList({ areacode }: CityListProp) {
  const [data, setData] = useState<null | ItemType[]>(null);

  useEffect(() => {
    axios.get(`mock/accomodationData-${areacode}.json`).then((response) => {
      const data = response.data;
      setData(data);
    });
    console.log("data fetched");
  }, []);

  return (
    <ListContainer>{data?.map((item) => <CityItem key={item.id} item={item} />)}</ListContainer>
  );
}

export default CityList;

const ListContainer = styled.div`
  min-width: 375px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export interface ItemType {
  id: number;
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
