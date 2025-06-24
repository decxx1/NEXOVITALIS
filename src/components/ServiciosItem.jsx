/* eslint-disable react/prop-types */
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { colors, fontStyles } from "../utils";

const ServiciosItem = ({ servicio, index, handleToggle, openIndex }) => {
  return (
    <Box
      key={index}
      elevation={3}
      sx={{
        width: "100%",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      <Box
        onClick={() => handleToggle(index)}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1.5,
          background: openIndex !== index ? colors.primary : colors.gradient,
          cursor: "pointer",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            ...fontStyles.subTitleCard,
            pr: "12px",
          }}
        >
          {servicio.title}
        </Typography>
        <IconButton size="small" sx={{ color: "#fff" }}>
          {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      <Collapse in={openIndex === index}>
        <Box
          sx={{
            display: "flex",
            p: 2,
            gap: 2,
            flexDirection: {
              xs: "column",
              md: "row",
            },
            bgcolor: "white",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "300px",
              },
            }}
          >
            <Box
              component="img"
              src={`/${servicio.img}`}
              alt={servicio.title}
              sx={{
                borderRadius: 2,
                maxWidth: {
                  xs: "100%",
                  md: "300px",
                },
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "80%",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                ...fontStyles.subTitle,
                mb: 1,
              }}
              fontWeight="bold"
            >
              Descripción del servicio
            </Typography>
            <Typography variant="p" sx={{ ...fontStyles.p }}>
              {servicio.description}
            </Typography>
            <Typography
              sx={{
                ...fontStyles.subTitle,
                marginTop: "16px",
              }}
              fontWeight="bold"
            >
              {servicio.subtitle ? servicio.subtitle : "Beneficios clave"}
            </Typography>
            <List>
              {servicio.list.map((beneficio, i) => (
                <ListItem key={i} sx={{ py: 0 }}>
                  <ListItemText
                    sx={{
                      color: colors.text,
                    }}
                    primary={`• ${beneficio}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ServiciosItem;
