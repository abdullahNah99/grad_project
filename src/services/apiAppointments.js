import { getApiData, postApiData } from "../utils/apiServices";
import { localStorageInstance } from "../utils/localStorageProvider";

export function getAllAppointments() {
  return getApiData({
    endPoint: "appointments/showAll",
    token: localStorageInstance.token,
  });
}

export function setAppointment({ appointment }) {
  return postApiData({
    endPoint: "appointments/store",
    token: localStorageInstance.token,
    body: appointment,
  });
}
