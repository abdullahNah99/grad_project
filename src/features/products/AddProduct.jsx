import { getBatteryType, getProductCategoryID } from "../../utils/helpers";
import { useAddProduct } from "./useAddProduct";
import { mainColors } from "../../style/mainColors";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AddOutlined from "@mui/icons-material/AddOutlined";
import AddingButton from "../../ui/AddingButton";
import Typography from "@mui/material/Typography";
import ProductForm from "./ProductForm";
import { productCategories } from "../../utils/constants";

function AddProduct() {
  const { addProduct, isLoading, isSuccess } = useAddProduct();

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState, watch, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const { category_id: category, image, battery_type } = data;
    const product = {
      ...data,
      category_id: getProductCategoryID(category),
      image: image[0],
    };

    if (getProductCategoryID(category) === productCategories.battery)
      product["battery_type"] = getBatteryType(battery_type);

    console.log(product);

    addProduct(product, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  }

  return (
    <>
      <AddingButton onClick={() => setOpen(true)} sx={{ ml: 1 }}>
        <AddOutlined sx={{ mr: 1 }} />
        <Typography
          variant="body1"
          sx={{ color: mainColors.white, fontWeight: "bold", mb: 0.5 }}
        >
          إضافة منتج
        </Typography>
      </AddingButton>

      <ProductForm
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isLoading}
        {...{ open, setOpen, register, errors, watch, isSuccess }}
      />
    </>
  );
}

export default AddProduct;
