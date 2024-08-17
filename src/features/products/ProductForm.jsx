import { alpha } from "@mui/material";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import FormDialog from "../../ui/FormDialog";
import CustomTextField from "../../mui_custom_components/CustomTextField";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import AttachMoneyOutlined from "@mui/icons-material/AttachMoneyOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import DialpadOutlined from "@mui/icons-material/DialpadOutlined";
import SubtitlesOutlined from "@mui/icons-material/SubtitlesOutlined";
import SelectImageButton from "../../ui/SelectImageButton";
import SelectTextField from "../../mui_custom_components/SelectTextField";
import CategoryOutlined from "@mui/icons-material/CategoryOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";
import BoltOutlined from "@mui/icons-material/BoltOutlined";
import ClassOutlined from "@mui/icons-material/ClassOutlined";
import FlashAutoOutlined from "@mui/icons-material/FlashAutoOutlined";
import PowerInputOutlined from "@mui/icons-material/PowerInputOutlined";
import SettingsPowerOutlined from "@mui/icons-material/SettingsPowerOutlined";
import SolarPowerOutlined from "@mui/icons-material/SolarPowerOutlined";

function ProductForm({
  open,
  setOpen,
  onSubmit,
  isSubmitting,
  register,
  errors,
  watch,
  isUpdateForm = false,
  isSuccess,
  defaultCategory,
}) {
  return (
    <FormDialog
      title={isUpdateForm ? "أدخل التعديلات التي تريدها" : "أدخل تفاصيل المنتج"}
      actionTitle={isUpdateForm ? "تعديل" : "إضافة"}
      open={open}
      setOpen={setOpen}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
    >
      <Box display="flex">
        <CustomTextField
          label="الاسم"
          prefixIcon={<SubtitlesOutlined />}
          register={register}
          field="name"
          validateErrMsg={errors?.name?.message}
          sx={{ mr: 2 }}
          disabled={isSubmitting}
        />
        <SelectImageButton
          sx={{ mb: 2 }}
          register={register}
          field="image"
          isRequired={!isUpdateForm}
          watch={watch}
          error={errors?.image?.message}
          disabled={isSubmitting}
        >
          {isUpdateForm ? (
            <EditOutlined sx={{ mr: 1 }} />
          ) : (
            <AddCircleOutline sx={{ mr: 1 }} />
          )}
          {isUpdateForm ? "اضغط لتعديل الصورة" : "اضغط لإضافة صورة"}
        </SelectImageButton>
      </Box>
      <Box display="flex">
        <CustomTextField
          sx={{ mr: 1 }}
          label="السعر"
          prefixIcon={<AttachMoneyOutlined />}
          register={register}
          field="price"
          validateErrMsg={errors?.price?.message}
          disabled={isSubmitting}
          moreValidation={{
            validate: (val) => Number(val) > 0 || "only numbers accepted",
          }}
        />
        <CustomTextField
          sx={{ mr: 1 }}
          label="الكمية"
          prefixIcon={<DialpadOutlined />}
          register={register}
          field="quantity"
          validateErrMsg={errors?.quantity?.message}
          disabled={isSubmitting}
          moreValidation={{
            validate: (val) => Number(val) > 0 || "only numbers accepted",
          }}
        />
        <SelectTextField
          label="الصنف"
          prefixIcon={<CategoryOutlined />}
          options={["لوح طاقة", "بطارية", "إنفرتر"]}
          clearable={false}
          register={register}
          field="category_id"
          validateErrMsg={errors?.category_id?.message}
          defaultValue={defaultCategory}
          disabled={isUpdateForm || isSubmitting}
          reset={isSuccess}
        />
      </Box>
      <InverterDetails
        {...{ errors, isSubmitting, isUpdateForm, register, watch, isSuccess }}
      />
      <BatteryDetails
        {...{ errors, isSubmitting, isUpdateForm, register, watch, isSuccess }}
      />
      <PanelDetails
        {...{ errors, isSubmitting, isUpdateForm, register, watch }}
      />
      <CustomTextField
        rows={3}
        label="الوصف"
        prefixIcon={<DescriptionOutlined />}
        register={register}
        field="disc"
        validateErrMsg={errors?.disc?.message}
        disabled={isSubmitting}
      />
    </FormDialog>
  );
}

export default ProductForm;

function BatteryDetails({
  register,
  errors,
  isSubmitting,
  isUpdateForm,
  watch,
  isSuccess,
}) {
  const category = watch("category_id");
  if (category !== "بطارية") return;

  return (
    <Box display="flex">
      <CustomTextField
        sx={{ mr: 1 }}
        label="الأمبير"
        prefixIcon={
          <FlashAutoOutlined sx={{ color: alpha(mainColors.darkGrey, 0.6) }} />
        }
        register={register}
        field="battery_amper"
        // field="ampere"
        validateErrMsg={errors?.ampere?.message}
        disabled={isSubmitting}
        moreValidation={{
          validate: (val) => Number(val) > 0 || "only numbers accepted",
        }}
      />
      <SelectTextField
        sx={{ mr: 1 }}
        label="الفولت"
        prefixIcon={
          <BoltOutlined sx={{ color: alpha(mainColors.darkGrey, 0.6) }} />
        }
        options={[12, 24, 48]}
        clearable={false}
        register={register}
        field="battery_volt"
        // field="volt"
        validateErrMsg={errors?.volt?.message}
        // defaultValue={defaultCategory}
        disabled={isUpdateForm || isSubmitting}
        reset={isSuccess}
      />
      <SelectTextField
        label="النوع"
        prefixIcon={<ClassOutlined />}
        options={["ليثيوم", "أنبوبية"]}
        clearable={false}
        register={register}
        field="battery_type"
        validateErrMsg={errors?.battery_type?.message}
        // defaultValue={defaultCategory}
        disabled={isUpdateForm || isSubmitting}
        reset={isSuccess}
      />
    </Box>
  );
}

function InverterDetails({
  register,
  errors,
  isSubmitting,
  isUpdateForm,
  watch,
  isSuccess,
}) {
  const category = watch("category_id");
  if (category !== "إنفرتر") return;
  return (
    <Box display="flex">
      <CustomTextField
        sx={{ mr: 1 }}
        label="(Watt) الاستطاعة"
        prefixIcon={<PowerInputOutlined />}
        register={register}
        field="InverterWatt"
        validateErrMsg={errors?.inverter_watt?.message}
        disabled={isSubmitting}
        moreValidation={{
          validate: (val) => Number(val) > 0 || "only numbers accepted",
        }}
      />
      <CustomTextField
        sx={{ mr: 1 }}
        label="(Watt) استطاعة الإقلاع"
        prefixIcon={<SettingsPowerOutlined />}
        register={register}
        field="InverterStartWatt"
        validateErrMsg={errors?.inverter_start_watt?.message}
        disabled={isSubmitting}
        moreValidation={{
          validate: (val) => Number(val) > 0 || "only numbers accepted",
        }}
      />
      <SelectTextField
        label="الفولت"
        prefixIcon={
          <BoltOutlined sx={{ color: alpha(mainColors.darkGrey, 0.6) }} />
        }
        options={[12, 24, 48]}
        clearable={false}
        register={register}
        field="inverter_volt"
        validateErrMsg={errors?.volt?.message}
        disabled={isUpdateForm || isSubmitting}
        reset={isSuccess}
      />
    </Box>
  );
}

function PanelDetails({ register, errors, isSubmitting, isUpdateForm, watch }) {
  const category = watch("category_id");
  if (category !== "لوح طاقة") return;

  return (
    <CustomTextField
      // sx={{ mr: 1 }}
      label="(Watt) الاستطاعة"
      prefixIcon={<SolarPowerOutlined />}
      register={register}
      field="panel_capacity"
      // field="panel_watt"
      validateErrMsg={errors?.inverter_watt?.message}
      disabled={isSubmitting || isUpdateForm}
      moreValidation={{
        validate: (val) => Number(val) > 0 || "only numbers accepted",
      }}
    />
  );
}
