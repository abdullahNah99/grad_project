import { postApiData } from "../utils/apiServices";
import { login as loginFirebase } from "../firebase/firebaseApis";

export async function login(userCredentials) {
  const { token } = await postApiData({
    endPoint: "auth/login",
    body: userCredentials,
  });
  const { uid } = await loginFirebase(userCredentials);
  return { uid, token };
}
