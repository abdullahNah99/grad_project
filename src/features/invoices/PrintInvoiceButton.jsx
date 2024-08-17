import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PrintOutlined from "@mui/icons-material/PrintOutlined";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PrintInvoiceButton({ invoiceRef, invoice }) {
  const { id } = invoice;
  async function handleDownloadPdf() {
    const element = invoiceRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const pdf = new jsPDF({
      orientation: imgWidth > imgHeight ? "landscape" : "portrait",
      unit: "pt",
      format: [imgWidth, imgHeight],
    });
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`invoice_${id}.pdf`);
  }

  return (
    <Button
      variant="outlined"
      onClick={handleDownloadPdf}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        mr: 3,
      }}
    >
      <Typography variant="body1">طباعة</Typography>
      <PrintOutlined />
    </Button>
  );
}

export default PrintInvoiceButton;
