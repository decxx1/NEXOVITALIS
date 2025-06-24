/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { fontStyles } from "../utils";

const Title = ({ img, title, sx, sxTitle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: {
          xs: "center",
          sm: "flex-start",
        },
        gap: "20px",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        ...sx,
      }}
    >
      <Box
        component={"img"}
        src={img}
        alt="ICON TITLE"
        sx={{
          width: "65px",
          height: "65px",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          ...fontStyles.title,
          textAlign: {
            xs: "center",
            sm: "left",
          },
          ...sxTitle,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
