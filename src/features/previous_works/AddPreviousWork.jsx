import { useState } from "react";
import { useForm } from "react-hook-form";
import { mainColors } from "../../style/mainColors";
import { useAddPreviousWork } from "./useAddPreviousWork";
import AddingButton from "../../ui/AddingButton";
import AddOutlined from "@mui/icons-material/AddOutlined";
import Typography from "@mui/material/Typography";
import FormDialog from "../../ui/FormDialog";
import CustomTextField from "../../mui_custom_components/CustomTextField";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import SubtitlesOutlined from "@mui/icons-material/SubtitlesOutlined";
import Box from "@mui/material/Box";
import SelectImagesButton from "../../ui/SelectImagesButton";

function AddPreviousWork() {
  const { isLoading, addPreviousWork } = useAddPreviousWork();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState, watch, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    addPreviousWork(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  }

  return (
    <>
      <AddingButton onClick={() => setOpen(true)}>
        <AddOutlined sx={{ mr: 1 }} />
        <Typography
          variant="body1"
          sx={{ color: mainColors.white, fontWeight: "bold", mb: 0.5 }}
        >
          إضافة عمل
        </Typography>
      </AddingButton>

      <FormDialog
        title="إضافة عمل سابق"
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isLoading}
      >
        <Box display="flex">
          <CustomTextField
            label="العنوان"
            prefixIcon={<SubtitlesOutlined />}
            register={register}
            field="title"
            validateErrMsg={errors?.title?.message}
            sx={{ mr: 2 }}
            disabled={isLoading}
          />
          <SelectImagesButton
            sx={{ mb: 2 }}
            register={register}
            field="images"
            isRequired={true}
            watch={watch}
            error={errors?.images?.message}
            disabled={isLoading}
          >
            <AddCircleOutline sx={{ mr: 1 }} />
            اضغط لإضافة صور
          </SelectImagesButton>
        </Box>

        <CustomTextField
          rows={3}
          label="الوصف"
          prefixIcon={<DescriptionOutlined />}
          register={register}
          field="disc"
          validateErrMsg={errors?.disc?.message}
          disabled={isLoading}
        />
      </FormDialog>
    </>
  );
}

export default AddPreviousWork;
