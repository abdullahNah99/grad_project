import { capitalize } from "../../utils/helpers";
import { BASE_URL } from "../../utils/constants";
import { useEffect, useRef } from "react";
import { alpha } from "@material-ui/core";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import NetworkImage from "../../ui/NetworkImage";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import EllipsisText from "../../mui_custom_components/EllipsisText";

function OrderProducts({ products }) {
  const ref = useRef(null);

  useEffect(function () {
    if (ref.current) {
      ref.current.scrollLeft = ref.current.scrollWidth;
    }
  }, []);

  return (
    <Box display="flex" alignItems="center" justifyContent="right">
      <Box
        ref={ref}
        sx={{
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <List sx={{ display: "flex", flexDirection: "row", p: 0 }}>
          {products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </List>
      </Box>
      <Typography variant="h4" sx={{ ml: 2 }}>
        المنتجات
      </Typography>
    </Box>
  );
}

function ProductItem({ product }) {
  const { name, image, id, amount } = product;
  const productImg = `${BASE_URL.split("/api")[0]}/${image}`;

  return (
    <ListItem
      sx={{
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          width: "16vw",
          bgcolor: alpha(mainColors.lightBlue, 0.5),
          p: 1,
          borderRadius: "12px",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "80px", borderRadius: "16px" }}>
          <NetworkImage src={productImg} sx={{ borderRadius: "4px", mr: 1 }} />
        </Box>
        {/* <Typography variant="body1" fontWeight="bold" display="block">
          {`#${id} ${capitalize(name)}`}
        </Typography> */}
        <EllipsisText sx={{ fontWeight: "bold" }}>{`#${id} ${capitalize(
          name
        )}`}</EllipsisText>
        <Box
          sx={{
            position: "absolute",
            bottom: 69,
            right: 10,
            width: 30,
            height: 30,
            bgcolor: mainColors.darkOrange,
            border: "1px solid white",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: mainColors.white,
          }}
        >
          {amount}
        </Box>
      </Card>
    </ListItem>
  );
}

export default OrderProducts;
