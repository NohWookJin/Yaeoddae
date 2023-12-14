interface ReservationRoomsProps {
  accommodationId: number;
  accommodationName: string;
  areaCode: string;
  roomTypeId: number;
  checkIn: string;
  checkOut: string;
  guestNumber: number;
}

interface SingleReservation {
  paymentType: string;
  reservationRooms: ReservationRoomsProps[];
}

interface CartReservation extends SingleReservation {
  cartIds: number[];
}

interface StateInfo {
  accomodationId: string;
  accomodationName: string;
  areaCode: string;
  capacity: number;
  checkIn: string;
  checkOut: string;
  guestNumber: number | null;
  price: number;
  roomName: string;
  roomTypeId: number;
}

interface ReservationInfo {
  id: number;
  guestNumber: number;
  checkIn: string;
  checkOut: string;
  roomGetResponse: RoomInfo;
  accommodationGetResponse: AccommodationInfo;
}

interface RoomInfo {
  id: number;
  roomTypeId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  capacity: number;
  accommodation: null;
}

interface AccommodationInfo {
  AccommodationId: number;
  accommodationType: string;
  name: string;
  location: {
    address: string;
    phone: string;
    areaCode: string;
    latitude: number;
    longitude: number;
  };
  image: string;
  description: string;
}

export type {
  ReservationRoomsProps,
  SingleReservation,
  CartReservation,
  StateInfo,
  ReservationInfo,
  RoomInfo,
  AccommodationInfo,
};
