// library
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

// component
import ReservationInfoSection from "../../components/Reservation/ReservationInfoSection";
import ReservationPersonInfoSection from "../../components/Reservation/ReservationPersonInfoSection";
import ActualUserInfoSection from "../../components/Reservation/ActualUserInfoSection";
import PaymentSelectionSection from "../../components/Reservation/PaymentSelectionSection";
import PaymentCautions from "../../components/Reservation/PaymentCautions";
import Loading from "../../components/Loading";
import { addCommasToNumber } from "../../utils/addCommasToNumber";
import { scrollToTop } from "../../utils/scrollToTop";
import { getData } from "../../api/reservation";

export interface ReservationInfo {
  accommodationName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guestNumber: number;
  capacity: number;
  nightsCount: number;
  price: number;
}

export interface CartInfo {
  id: number;
  guest_number: number;
  check_in: string;
  check_out: string;
  room: RoomInfo;
  accommodation: AccommodationInfo;
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
  id: number;
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

function ReservationPage() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [reservationPersonName, setReservationPersonName] = useState<string>("");
  const [reservationPersonContact, setReservationPersonContact] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();
  const cartIds = searchParams.get("cartIds");

  const location = useLocation();
  const reservationFromDetail = location.state;

  const [reservationInfoList, setReservationInfoList] = useState<
    ReservationInfo[] | CartInfo[] | null
  >(null);

  useEffect(() => {
    if (cartIds) {
      getCartReservationInfo(cartIds);
    } else if (reservationFromDetail !== null) {
      console.log("단일");
    } else {
      setReservationInfoList(null);
      console.log("no data");
    }
  }, [location, cartIds, reservationFromDetail]);

  const getCartReservationInfo = async (cartId: string) => {
    try {
      const ids = cartId.split(",");
      const data = await getData("carts");
      const filteredData = await data.filter((item: CartInfo) => ids.includes(item.id.toString()));
      setReservationInfoList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleReservationInfo = () => {
    if (!location.state) {
      console.log("단일 예약 정보 없음");
      return;
    }
  };

  //   const {
  //     accommodationName,
  //     accommodationId,
  //     areaCode,
  //     roomTypeId,
  //     roomName,
  //     checkIn,
  //     checkOut,
  //     guestNumber,
  //     capacity,
  //     price,
  //   } = location.state;
  // };

  const priceToPay: number = Dummy.reduce((acc: number, item: ReservationInfo) => {
    return acc + item.price;
  }, 0);

  if (reservationInfoList === null) return <div>잘못된 접근 방식입니다</div>;
  else
    return (
      <>
        {isLoading && <Loading />}
        <ReservationInfoSection reservationInfoList={Dummy} />
        <ReservationPersonInfoSection
          reservationPersonName={reservationPersonName}
          setReservationPersonName={setReservationPersonName}
          reservationPersonContact={reservationPersonContact}
          setReservationPersonContact={setReservationPersonContact}
        />
        <ActualUserInfoSection
          reservationPersonName={reservationPersonName}
          reservationPersonContact={reservationPersonContact}
        />
        <PaymentSelectionSection />
        <PaymentCautions />
        <button>{addCommasToNumber(priceToPay)}원 결제하기</button>
      </>
    );
}

const Dummy: ReservationInfo[] = [
  {
    accommodationName: "글래드 강남 코엑스 센터",
    roomName: "스탠다드 트윈",
    checkIn: "2023.11.17(금)",
    checkOut: "2023.11.19(일)",
    capacity: 2,
    guestNumber: 2,
    nightsCount: 2,
    price: 429000,
  },
  {
    accommodationName: "스탠포드 호텔 서울",
    roomName: "스탠다드 트윈",
    checkIn: "2023.11.17(금)",
    checkOut: "2023.11.19(일)",
    capacity: 2,
    guestNumber: 2,
    nightsCount: 2,
    price: 250000,
  },
];

export default ReservationPage;
