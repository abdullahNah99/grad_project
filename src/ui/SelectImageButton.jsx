import { mainColors } from "../style/mainColors";
import { useEffect, useState } from "react";
import { alpha } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Error from "@mui/icons-material/Error";
import Button from "@mui/material/Button";

function SelectImageButton({
  field,
  register,
  children,
  watch,
  isRequired,
  error,
  disabled,
  sx,
}) {
  const fileValue = watch?.(field);

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(
    function () {
      setSelectedFile(fileValue?.[0]);
    },
    [fileValue, watch]
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
        {...register?.(field, { required: isRequired ? "required" : null })}
      />
      {error && (
        <>
          Required <Error sx={{ ml: 1 }} />
        </>
      )}

      {!selectedFile && !error && children}

      {selectedFile && (
        <>
          {selectedFile?.name?.length > 10
            ? `${selectedFile?.name?.slice(0, 10)}...`
            : selectedFile?.name}
          <Edit />
        </>
      )}
    </Button>
  );
}

export default SelectImageButton;
