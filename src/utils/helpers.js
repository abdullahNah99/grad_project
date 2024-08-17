import { addDocumentToCollection } from "../firebase/firebaseApis";
import { auth } from "../firebase/firebaseConfig";
import {
  appointmentStatuses,
  batteryTypes,
  productCategories,
} from "./constants";
import { formatDate, getDayInArabic, getMonthInArabic } from "./datesFormats";
import { localStorageInstance } from "./localStorageProvider";
import dayjs from "dayjs";

export function capitalize(string) {
  const words = string?.split(" ");

  const capitalizedWords = words?.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedWords?.join(" ");
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function getProductCategoryID(type) {
  if (type === "panels" || type === "لوح طاقة") return productCategories.panel;
  if (type === "batteries" || type === "بطارية")
    return productCategories.battery;
  if (type === "inverters" || type === "إنفرتر")
    return productCategories.inverter;
}

export function extractFilenameFromUrl(url) {
  const parts = url.split("/");

  return parts[parts.length - 1].split("?")[0].split("_")[1];
}

export function getOrderType(id) {
  if (id === 1) return "طلب صيانة";
  if (id === 2) return "طلب تركيب";
}

export function getOrderTypeID(type) {
  if (type === "maintenance") return 1;
  if (type === "composition") return 2;
}

export function getFullDateInArabic(date) {
  const [ddd, day, month, year, hour, amPm] =
    formatDate(date).formattedDate.split(" ");

  const formatted = `${hour} ${amPm} - ${getDayInArabic(
    ddd
  )} ${day} ${getMonthInArabic(month)} ${year}`;

  return formatted;
}

export function getDayAndHour(date) {
  date = formatDate(date).formattedDate.split(" ");
  const result = `${date[4]} ${date[5]} ${getDayInArabic(date[0])}`;
  return result;
}

export function getDayAndMonth(date) {
  date = formatDate(date).formattedDate.split(" ");
  const result = `${getDayInArabic(date[0])} ${date[1]} ${getMonthInArabic(
    date[2]
  )}`;
  return result;
}

export function getDayAndMonthAndYear(date) {
  return `${getDayAndMonth(date)}`;
}

export function getProductTypyInArabic(type) {
  switch (type) {
    case "batteries":
      return "البطاريات";
    case "panels":
      return "الألواح";
    case "inverters":
      return "الإنفرترات";
    default:
      return "المنتجات";
  }
}

export function getStringHashCode(string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = 0x1fffffff & (hash + string.charCodeAt(i));
    hash = 0x1fffffff & (hash + ((0x0007ffff & hash) << 10));
    hash = hash ^ (hash >> 6);
  }
  hash = 0x1fffffff & (hash + ((0x03ffffff & hash) << 3));
  hash = hash ^ (hash >> 11);
  return 0x1fffffff & (hash + ((0x00003fff & hash) << 15));
}

export function getConversationID(id) {
  const myUserID = localStorageInstance.uid;

  const myUserIDHashCode = getStringHashCode(myUserID);

  const idHashCode = getStringHashCode(id);

  return myUserIDHashCode <= idHashCode
    ? `${myUserID}_${id}`
    : `${id}_${myUserID}`;
}

export function getAppointmentTypeInArabic(status) {
  if (status === "composition") return "تركيب";
  if (status === "maintenance") return "صيانة";
  if (status === "detect") return "في مرحلة الكشف";
  if (status === "execute") return "في مرحلة التنفيذ";
  if (status === "done") return "مكتملة";
}

export function getAppointmentStatusInArabic(id) {
  if (id === 1) return "قيد الانتظار";
  if (id === 2) return "قيد الكشف";
  if (id === 3) return "قيد التنفيذ";
  if (id === 4) return "مكتمل";
}

export function getAppointmentActiveStep(appointment) {
  const { status_id, start_time } = appointment;
  const isWaiting =
    status_id === 2 && dayjs(new Date()).isBefore(dayjs(start_time));

  if (isWaiting) return 0;
  return status_id - 1;
}

export function phoneNumberFormatter(phoneNumber) {
  const cleanNumber = phoneNumber.slice(-10).replace(/\D/g, "");
  // const cleanNumber = phoneNumber.replace(/\D/g, "");

  const countryCode = "963";
  const part1 = cleanNumber.slice(1, 4);
  const part2 = cleanNumber.slice(4, 7);
  const part3 = cleanNumber.slice(7);

  const formatted = `${countryCode} ${part1} ${part2} ${part3}`;
  return formatted;
}

export function isAppointmentStatusWaiting(appointment) {
  const { status_id, start_time } = appointment;

  const isWaiting =
    status_id === 1 ||
    (status_id === 2 && dayjs(new Date()).isBefore(dayjs(start_time)));

  return isWaiting;
}

export function getFilteredAppointments({ appointments, type, status }) {
  if (type === "all" && status === "all") {
    return appointments;
  }

  if (status === "waiting") {
    if (type === "all")
      return appointments.filter((appointment) =>
        isAppointmentStatusWaiting(appointment)
      );
    else
      return appointments.filter(
        (appointment) =>
          appointment.type_id === getOrderTypeID(type) &&
          isAppointmentStatusWaiting(appointment)
      );
  }

  if (status === "detect") {
    if (type === "all")
      return appointments.filter(
        (appointment) =>
          appointment.status_id === 2 &&
          !isAppointmentStatusWaiting(appointment)
      );
    else
      return appointments.filter(
        (appointment) =>
          appointment.type_id === getOrderTypeID(type) &&
          appointment.status_id === 2 &&
          !isAppointmentStatusWaiting(appointment)
      );
  }

  if (type !== "all" && status !== "all") {
    return appointments.filter(
      (appointment) =>
        appointment.type_id === getOrderTypeID(type) &&
        appointment.status_id === appointmentStatuses[status].id
    );
  }

  if (type === "all") {
    return appointments.filter(
      (appointment) => appointment.status_id === appointmentStatuses[status].id
    );
  }

  if (status === "all") {
    return appointments.filter(
      (appointment) => appointment.type_id === getOrderTypeID(type)
    );
  }
}

export function createAdminUserInFirestore() {
  addDocumentToCollection({
    collectionName: "users",
    documentID: localStorageInstance.uid,
    data: {
      about: "",
      created_at: Date.now().toString(),
      email: "admin@admin.com",
      id: localStorageInstance.uid,
      image: "null",
      is_online: false,
      last_active: Date.now().toString(),
      name: "Al-Baghdadi",
      push_token: "",
    },
  });
}

export async function deleteAuthenticationUsers({ usersEmailsToKeep }) {
  try {
    const users = await auth.listUsers();

    const usersToDelete = users.filter(
      (user) => !usersEmailsToKeep.includes(user.email)
    );

    for (const user of usersToDelete) {
      await auth.deleteUser(user.uid);
    }
  } catch (error) {
    console.error("Error deleting users:", error);
  }
}

export function getInvoiceID(date) {
  return new Date(date).getTime().toString();
}

export function formatNumber(num) {
  const formattedNumber = num.toFixed(2);

  return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getBatteryType(type) {
  if (type === "ليثيوم") return batteryTypes.lithium;
  else return batteryTypes.tubular;
}
