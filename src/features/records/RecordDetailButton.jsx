import { useNavigate } from "react-router-dom";
import { alpha } from "@mui/material";
import { useState } from "react";
import { mainColors } from "../../style/mainColors";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Tooltip from "@mui/material/Tooltip";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
import MultiLinesEllipsisText from "../../ui/MultiLinesEllipsisText";
import DetailItem from "../../ui/DetailItem";
import ProductRowImage from "../products/ProductRowImage";

const sx = {
  mt: 3,
  height: "34px",
  borderRadius: "16px",
  bgcolor: mainColors.lightGrey,
  color: mainColors.darkBlue,
  boxShadow: "none",
  ":hover": { bgcolor: "#d6dade", boxShadow: "none" },
};

const desc = `تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل طلب
            صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل
            طلب صي يل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل طلب
            صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل
            طلب صي يل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل طلب
            صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل
            طلب صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل طلب
            صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل
            طلب صي يل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل طلب
            صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل
            طلب صي يل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل طلب
            صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل
            طلب صي`;

const products = [
  {
    id: 1,
    image: "images/1722964729panel250W.png",
    name: "panel panel panel panel",
  },
  {
    id: 1,
    image: "images/1722964729panel250W.png",
    name: "panel panel panel panel",
  },
  {
    id: 1,
    image: "images/1722966149panel350W.png",
    name: "panel panel panel panel",
  },
  {
    id: 1,
    image: "images/1723013008inverter8kw.jpg",
    name: "panel panel panel panel",
  },
  {
    id: 1,
    image: "images/1722964729panel250W.png",
    name: "panel panel panel panel",
  },
  {
    id: 1,
    image: "images/1722964729panel250W.png",
    name: "panel panel panel panel",
  },
  {
    id: 1,
    image: "images/1722966149panel350W.png",
    name: "panel panel panel panel",
  },
  {
    id: 1,
    image: "images/1723013008inverter8kw.jpg",
    name: "panel panel panel panel",
  },
];

function RecordDetailButton({ typeID }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)} sx={sx}>
        <Typography variant="body1" fontWeight={500} pb={0.5}>
          عرض التفاصيل
        </Typography>
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ direction: "rtl" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" sx={{ color: mainColors.darkBlue }}>
              {typeID === 1 ? "عملية صيانة" : "عملية تركيب"}
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: alpha(mainColors.darkGrey, 0.6) }}
            >
              10-10-2023
            </Typography>
          </Box>
        </DialogTitle>

        <DialogContent
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          {typeID === 2 && <RecordDetailProducts products={products} />}
          <RecordDetailDiscreption disc={desc} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default RecordDetailButton;

function RecordDetailDiscreption({ disc }) {
  const [showAllText, setShowAllText] = useState(false);

  return (
    <Box sx={{ display: "flex", alignItems: "start", mt: 0, direction: "rtl" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FiberManualRecord
          sx={{ fontSize: "12px", color: mainColors.darkGrey, ml: 0.5 }}
        />

        <Typography variant="body1" sx={{ fontWeight: "bold", ml: 1 }}>
          الوصف
        </Typography>
      </Box>
      <MultiLinesEllipsisText
        text={disc}
        maxLines={showAllText ? null : 5}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          setShowAllText((isShowAll) => !isShowAll);
        }}
      />
    </Box>
  );
}

function RecordDetailProducts({ products }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "right",
        mb: 2,
        overflowX: "auto",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 0,
          flexGrow: 1,
          justifyContent: "right",
          mr: 2,
        }}
      >
        {products.map((product, index) => (
          <Tooltip
            key={index}
            title={<Typography variant="body1">{product.name}</Typography>}
          >
            <div>
              <ProductRowImage
                image={product.image}
                amount={2}
                sx={{ mt: 2.5 }}
                onClick={() => navigate(`/products/${product.id}`)}
              />
            </div>
          </Tooltip>
        ))}
      </List>

      <DetailItem title="المنتجات" />
    </Box>
  );
}
