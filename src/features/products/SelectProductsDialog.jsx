import { useQueryClient } from "@tanstack/react-query";
import { useGetAllProducts } from "./useGetAllProducts";
import { alpha } from "@mui/material";
import { mainColors } from "../../style/mainColors";
import Loader from "../../ui/Loader";
import FullScreenDialog from "../../ui/FullScreenDialog";
import SelectProductItem from "./SelectProductItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function SelectProductsDialog({
  open,
  setOpen,
  selectedProducts,
  setSelectedProducts,
}) {
  const queryClient = useQueryClient();
  const products = queryClient.getQueryData(["Products"])?.products;
  const { isLoading, refetch } = useGetAllProducts();

  if (!products?.length) refetch();

  function handleSubmit() {
    setOpen(false);
  }

  return (
    <>
      {isLoading && <Loader />}
      <FullScreenDialog
        open={open}
        setOpen={setOpen}
        title="اختار المنتجات التي تريد اضافتها"
        actions={
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: mainColors.mainGreen,
              borderRadius: "12px",
              ":hover": { bgcolor: mainColors.darkGreen },
              "&.Mui-disabled": {
                color: "white",
                backgroundColor: "gray",
              },
            }}
          >
            تأكيد
          </Button>
        }
      >
        <Box
          sx={{
            // minHeight: "100%",
            px: "auto",
            bgcolor: alpha(mainColors.lightGrey, 0.5),
          }}
        >
          <Box p={2}>
            {!isLoading && (
              <Grid
                align="center"
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 3, md: 4 }}
              >
                {products.map((product, index) => (
                  <Grid item xs={1} sm={1} md={1} key={index}>
                    <SelectProductItem
                      product={product}
                      {...{ selectedProducts, setSelectedProducts }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </FullScreenDialog>
    </>
  );
}

export default SelectProductsDialog;
