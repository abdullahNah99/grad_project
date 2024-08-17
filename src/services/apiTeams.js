import {
  addDocumentToCollection,
  createUser,
  getDocumentByID,
} from "../firebase/firebaseApis";
import { getApiData, postApiData } from "../utils/apiServices";
import { getDateInfo } from "../utils/datesFormats";
import { getOrderType } from "../utils/helpers";
import { localStorageInstance } from "../utils/localStorageProvider";
import { sendNotification } from "./apiNotification";

export function createTeamAccount(team) {
  return createUser({
    displayName: team.name,
    email: team.email,
    password: team.password,
  }).then((user) => {
    return addDocumentToCollection({
      collectionName: "users",
      documentID: user.uid,
      data: {
        image: user.photoURL?.toString() ?? "null",
        about: "",
        name: team.name,
        created_at: Date.now().toString(),
        id: user.uid,
        last_active: Date.now().toString(),
        is_online: false,
        push_token: "",
        email: team.email,
      },
    }).then(() => {
      return postApiData({
        endPoint: "Team/creatTeam",
        token: localStorageInstance.token,
        body: {
          ...team,
          uId: user.uid,
        },
      });
    });
  });
}

export function getAllTeams() {
  return getApiData({
    endPoint: "Team/showAll",
    token: localStorageInstance.token,
  });
}

export function getTeamDates({ teamID }) {
  return postApiData({
    endPoint: `Team/getTeamDate/${teamID}`,
    token: localStorageInstance.token,
  });
}

export async function getTeamPushToken({ uID }) {
  return await getDocumentByID({
    collectionName: "users",
    documentID: uID,
  }).then((doc) => {
    return doc.push_token;
  });
}

export async function sendOrderNotification({ teamUID, type_id, startTime }) {
  return await getTeamPushToken({ uID: teamUID }).then((push_token) => {
    const { dayNumber, dayInArabic, monthNumber } = getDateInfo(startTime);
    if (push_token) {
      console.log(push_token);
      return sendNotification({
        pushToken: push_token,
        notification: `تم إسناد ${getOrderType(
          type_id
        )} لك يوم ${dayInArabic} ${dayNumber}/${monthNumber}`,
      });
    }
  });
}
