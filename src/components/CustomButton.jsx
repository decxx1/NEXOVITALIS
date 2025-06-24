/* eslint-disable react/prop-types */
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, Typography } from "@mui/material";
import { colors } from "../utils";
const CustomButton = ({ variant = 1 }) => {
  return (
    <Button
      variant="contained"
      endIcon={
        <WhatsAppIcon
          sx={{
            width: "42px",
            height: "42px",
          }}
        />
      }
      sx={{
        py: "8px",
        borderRadius: 99999,
        background: variant === 1 ? colors.gradient : colors.gradient2,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: 1.2,
          textTransform: "none",
        }}
      >
        <span>Solicitar información</span>
        <span>o consulta personalizada</span>
      </Typography>
    </Button>
  );
};

export default CustomButton;
