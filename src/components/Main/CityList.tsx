import axios from "axios";
import CityItem from "./CityItem";
import { API_BASE_URL } from "../../api/config";
import { useQuery } from "@tanstack/react-query";
import { ListContainer } from "./SkeletonPage";

function CityList({ areacode }: CityListProp) {
  const fetchData = () => {
    return axios.get(`${API_BASE_URL}/accommodations/page/1?keyword=_&area-code=${areacode}`);
  };

  const { data } = useQuery({
    queryKey: ["main", areacode],
    queryFn: fetchData,
    suspense: true,
  });

  const res: ItemType[] = data?.data.data.slice(0, 4);

  return (
    <ListContainer>
      {res?.map((item) => <CityItem key={item.AccommodationId} item={item} />)}
    </ListContainer>
  );
}

export default CityList;

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
