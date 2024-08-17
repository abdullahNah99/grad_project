import { mainColors } from "../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InvoicesTable from "../features/invoices/InvoicesTable";
import AddingButton from "../ui/AddingButton";
import PostAddOutlined from "@mui/icons-material/PostAddOutlined";
import YearFilter from "../ui/YearFilter";

function InvoicesPage() {
  return (
    <Box p={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" color="initial" fontWeight="bold">
          الفواتير
        </Typography>

        <Box display="flex">
          <YearFilter />

          <AddingButton sx={{ ml: 1 }}>
            <PostAddOutlined sx={{ mr: 1 }} />

            <Typography
              variant="body1"
              sx={{ color: mainColors.white, fontWeight: "bold", mb: 0.5 }}
            >
              إنشاء فاتورة
            </Typography>
          </AddingButton>
        </Box>
      </Box>

      <InvoicesTable />
    </Box>
  );
}

export default InvoicesPage;
