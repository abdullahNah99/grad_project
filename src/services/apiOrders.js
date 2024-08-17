import { getApiData, postApiData } from "../utils/apiServices";
import { localStorageInstance } from "../utils/localStorageProvider";

export function getAllOrders() {
  return getApiData({
    endPoint: "Orders/showAll",
    token: localStorageInstance.token,
  });
}

export function rejectOrder({ orderID }) {
  return postApiData({
    endPoint: `Orders/reject/${orderID}`,
    token: localStorageInstance.token,
  });
}
