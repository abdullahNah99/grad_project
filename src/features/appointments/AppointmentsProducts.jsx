import { BASE_URL } from "../../utils/constants";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import NetworkImage from "../../ui/NetworkImage";
import List from "@mui/material/List";
import ProductAmount from "../products/ProductAmount";
import { useNavigate } from "react-router-dom";

function AppointmentsProducts({ products }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 0,
          width: "100%",
          justifyContent: "center",
        }}
      >
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </List>
    </Box>
  );
}

function ProductItem({ product }) {
  const navigate = useNavigate();
  const {
    pivot: { amount },
    id,
  } = product;

  return (
    <Box sx={{ position: "relative", mt: 2 }}>
      <Card
        onClick={() => navigate(`/products/${id}`)}
        sx={{
          m: 1,
          px: 2,
          pt: 1,
          pb: 8,
          border: 1,
          borderColor: mainColors.lightGrey,
          borderRadius: "16px",
          height: "200px",
          width: "172px",
          cursor: "pointer",
        }}
      >
        <NetworkImage src={`${BASE_URL.split("/api")[0]}/${product.image}`} />

        <Typography variant="body1" align="center" mt={2}>
          {product.name}
        </Typography>
      </Card>

      <ProductAmount amount={amount} size={30} top={-5} right={0} />
    </Box>
  );
}

export default AppointmentsProducts;
