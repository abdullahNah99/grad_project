import CustomSelect from "../mui_custom_components/CustomSelect";
import { getMonthInArabic } from "../utils/datesFormats";

const options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
].map((month) => getMonthInArabic(month));

function SelectMonth() {
  return <CustomSelect options={options} />;
}

export default SelectMonth;
