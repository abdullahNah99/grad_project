import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import CustomMenu from "../../mui_custom_components/CustomMenu";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import EditOutlined from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import AlertDialog from "../../ui/AlertDialog";

const options = [
  {
    label: "عرض التفاصيل",
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

function PreviousWorkMenu() {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const actions = {
    view: () => {
      console.log("view");
    },
    edit: () => {
      console.log("edit");
    },

    delete: () => {
      setOpenDeleteDialog(true);
    },
  };

  return (
    <>
      <Box display="flex" mr={2}>
        <CustomMenu options={options} actions={actions}>
          <MoreHoriz fontSize="medium" />
        </CustomMenu>
      </Box>

      <AlertDialog
        title="تنبيه"
        content="هل أنت متأكد من قيامك بحذف هذا العمل, لا يمكنك التراجع بعد التأكيد"
        onSubmit={() => {}}
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
      />
    </>
  );
}

export default PreviousWorkMenu;
