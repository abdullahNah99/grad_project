import { mainColors } from "../../style/mainColors";
import { useAddReadyMadeSystem } from "./useAddReadyMadeSystem";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AddingButton from "../../ui/AddingButton";
import AddOutlined from "@mui/icons-material/AddOutlined";
import Typography from "@mui/material/Typography";
import ReadyMadeSystemForm from "./ReadyMadeSystemForm";

function AddReadyMadeSystem() {
  const { isLoading, addReadyMadeSystem } = useAddReadyMadeSystem();
  const [open, setOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const { name, desc } = data;
    addReadyMadeSystem(
      {
        name,
        desc,
        products: selectedProducts,
      },
      {
        onSuccess: () => {
          setSelectedProducts([]);
          setOpen(false);
          reset();
        },
      }
    );
  }

  return (
    <>
      <AddingButton onClick={() => setOpen(true)}>
        <AddOutlined sx={{ mr: 1 }} />
        <Typography
          variant="body1"
          sx={{ color: mainColors.white, fontWeight: "bold", mb: 0.5 }}
        >
          إضافة منظومة
        </Typography>
      </AddingButton>

      <ReadyMadeSystemForm
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isLoading}
        {...{
          open,
          setOpen,
          errors,
          register,
          selectedProducts,
          setSelectedProducts,
        }}
      />
    </>
  );
}

export default AddReadyMadeSystem;
