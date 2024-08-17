import { BASE_URL } from "./constants";

export async function getApiData({ token, endPoint }) {
  const res = await fetch(`${BASE_URL}/${endPoint}`, {
    headers: token && { "auth-token": token },
    // headers: token && { authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const failure = await res.text();
    console.log(failure);
    const { msg } = JSON.parse(failure);

    throw new Error(msg);
  }

  return await res.json();
}

export async function postApiData({ token, endPoint, body = {}, headers }) {
  const formData = new FormData();
  Object.keys(body).map((key) => formData.append(key, body[key]));

  const res = await fetch(`${BASE_URL}/${endPoint}`, {
    method: "POST",
    body: formData,
    "Content-Type": "application/json",
    headers: headers || (token && { "auth-token": token }),
    // headers: token && { authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const failure = await res.text();
    console.log(failure);
    const { msg } = JSON.parse(failure);

    throw new Error(msg);
  }

  const apiData = await res.json();
  // console.log(apiData);
  return apiData;
}
