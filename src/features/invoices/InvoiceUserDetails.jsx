import { phoneNumberFormatter } from "../../utils/helpers";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InvoiceDetailsTitle from "./InvoiceDetailsTitle";

function InvoiceUserDetails({ user, location }) {
  return (
    <Box sx={{ width: "50%" }}>
      <InvoiceDetailsTitle title="معلومات الزبون" />
      <Box
        sx={{
          width: "99.5%",
        }}
      >
        <Typography variant="body1" align="right">
          {user.name}
        </Typography>
        <Typography variant="body1" align="right">
          {location}
        </Typography>
        <Typography variant="body1" align="right">
          {`+الهاتف: ${phoneNumberFormatter(user.phone)
            .split(" ")
            .reverse()
            .join(" ")}`}
        </Typography>
        <Typography variant="body1" align="right">
          {`${user.email} :الإيميل`}
        </Typography>
      </Box>
    </Box>
  );
}

export default InvoiceUserDetails;
