import { useForm } from "react-hook-form";
import { mainColors } from "../../style/mainColors";
import { useLogin } from "./useLogin";
import CustomTextField from "../../mui_custom_components/CustomTextField";
import PasswordTextField from "../../mui_custom_components/PasswordTextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loader from "../../ui/Loader";

function LoginForm() {
  const { isLoading, login } = useLogin();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: "admin@admin.com", password: "adminadminadmina" },
  });
  const { errors } = formState;

  function onSubmit(data) {
    login(data);
  }

  if (isLoading) return <Loader />;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "35vw",
        minHeight: "40vh",
        bgcolor: mainColors.lightYellow,
        borderRadius: "32px",
        py: 5,
        px: 8,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: mainColors.darkBlue,
          display: "flex",
          justifyContent: "center",
        }}
      >
        البغدادي
      </Typography>

      <Typography
        variant="body2"
        gutterBottom
        sx={{
          color: mainColors.darkGrey,
          fontStyle: "italic",
          display: "flex",
          justifyContent: "center",
        }}
      >
        ...الرجاء ادخال الإيميل وكلمة السر من أجل البدء
        {/* Enter your credentials to get started... */}
      </Typography>

      <CustomTextField
        field="email"
        label="الإيميل"
        register={register}
        validateErrMsg={errors?.email?.message}
      />
      <PasswordTextField
        field="password"
        register={register}
        validateErrMsg={errors?.password?.message}
      />

      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{
          bgcolor: mainColors.darkBlue,
          mt: 5,
          borderRadius: "32px",
          height: "45px",
          transition: "all 0.3s ease",
          ":hover": { bgcolor: "#01202E", transform: "scale(1.05)" },
        }}
      >
        تسجيل الدخول
      </Button>
    </Box>
  );
}

export default LoginForm;
