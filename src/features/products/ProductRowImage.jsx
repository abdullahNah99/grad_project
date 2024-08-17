import { BASE_URL } from "../../utils/constants";
import NetworkImage from "../../ui/NetworkImage";
import Box from "@mui/material/Box";
import ProductAmount from "./ProductAmount";

function ProductRowImage({ image, amount, onClick, sx }) {
  return (
    <Box
      onClick={onClick ? onClick : () => {}}
      sx={{
        position: "relative",
        width: "90px",
        height: "75px",
        cursor: onClick && "pointer",
        ...sx,
      }}
    >
      <NetworkImage
        src={`${BASE_URL.split("/api")[0]}/${image}`}
        sx={{ width: "90px", objectFit: "contain" }}
      />

      {amount && <ProductAmount amount={amount} />}
    </Box>
  );
}

export default ProductRowImage;
