import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import { mainColors } from "../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavigateBeforeOutlined from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlined from "@mui/icons-material/NavigateNextOutlined";

function TablePaginationRow({ count, resourceName }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pagesCount = Math.ceil(count / PAGE_SIZE);

  if (pagesCount === 1 || !pagesCount) return null;

  const currentPage = Number(searchParams.get("page")) || 1;

  function next() {
    const nextPage = currentPage === pagesCount ? currentPage : currentPage + 1;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  }

  function previous() {
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prevPage);
    setSearchParams(searchParams);
  }

  return (
    <Box display="flex" mt={1} justifyContent="space-between">
      <Box display="flex" mt={1}>
        <Typography
          variant="body1"
          mr={0.7}
          sx={{ color: mainColors.darkBlue }}
        >
          Showing {(currentPage - 1) * PAGE_SIZE + 1} to
        </Typography>
        <Typography
          variant="body1"
          fontWeight={600}
          mr={0.7}
          sx={{ color: mainColors.darkBlue }}
        >
          {currentPage === pagesCount ? count : currentPage * PAGE_SIZE}
        </Typography>
        <Typography
          variant="body1"
          mr={0.7}
          sx={{ color: mainColors.darkBlue }}
        >
          of
        </Typography>
        <Typography
          variant="body1"
          fontWeight={600}
          mr={0.7}
          sx={{ color: mainColors.darkBlue }}
        >
          {count}
        </Typography>
        <Typography variant="body1" sx={{ color: mainColors.darkBlue }}>
          {resourceName}
        </Typography>
      </Box>

      <Box display="flex">
        <Button
          variant="text"
          sx={{ color: mainColors.darkBlue }}
          onClick={previous}
          disabled={currentPage === 1}
        >
          <NavigateBeforeOutlined />
          السابق
        </Button>

        <Button
          variant="text"
          sx={{ color: mainColors.darkBlue }}
          onClick={next}
          disabled={currentPage === pagesCount}
        >
          التالي
          <NavigateNextOutlined />
        </Button>
      </Box>
    </Box>
  );
}

export default TablePaginationRow;
