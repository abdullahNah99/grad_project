import { mainColors } from "../../style/mainColors";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import CustomMenu from "../../mui_custom_components/CustomMenu";

const options = [
  {
    label: "عرض",
    action: "view",
    icon: <VisibilityOutlined sx={{ mr: 1.5, color: mainColors.darkBlue }} />,
  },
  {
    label: "حذف",
    action: "delete",
    icon: <DeleteOutline sx={{ mr: 1.5, color: mainColors.mainError }} />,
  },
];

function RecordMenu({ record }) {
  const actions = {
    view: () => {
      console.log(record);
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

export default RecordMenu;
