import { alpha } from "@material-ui/core";
import { mainColors } from "../style/mainColors";
import { useSearchParams } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Filter({ filterField, options, currentFilterColor, sx }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options?.[0].value;

  function handleClick(option) {
    searchParams.set(filterField, option.value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "32px",
        p: 0.5,
        bgcolor: mainColors.white,
        borderRadius: "8px",
        border: 1,
        borderColor: mainColors.lightGrey,
        ...sx,
      }}
    >
      {options?.map((option, index) => (
        <ListItemButton
          key={index}
          sx={{
            borderRadius: "4px",
            bgcolor:
              currentFilter === option.value &&
              (currentFilterColor
                ? alpha(currentFilterColor, 0.9)
                : alpha(mainColors.darkOrange, 0.9)),
            ":hover": {
              bgcolor:
                currentFilter === option.value &&
                (currentFilterColor
                  ? currentFilterColor
                  : mainColors.darkOrange),
            },
          }}
          onClick={() => handleClick(option)}
        >
          <Typography
            variant="body1"
            sx={{
              color: currentFilter === option.value && mainColors.white,
              fontWeight: currentFilter === option.value && 600,
            }}
          >
            {option.label ?? option.value}
          </Typography>
        </ListItemButton>
      ))}
    </Box>
  );
}

export default Filter;
