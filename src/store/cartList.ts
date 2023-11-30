import { create } from "zustand";

export interface ICart {
  id: number;
  guestNumber: number;
  checkIn: string;
  checkOut: string;

  roomGetResponse: {
    Id: null;
    roomTypeId: number;
    name: string;
    description: string;
    price?: number;
    image: string;
    stock: number;
    capacity: number;
  };

  accommodationGetResponse: {
    accommodationId: number;
    image: string;
    description: string;
    name: string;
    location: {
      address: string;
      phone: string;
      areaCode: number;
      latitude: number;
      longitude: number;
    };
  };
}

interface CartStore {
  list: ICart[];
  setList: (data: ICart[]) => void;
}

export const cartList = create<CartStore>((set) => ({
  list: [],
  setList: (data: ICart[]) => {
    set((state) => ({ ...state, list: data }));
  },
}));
