import { Fragment } from "react";
import Typography from "@mui/material/Typography";

function MultiLinesEllipsisText({
  text,
  variant = "body1",
  align,
  sx,
  maxLines,
  onClick,
}) {
  const lines = text.split("\n");

  const textSx =
    maxLines && maxLines > 0
      ? {
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: maxLines,
          textOverflow: "ellipsis",
          ...sx,
        }
      : sx;

  return (
    <Typography variant={variant} align={align} sx={textSx} onClick={onClick}>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </Typography>
  );
}

export default MultiLinesEllipsisText;
