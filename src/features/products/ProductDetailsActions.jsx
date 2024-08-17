import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useChangeProductStatus } from "./useChangeProductStatus";
import { mainColors } from "../../style/mainColors";
import { alpha } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import EditOutlined from "@mui/icons-material/EditOutlined";
import Autorenew from "@mui/icons-material/Autorenew";
import Loader from "../../ui/Loader";
import AlertDialog from "../../ui/AlertDialog";
import UpdateProduct from "./UpdateProduct";

function ProductDetailsActions({ product }) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openUpdateProduct, setOpenUpdateProduct] = useState(false);

  const queryClient = useQueryClient();
  const { isChangingStatus, changeProductStatus } = useChangeProductStatus();
  return (
    <>
      {isChangingStatus && <Loader />}

      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: 260,
          display: "flex",
          width: "100%",
        }}
      >
        <ProductDetailsButton
          title="حذف"
          icon={<DeleteOutline />}
          onClick={() => setOpenDeleteDialog(true)}
          sx={{
            color: mainColors.mainError,
            borderColor: mainColors.darkError,
            ":hover": {
              color: mainColors.mainError,
              borderColor: mainColors.darkError,
              bgcolor: alpha(mainColors.mainError, 0.1),
            },
          }}
        />
        <ProductDetailsButton
          title="تعديل"
          icon={<EditOutlined />}
          sx={{ color: mainColors.darkBlue }}
          onClick={() => setOpenUpdateProduct(true)}
        />
        <ProductDetailsButton
          title="تغيير الحالة"
          icon={<Autorenew />}
          onClick={() =>
            changeProductStatus(
              { productID: product.id },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries({
                    queryKey: ["Product", `${product.id}`],
                  });
                },
              }
            )
          }
          sx={{ color: mainColors.darkBlue }}
        />
      </Box>

      <AlertDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        title="تنبيه"
        content="هل أنت متأكد من قيامك بحذف هذا المنتج, لا يمكنك التراجع بعد التأكيد"
        onSubmit={() => console.log("delete")}
      />

      <UpdateProduct
        product={product}
        open={openUpdateProduct}
        setOpen={setOpenUpdateProduct}
      />
    </>
  );
}

export default ProductDetailsActions;

function ProductDetailsButton({ icon, title, onClick, sx }) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{ width: "10%", height: "48px", mx: 1, ...sx }}
    >
      <Box sx={{ display: "flex" }}>
        {icon}

        <Typography variant="body1" ml={1}>
          {title}
        </Typography>
      </Box>
    </Button>
  );
}
