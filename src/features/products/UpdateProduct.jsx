import { useForm } from "react-hook-form";
import ProductForm from "./ProductForm";

function getCategoryByID(id) {
  if (id === 1) return "لوح طاقة";
  if (id === 2) return "بطارية";
  if (id === 3) return "إنفرتر";
}

function UpdateProduct({ product, open, setOpen }) {
  // const {
  //   name,
  //   price,
  //   quantity,
  //   disc,
  //   category_id,
  //   InverterStartWatt,
  //   InverterWatt,
  //   inverter_volt,
  //   battery_amper,
  //   battery_type,
  //   battery_volt,
  //   panel_capacity,
  // } = product;
  const { name, price, quantity, disc, category_id } = product;
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      name,
      price,
      quantity,
      disc,
    },
  });
  const { errors } = formState;

  function onSubmit() {
    console.log("test");
  }

  return (
    <ProductForm
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={false}
      isUpdateForm
      defaultCategory={getCategoryByID(category_id)}
      {...{ open, setOpen, register, errors, watch }}
    />
  );
}

export default UpdateProduct;
