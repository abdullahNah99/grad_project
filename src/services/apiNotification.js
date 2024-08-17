import { SERVER_KEY } from "../utils/constants";

export async function sendNotification({ pushToken, notification }) {
  const data = {
    to: pushToken,
    notification: { title: "البغدادي", body: notification },
  };

  const res = await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SERVER_KEY}`,
    },
  });

  if (!res.ok) {
    const failure = await res.text();
    console.log(failure);
    // const { msg } = JSON.parse(failure);

    throw new Error("Notification Error");
  }

  const apiData = await res.json();
  return apiData;
}
