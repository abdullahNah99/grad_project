import { formatNumber } from "../../utils/helpers";
import Box from "@mui/material/Box";
import DetailItem from "../../ui/DetailItem";

function ProductDetails({ product }) {
  const {
    category_id,
    price,
    quantity,
    InverterStartWatt: inverterStartWatt,
    InverterWatt: inverterWatt,
    inverter_volt,
    battery_amper,
    battery_type,
    battery_volt,
    panel_capacity,
  } = product;

  return (
    <Box>
      <DetailItem title="السعر" detail={formatNumber(price)} />
      <DetailItem title="الكمية" detail={quantity} />

      {category_id === 1 && (
        <DetailItem title="الاستطاعة" detail={panel_capacity} />
      )}

      {category_id === 2 && (
        <>
          <DetailItem title="النوع" detail={battery_type} />
          <DetailItem title="الأمبير" detail={battery_amper} />
          <DetailItem title="الفولت" detail={battery_volt} />
        </>
      )}

      {category_id === 3 && (
        <>
          <DetailItem title="الاستطاعة" detail={inverterWatt} />
          <DetailItem title="قدرة الإقلاع" detail={inverterStartWatt} />
          <DetailItem title="جهد المدخل" detail={inverter_volt} />
        </>
      )}
    </Box>
  );
}

export default ProductDetails;
