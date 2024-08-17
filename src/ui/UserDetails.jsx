import { capitalize } from "../utils/helpers";
import { alpha } from "@material-ui/core";
import { mainColors } from "../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Email from "@mui/icons-material/Email";
import Person from "@mui/icons-material/Person";
import Phone from "@mui/icons-material/Phone";
import Card from "@mui/material/Card";

function UserDetails({ user, onClick }) {
  const { email, name, phone } = user;

  return (
    <Card
      variant="elevation"
      onClick={onClick}
      sx={{
        minWidth: "25%",
        bgcolor: alpha(mainColors.lightBlue, 0.5),
        p: 1,
        borderRadius: "16px",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: mainColors.darkBlue,
            p: 3,
            fontSize: "44px",
            mr: 1,
          }}
        >
          {name.charAt(0).toUpperCase()}
        </Avatar>
        <Box>
          <Box display="flex">
            <Person
              sx={{ color: mainColors.darkBlue, mr: 0.3, fontSize: "22px" }}
            />
            <Typography variant="body1" fontSize="17px">
              {capitalize(name)}
            </Typography>
          </Box>
          <Box display="flex">
            <Email
              sx={{ color: mainColors.darkBlue, mr: 0.3, fontSize: "22px" }}
            />
            <Typography variant="body1" fontSize="17px">
              {email}
            </Typography>
          </Box>
          <Box display="flex">
            <Phone
              sx={{ color: mainColors.darkBlue, mr: 0.3, fontSize: "22px" }}
            />
            <Typography variant="body1" fontSize="17px">
              {phone}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default UserDetails;
