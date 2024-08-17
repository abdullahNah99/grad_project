import { getApiData } from "../utils/apiServices";
import { localStorageInstance } from "../utils/localStorageProvider";

export function getDashboardData() {
  const month = 8;
  const year = 2024;

  return getApiData({
    endPoint: `get/${month}/${year}`,
    token: localStorageInstance.token,
  });
}
