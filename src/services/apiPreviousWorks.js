import { getApiData, postApiData } from "../utils/apiServices";
import { localStorageInstance } from "../utils/localStorageProvider";

export function getAllPreviousWorks() {
  return getApiData({
    endPoint: "PreviousJobs/showAll",
    token: localStorageInstance.token,
  });
}

export function addPreviousWork(previousWork) {
  const { title, disc, images } = previousWork;

  const files = Array.from(images).reduce((acc, file, index) => {
    acc[`images[${index}]`] = file;
    return acc;
  }, {});

  return postApiData({
    endPoint: "PreviousJobs/creatPreviousJob",
    token: localStorageInstance.token,
    body: { title, disc, ...files },
  });
}
