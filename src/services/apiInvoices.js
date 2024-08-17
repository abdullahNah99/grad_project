import { getApiData } from "../utils/apiServices";
import { localStorageInstance } from "../utils/localStorageProvider";

export function getAllInvoices() {
  return getApiData({
    endPoint: "invoices/showAll",
    token: localStorageInstance.token,
  });
}
