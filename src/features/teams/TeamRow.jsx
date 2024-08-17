import { capitalize } from "../../utils/helpers";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import Status from "../../ui/Status";

function TeamRow({ rowData }) {
  rowData = {
    email: rowData.email,
    name: capitalize(rowData.name),
    phone: rowData.phone,
    status: 0,
    // id: rowData.id,
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
    >
      {Object.keys(rowData).map((key, index) => (
        <Box
          key={index}
          sx={{
            width: "23%",
            display: "flex",
            pl: index !== 0 && 10,
            justifyContent: index !== 0 && "center",
          }}
        >
          {key !== "status" ? (
            <Typography variant="body1" fontSize="18px">
              {rowData[key]}
            </Typography>
          ) : (
            <Status status={rowData[key]} sx={{ my: 1 }} />
          )}
        </Box>
      ))}

      <IconButton
        onClick={() => {
          console.log(rowData);
        }}
        size="small"
      >
        <MoreVert />
      </IconButton>
    </Box>
  );
}

export default TeamRow;
