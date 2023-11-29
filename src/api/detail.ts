import axios from "axios";
import { API_BASE_URL } from "./config";
import { IAccommodation, IAccommodationRooms } from "../pages/detailPage/DetailPage";

type SetAccommodationType = (value: IAccommodation) => void;

export const refreshAccommodation = async (
  keyword: string,
  areaCode: string,
  setHotelAccommodation: SetAccommodationType
) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/accommodations?keyword=${keyword}&area-code=${areaCode}`
    );

    const { data } = response.data;

    setHotelAccommodation(data);
  } catch (e) {
    console.log(e);
  }
};

type SetRoomAccommodationType = (value: IAccommodationRooms[]) => void;

export const refreshAccommodationRooms = async (
  accommodationId: string,
  checkIn: string,
  checkOut: string,
  setRoomAccommodation: SetRoomAccommodationType
) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/rooms/${accommodationId}?check-in=${checkIn}&check-out=${checkOut}`
    );

    const { data } = response.data;

    setRoomAccommodation(data);
  } catch (e) {
    console.log(e);
  }
};
