import { phoneNumberFormatter } from "../../utils/helpers";
import { CO_EMAIL, CO_PHONE } from "../../utils/constants";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InvoiceDetailsTitle from "./InvoiceDetailsTitle";

function InvoiceCompanyDetails() {
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <InvoiceDetailsTitle title="تفاصيل الشركة" />
      <Box
        sx={{
          width: "99.5%",
        }}
      >
        <Typography variant="body1" align="left">
          مجموعة البغدادي للطاقة البديلة
        </Typography>
        <Typography variant="body1" align="left">
          دمشق المنطقة الصناعية
        </Typography>
        <Typography variant="body1" align="left">
          {`+الهاتف: ${phoneNumberFormatter(CO_PHONE)
            .split(" ")
            .reverse()
            .join(" ")}`}
        </Typography>
        <Typography variant="body1" align="left">
          {`${CO_EMAIL} :الإيميل`}
        </Typography>
      </Box>
    </Box>
  );
}

export default InvoiceCompanyDetails;

// import { phoneNumberFormatter } from "../../utils/helpers";
// import { CO_EMAIL, CO_PHONE } from "../../utils/constants";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import InvoiceDetailsTitle from "./InvoiceDetailsTitle";

// function InvoiceCompanyDetails() {
//   return (
//     <Box
//       sx={{
//         width: "50%",
//         bgcolor: "red",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-end",
//       }}
//     >
//       <InvoiceDetailsTitle title="تفاصيل الشركة" />
//       <Box
//         sx={{
//           width: "99.5%",
//         }}
//       >
//         <Typography variant="body1" align="right">
//           مجموعة البغدادي للطاقة البديلة
//         </Typography>
//         <Typography variant="body1" align="right">
//           دمشق المنطقة الصناعية
//         </Typography>
//         <Typography variant="body1" align="right">
//           {+الهاتف: ${phoneNumberFormatter(CO_PHONE)
//             .split(" ")
//             .reverse()
//             .join(" ")}}
//         </Typography>
//         <Typography variant="body1" align="right">
//           {${CO_EMAIL} :الإيميل}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default InvoiceCompanyDetails;
