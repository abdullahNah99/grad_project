import { useState } from "react";
import FormDialog from "../../ui/FormDialog";
import CustomTextField from "../../mui_custom_components/CustomTextField";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import SubtitlesOutlined from "@mui/icons-material/SubtitlesOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SelectProductsDialog from "../products/SelectProductsDialog";
import Edit from "@mui/icons-material/Edit";

function ReadyMadeSystemForm({
  open,
  setOpen,
  onSubmit,
  isSubmitting,
  register,
  errors,
  selectedProducts,
  setSelectedProducts,
  defaultValues,
  onClose,
}) {
  const [openProducts, setOpenProducts] = useState(false);

  return (
    <>
      <FormDialog
        title={
          defaultValues ? "أدخل التعديلات التي تريدها" : "إضافة منظومة جاهزة"
        }
        actionTitle={defaultValues ? "تعديل" : "إضافة"}
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        onClose={onClose}
      >
        <Box display="flex">
          <CustomTextField
            label="العنوان"
            prefixIcon={<SubtitlesOutlined />}
            register={register}
            field="name"
            validateErrMsg={errors?.name?.message}
            sx={{ mr: 2 }}
            disabled={isSubmitting}
            defaultValue={defaultValues?.name}
          />

          <Button
            variant="outlined"
            fullWidth
            sx={{ maxHeight: 57, mb: 2 }}
            onClick={() => setOpenProducts(true)}
          >
            {!selectedProducts.length ? (
              <>
                <AddCircleOutline sx={{ mr: 1 }} />
                اضغط لإضافة منتجات
              </>
            ) : (
              <>
                <Edit sx={{ mr: 1 }} />
                اضغط لتعديل المنتجات
              </>
            )}
          </Button>
        </Box>

        <CustomTextField
          rows={5}
          label="الوصف"
          prefixIcon={<DescriptionOutlined />}
          register={register}
          field="desc"
          validateErrMsg={errors?.desc?.message}
          disabled={isSubmitting}
          defaultValue={defaultValues?.desc}
        />
      </FormDialog>

      <SelectProductsDialog
        open={openProducts}
        setOpen={setOpenProducts}
        {...{ selectedProducts, setSelectedProducts }}
      />
    </>
  );
}

export default ReadyMadeSystemForm;
