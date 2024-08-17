import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReadyMadeSystemMenu from "./ReadyMadeSystemMenu";
import ReadyMadeSystemProducts from "./ReadyMadeSystemProducts";
import ReadyMadeSystemDiscreption from "./ReadyMadeSystemDiscreption";

function ReadyMadeSystemRow({ rowData }) {
  const { desc, name, products } = rowData;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "75px",
      }}
    >
      <Box width="20%" justifyContent="center">
        <Typography variant="body1" align="center" fontSize="18px">
          {name}
        </Typography>
      </Box>

      <ReadyMadeSystemDiscreption desc={desc} />

      <ReadyMadeSystemProducts products={products} />

      <ReadyMadeSystemMenu readyMadeSystem={rowData} />
    </Box>
  );
}

export default ReadyMadeSystemRow;
