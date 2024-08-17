import { getApiData } from "../utils/apiServices";
import { BASE_URL } from "../utils/constants";
import { localStorageInstance } from "../utils/localStorageProvider";

export function getAllReadyMadeSystems() {
  return getApiData({
    endPoint: "ProposedSystem/showAll",
    token: localStorageInstance.token,
  });
}

export async function addReadyMadeSystem({ name, desc, products }) {
  const data = { name, desc, products };

  const res = await fetch(`${BASE_URL}/ProposedSystem/store`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorageInstance.token,
    },
  });

  if (!res.ok) {
    const failure = await res.text();
    console.log(failure);
    const { msg } = JSON.parse(failure);

    throw new Error(msg);
  }

  const apiData = await res.json();
  return apiData;
}
