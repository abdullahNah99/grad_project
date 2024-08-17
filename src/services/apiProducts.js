import { getApiData, postApiData } from "../utils/apiServices";
import { localStorageInstance } from "../utils/localStorageProvider";

export function getAllProducts() {
  return getApiData({
    endPoint: "Products/showAllAdmin",
    token: localStorageInstance.token,
  });
}

export function addProduct(product) {
  return postApiData({
    endPoint: "Products/addProduct",
    token: localStorageInstance.token,
    body: product,
  });
}

export function changeProductStatus({ productID }) {
  return getApiData({
    endPoint: `Products/updateProductAvailable/${productID}`,
    token: localStorageInstance.token,
  });
}

export function getProductDetails({ productID }) {
  return getApiData({
    endPoint: `Products/show/${productID}`,
    token: localStorageInstance.token,
  });
}
