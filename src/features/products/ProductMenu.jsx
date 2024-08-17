import { mainColors } from "../../style/mainColors";
import { useChangeProductStatus } from "./useChangeProductStatus";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import CustomMenu from "../../mui_custom_components/CustomMenu";
import Loader from "../../ui/Loader";
import UpdateProduct from "./UpdateProduct";
import EditOutlined from "@mui/icons-material/EditOutlined";
import Autorenew from "@mui/icons-material/Autorenew";

const options = [
  {
    label: "عرض",
    action: "view",
    icon: <VisibilityOutlined sx={{ mr: 1.5, color: mainColors.darkBlue }} />,
  },
  {
    label: "تعديل",
    action: "edit",
    icon: <EditOutlined sx={{ mr: 1.5, color: mainColors.darkBlue }} />,
  },
  {
    label: "تغيير الحالة",
    action: "updateStatus",
    icon: <Autorenew sx={{ mr: 1.5, color: mainColors.darkBlue }} />,
  },
  {
    label: "حذف",
    action: "delete",
    icon: <DeleteOutline sx={{ mr: 1.5, color: mainColors.mainError }} />,
  },
];

function ProductMenu({ product }) {
  const { changeProductStatus, isChangingStatus } = useChangeProductStatus();
  const [openUpdateProduct, setOpenUpdateProduct] = useState(false);

  const navigate = useNavigate();

  const actions = {
    view: () => {
      navigate(`/products/${product.id}`);
    },
    edit: () => {
      setOpenUpdateProduct(true);
    },
    updateStatus: () => {
      changeProductStatus({ productID: product.id });
    },
    delete: () => {
      console.log("Delete");
    },
  };

  return (
    <>
      {isChangingStatus && <Loader />}
      <CustomMenu options={options} actions={actions} />

      <UpdateProduct
        product={product}
        open={openUpdateProduct}
        setOpen={setOpenUpdateProduct}
      />
    </>
  );
}

export default ProductMenu;
