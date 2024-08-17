import { useState } from "react";
import { mainColors } from "../../style/mainColors";
import { useForm } from "react-hook-form";
import { useAddTeam } from "./useAddTeam";
import PersonAddAlt1 from "@mui/icons-material/PersonAddAlt1";
import FormDialog from "../../ui/FormDialog";
import CustomTextField from "../../mui_custom_components/CustomTextField";
import PasswordTextField from "../../mui_custom_components/PasswordTextField";
import PersonOutline from "@mui/icons-material/PersonOutline";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import AddingButton from "../../ui/AddingButton";
import Typography from "@mui/material/Typography";

function AddTeamForm() {
  const { addTeam, isLoading } = useAddTeam();

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    addTeam(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  }

  return (
    <>
      <AddingButton onClick={() => setOpen(true)}>
        <PersonAddAlt1 sx={{ mr: 1 }} />
        <Typography
          variant="body1"
          sx={{ color: mainColors.white, fontWeight: "bold", mb: 0.5 }}
        >
          إضافة فريق
        </Typography>
      </AddingButton>

      <FormDialog
        title="إنشاء حساب فريق"
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isLoading}
      >
        <CustomTextField
          label="الاسم"
          prefixIcon={<PersonOutline sx={{ color: mainColors.darkBlue }} />}
          field="name"
          register={register}
          validateErrMsg={errors?.name?.message}
          disabled={isLoading}
        />
        <CustomTextField
          label="الهاتف"
          prefixIcon={<PhoneOutlined sx={{ color: mainColors.darkBlue }} />}
          field="phone"
          register={register}
          validateErrMsg={errors?.phone?.message}
          disabled={isLoading}
        />
        <CustomTextField
          label="البريد الإلكتروني"
          field="email"
          register={register}
          validateErrMsg={errors?.email?.message}
          disabled={isLoading}
        />
        <PasswordTextField
          register={register}
          validateErrMsg={errors?.password?.message}
          disabled={isLoading}
        />
      </FormDialog>
    </>
  );
}

export default AddTeamForm;
