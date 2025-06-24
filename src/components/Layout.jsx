/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

const Layout = ({ children, sx, id }) => {
  return (
    <Box
      id={id}
      sx={{
        px: {
          xs: "30px",
          md: "8%",
          lg: "12%",
        },
        pt: {
          xs: "60px",
          md: "80px",
        },
        boxSizing: "border-box",
        gap: "30px",
        transition: "all 0.2s ease-in-out",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
