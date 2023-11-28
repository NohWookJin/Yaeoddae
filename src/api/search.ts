// library
import axios from "axios";

// config
import { API_BASE_URL } from "./config";

const getSearchResult = async (page: number, keyword: string, location: string) => {
  const apiURL = `${API_BASE_URL}/accommodations/page/${page}`;

  let params = {};

  if (keyword !== "") {
    params = { ...params, keyword: keyword };
  }
  if (location !== "") {
    params = { ...params, ["area-code"]: location };
  }

  const result = await axios.get(apiURL, { params });

  return { ...result, page };
};

export default getSearchResult;
