import { useState } from "react";
import { mainColors } from "../../style/mainColors";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import EditOutlined from "@mui/icons-material/EditOutlined";
import CustomMenu from "../../mui_custom_components/CustomMenu";
import AlertDialog from "../../ui/AlertDialog";
import ReadyMadeSystemForm from "./ReadyMadeSystemForm";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import ReadyMadeSystemDetailsDialog from "./ReadyMadeSystemDetailsDialog";

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
    label: "حذف",
    action: "delete",
    icon: <DeleteOutline sx={{ mr: 1.5, color: mainColors.mainError }} />,
  },
];

function ReadyMadeSystemMenu({ readyMadeSystem }) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openReadyMadeSystemForm, setOpenReadyMadeSystemForm] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { products } = readyMadeSystem;
  const [selectedProducts, setSelectedProducts] = useState(products);

  const actions = {
    view: () => {
      setOpenDetailsDialog(true);
    },
    edit: () => {
      setOpenReadyMadeSystemForm(true);
    },
    delete: () => {
      setOpenDeleteDialog(true);
    },
  };

  return (
    <>
      <CustomMenu options={options} actions={actions} />

      <AlertDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        title="تنبيه"
        content="هل أنت متأكد من قيامك بحذف هذه المنظومة, لا يمكنك التراجع بعد التأكيد"
      />

      <ReadyMadeSystemForm
        {...{ selectedProducts, setSelectedProducts }}
        open={openReadyMadeSystemForm}
        setOpen={setOpenReadyMadeSystemForm}
        defaultValues={readyMadeSystem}
        onClose={() => setSelectedProducts(products)}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(selectedProducts);
        }}
      />

      <ReadyMadeSystemDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        readyMadeSystem={readyMadeSystem}
      />
    </>
  );
}

export default ReadyMadeSystemMenu;
