import dayjs from "dayjs";

export function getMonthInArabic(mmm) {
  switch (mmm) {
    case "Jan":
      return "كانون الثاني";
    case "Feb":
      return "شباط";
    case "Mar":
      return "آذار";
    case "Apr":
      return "نسيان";
    case "May":
      return "أيار";
    case "Jun":
      return "حزيران";
    case "Jul":
      return "تموز";
    case "Aug":
      return "آب";
    case "Sep":
      return "أيلول";
    case "Oct":
      return "تشرين الأول";
    case "Nov":
      return "تشرين الثاني";
    case "Dec":
      return "كانون الأول";
    default:
      return "";
  }
}

export function getDayInArabic(ddd) {
  switch (ddd) {
    case "Sat":
      return "السبت";
    case "Sun":
      return "الأحد";
    case "Mon":
      return "الأثنين";
    case "Tue":
      return "الثلاثاء";
    case "Wed":
      return "الأربعاء";
    case "Thu":
      return "الخميس";
    case "Fri":
      return "الجمعة";
    default:
      return "";
  }
}

export function formatDate(date) {
  const formattedDate = dayjs(date).format("ddd D MMM YYYY hh:mm A");
  const [day, dayNumber, month, year, hour, amPm] = formattedDate.split(" ");

  return {
    formattedDate,
    day,
    dayNumber,
    month,
    year,
    hour: `${hour} ${amPm}`,
  };
}

export function getDateInfo(date) {
  const dateInfo = dayjs(date).format("ddd D MMM M YYYY hh:mm A");
  const [day, dayNumber, month, monthNumber, year, hour, amPm] =
    dateInfo.split(" ");
  const dayInArabic = getDayInArabic(day);
  const monthInArabic = getMonthInArabic(month);
  return {
    day,
    dayNumber,
    month,
    monthNumber,
    year,
    hour,
    amPm,
    dayInArabic,
    monthInArabic,
  };
}

// export function getDMYinArabic(date) {
//   const { dayNumber, month, year } = formatDate(date);
//   const result = ` ${dayNumber} ${year} ${getMonthInArabic(month)}`;
//   return result;
// }
