import { create } from "zustand";

export interface IAccommodationRooms {
  roomTypeId: number;
  name: string;
  description: string;
  image: string;
  stock: number;
  capacity: number;
  price: number;
}

interface AccommodationRoomsStore {
  accommodationRooms: IAccommodationRooms[];
  setAccommodationRooms: (data: IAccommodationRooms[]) => void;
}

export const accommodationRoomsList = create<AccommodationRoomsStore>((set) => ({
  accommodationRooms: [],
  setAccommodationRooms: (data: IAccommodationRooms[]) => {
    set((state) => ({ ...state, accommodationRooms: data }));
  },
}));
