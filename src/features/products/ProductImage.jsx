import { alpha } from "@mui/material";
import { BASE_URL } from "../../utils/constants";
import { mainColors } from "../../style/mainColors";
import Card from "@mui/material/Card";
import NetworkImage from "../../ui/NetworkImage";

function ProductImage({ image }) {
  return (
    <Card
      sx={{
        position: "sticky",
        top: "24px",
        // alignSelf: "flex-start",
        border: 1,
        borderColor: mainColors.lightGrey,
        borderRadius: "16px",
        bgcolor: alpha(mainColors.lightGrey, 0.2),
        mr: 2,
        height: "512px",
        minWidth: "33%",
      }}
    >
      <NetworkImage
        src={`${BASE_URL.split("/api")[0]}/${image}`}
        sx={{ objectFit: "fit" }}
      />
    </Card>
  );
}

export default ProductImage;
