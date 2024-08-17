import { getProductTypyInArabic } from "../utils/helpers";
import { alpha } from "@material-ui/core";
import { mainColors } from "../style/mainColors";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductsTable from "../features/products/ProductsTable";
import Filter from "../ui/Filter";
import AddProduct from "../features/products/AddProduct";

const filterOptions = [
  { value: "all", label: "الكل" },
  { value: "batteries", label: "البطاريات" },
  { value: "panels", label: "الألواح" },
  { value: "inverters", label: "الإنفرترات" },
];

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const currentType = searchParams.get("type") || "all";

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: alpha(mainColors.lightGrey, 0.3),
        minHeight: "calc(100vh - 112px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "initial",
            fontWeight: "bold",
          }}
        >
          {getProductTypyInArabic(currentType)}
        </Typography>

        <Box display="flex">
          <Filter filterField="type" options={filterOptions} />

          <AddProduct />
        </Box>
      </Box>

      <ProductsTable />
    </Box>
  );
}

export default ProductsPage;
