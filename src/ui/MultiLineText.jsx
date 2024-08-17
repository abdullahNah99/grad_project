import { Fragment } from "react";
import Typography from "@mui/material/Typography";

function MultiLineText({ text, variant = "body1", align, sx }) {
  const lines = text.split("\n");

  return (
    <Typography variant={variant} align={align} sx={sx}>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </Typography>
  );
}

export default MultiLineText;
