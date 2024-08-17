import { alpha } from "@mui/material";
import { mainColors } from "../style/mainColors";
import { capitalize } from "../utils/helpers";
import { useGetProductDetails } from "../features/products/useGetProductDetails";
import Box from "@mui/material/Box";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import Typography from "@mui/material/Typography";
import Status from "../ui/Status";
import MultiLineText from "../ui/MultiLineText";
import ProductImage from "../features/products/ProductImage";
import ProductDetails from "../features/products/ProductDetails";
import ProductDetailsActions from "../features/products/ProductDetailsActions";

function ProductDetailsPage() {
  const { product, isLoading, error, refetch } = useGetProductDetails();

  if (isLoading) return <Loader />;

  if (error)
    return (
      <Box sx={{ mt: 10, mx: 10 }}>
        <ErrorMessage resourceName="المنتج" onRefetch={refetch} />
      </Box>
    );

  const { name, available, id, image, disc } = product;

  console.log(product);

  return (
    <Box p={3}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <ProductImage image={image} />

        <Box sx={{ minWidth: "65%" }}>
          <Box
            sx={{
              display: "flex",
              mb: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {capitalize(name)} #{id}
            </Typography>
            <Status
              status={available}
              sx={{ alignItems: "center", height: "28px", ml: 2, mb: 1.7 }}
            />
          </Box>

          <MultiLineText
            text={disc}
            align="right"
            sx={{
              fontSize: "18px",
              color: alpha(mainColors.darkGrey, 0.7),
              mb: 4,
            }}
          />

          <ProductDetails product={product} />
        </Box>
      </Box>
      <ProductDetailsActions product={product} />
    </Box>
  );
}

export default ProductDetailsPage;
