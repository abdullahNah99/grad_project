import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ProductRowImage from "../products/ProductRowImage";


function ReadyMadeSystemProducts({ products }) {
  const navigate = useNavigate();

  return (
    <Box display="flex" width="24%" justifyContent="center" mr={2}>
      {products.map((product, index) => (
        <Tooltip
          key={index}
          title={<Typography variant="body1">{product.name}</Typography>}
        >
          <Box display="flex" alignItems="center">
            <ProductRowImage
              sx={{ mr: 0.5 }}
              image={product.image}
              amount={product.pivot.amount}
              onClick={() => navigate(`/products/${product.id}`)}
            />

            {index < products.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: 0.3,
                  height: "80%",
                  my: "auto",
                }}
              />
            )}
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
}

export default ReadyMadeSystemProducts;
