export interface ReservationRoomsProps {
  accommodationId: number;
  accommodationName: string;
  areaCode: string;
  roomTypeId: number;
  checkIn: string;
  checkOut: string;
  guestNumber: number;
}

export interface SingleReservation {
  paymentType: string;
  reservationRooms: ReservationRoomsProps[];
}

export interface CartReservation extends SingleReservation {
  cartIds: number[];
}

export interface StateInfo {
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

export interface ReservationInfo {
  id: number;
  guestNumber: number;
  checkIn: string;
  checkOut: string;
  roomGetResponse: RoomInfo;
  accommodationGetResponse: AccommodationInfo;
}

export interface RoomInfo {
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

export interface AccommodationInfo {
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
