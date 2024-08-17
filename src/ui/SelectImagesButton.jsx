import { mainColors } from "../style/mainColors";
import { useEffect, useState } from "react";
import { alpha } from "@mui/material";
import Error from "@mui/icons-material/Error";
import Button from "@mui/material/Button";
import EditOutlined from "@mui/icons-material/EditOutlined";

function SelectImagesButton({
  field,
  register,
  children,
  watch,
  isRequired,
  error,
  disabled,
  sx,
}) {
  const fileValues = watch?.(field);

  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(
    function () {
      setSelectedFiles(fileValues || []);
    },
    [fileValues, watch]
  );

  return (
    <Button
      variant="outlined"
      fullWidth
      component="label"
      disabled={disabled}
      sx={{
        maxHeight: 57,
        color: !error ? mainColors.darkBlue : mainColors.darkOrange,
        borderColor: !error
          ? alpha(mainColors.darkBlue, 0.9)
          : mainColors.darkOrange,
        ":hover": {
          borderColor: mainColors.darkBlue,
        },
        ...sx,
      }}
    >
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        multiple
        {...register?.(field, { required: isRequired ? "required" : null })}
      />
      {error && (
        <>
          Required <Error sx={{ ml: 1 }} />
        </>
      )}

      {!selectedFiles.length && !error && children}

      {selectedFiles.length > 0 && (
        <>
          <EditOutlined sx={{ mr: 1 }} />
          اضغط لتعديل الصور
        </>
      )}
    </Button>
  );
}

export default SelectImagesButton;
