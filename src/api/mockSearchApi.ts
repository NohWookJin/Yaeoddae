import data from "../../public/mock/searchData.json";

const getSearchResult = async () => {
  const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));
  await sleep(1000);
  return data;
};

export default getSearchResult;
