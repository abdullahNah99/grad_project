import Typography from "@mui/material/Typography";

function InvoiceDetailsTitle({ title }) {
  return (
    <Typography
      variant="h5"
      gutterBottom
      align="right"
      sx={{ fontWeight: "bold" }}
    >
      {title}
    </Typography>
  );
}

export default InvoiceDetailsTitle;
