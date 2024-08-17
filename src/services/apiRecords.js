import { getApiData } from "../utils/apiServices";
import { localStorageInstance } from "../utils/localStorageProvider";

export function getAllRecords() {
  return getApiData({
    endPoint: "records/showAll",
    token: localStorageInstance.token,
  });
}
