import { formatNumber } from "../../utils/helpers";
import Status from "../../ui/Status";
import EllipsisText from "../../mui_custom_components/EllipsisText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductMenu from "./ProductMenu";
import ProductRowImage from "./ProductRowImage";

function ProductRow({ rowData }) {
  const { name, image, price, available, quantity } = rowData;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "75px",
      }}
    >
      <ProductRowImage image={image} />

      <Box ml={8} width={300}>
        <EllipsisText maxWidth={300}>{name}</EllipsisText>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "40%",
          ml: 15,
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" color="initial">
          {quantity}
        </Typography>

        <Typography variant="body1" color="initial">
          {formatNumber(price)}
        </Typography>

        <Status status={available} />
      </Box>

      <ProductMenu product={rowData} />
    </Box>
  );
}

export default ProductRow;
