import { cloneElement } from "react";
import { mainColors } from "../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Table({ titles, data, row }) {
  return (
    <Box
      sx={{
        width: "100%",
        border: 1,
        borderColor: mainColors.mainGrey,
        borderRadius: "8px",
      }}
    >
      <TableHeader titles={titles} />

      {data?.map((rowData, index) => (
        <TableRow key={index} lastRow={index === data?.length - 1}>
          {cloneElement(row, { rowData })}
        </TableRow>
      ))}
    </Box>
  );
}

export default Table;

function TableHeader({ titles }) {
  return (
    <Box
      sx={{
        height: "64px",
        borderBottom: 1,
        borderBottomColor: mainColors.darkGrey,
        display: "flex",
        alignItems: "center",
        px: 2,
      }}
    >
      {titles?.map((title, index) => (
        <Typography
          key={index}
          variant="h6"
          fontWeight={600}
          sx={{ ...title.sx }}
        >
          {title.text}
        </Typography>
      ))}
    </Box>
  );
}

function TableRow({ lastRow = false, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "75px",
        bgcolor: mainColors.white,
        borderBottom: 1,
        px: 1,
        borderBottomRightRadius: lastRow && "8px",
        borderBottomLeftRadius: lastRow && "8px",
        borderBottomColor: mainColors.lightGrey,
      }}
    >
      {children}
    </Box>
  );
}
