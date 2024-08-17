import { mainColors } from "../../style/mainColors";
import { useNavigate } from "react-router-dom";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import EditOutlined from "@mui/icons-material/EditOutlined";
import CustomMenu from "../../mui_custom_components/CustomMenu";

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

function AppointmentMenu({ appointment }) {
  const navigate = useNavigate();

  const actions = {
    view: () => {
      navigate(`/appointments/${appointment.id}`);
    },
    edit: () => {
      console.log("Edit");
    },
    delete: () => {
      console.log("Delete");
    },
  };

  return <CustomMenu options={options} actions={actions} />;
}

export default AppointmentMenu;
