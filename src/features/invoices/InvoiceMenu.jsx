import { mainColors } from "../../style/mainColors";
import { useNavigate } from "react-router-dom";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import CustomMenu from "../../mui_custom_components/CustomMenu";
import PrintOutlined from "@mui/icons-material/PrintOutlined";

const options = [
  {
    label: "عرض التفاصيل",
    action: "view",
    icon: <VisibilityOutlined sx={{ mr: 1.5, color: mainColors.darkBlue }} />,
  },

  {
    label: "طباعة",
    action: "print",
    icon: <PrintOutlined sx={{ mr: 1.5, color: mainColors.darkBlue }} />,
  },
  {
    label: "حذف",
    action: "delete",
    icon: <DeleteOutline sx={{ mr: 1.5, color: mainColors.mainError }} />,
  },
];

function InvoiceMenu({ id }) {
  const navigate = useNavigate();

  const actions = {
    view: () => {
      navigate(`/invoices/${id}`);
    },
    print: () => {
      console.log("print");
    },
    delete: () => {
      console.log("Delete");
    },
  };

  return <CustomMenu options={options} actions={actions} />;
}

export default InvoiceMenu;
