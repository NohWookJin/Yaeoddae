interface SearchResult {
  AccommodationId: number;
  description: string;
  image: string;
  name: string;
  location: {
    address: string;
    areaCode: string;
    latitude: number;
    longitude: number;
    phone: string;
  };
}

export default SearchResult;
