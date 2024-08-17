import { mainColors } from "../../style/mainColors";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function LoadingChatUser() {
  return (
    <Box display="flex" flexGrow={1} mb={1.5} mx={1}>
      <Skeleton
        variant="circular"
        width={60}
        height={60}
        sx={{ mr: 1, bgcolor: alpha(mainColors.mainGrey, 0.5) }}
      />
      <Box alignContent="center">
        <Skeleton
          animation="wave"
          width="200px"
          height="20px"
          sx={{ bgcolor: alpha(mainColors.mainGrey, 0.5) }}
        />
        <Skeleton
          animation="wave"
          width="150px"
          height="20px"
          sx={{ bgcolor: alpha(mainColors.mainGrey, 0.5) }}
        />
      </Box>
    </Box>
  );
}

export default LoadingChatUser;
