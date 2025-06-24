/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { fontStyles } from "../utils";
const CompromisoCard = ({ compromiso }) => {
  return (
    <Box
      sx={{
        bgcolor: compromiso.bg,
        width: "250px",
        height: "290px",
        borderRadius: "15px",
        p: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <FavoriteIcon
          sx={{
            color: "white",
            fontSize: "26px",
          }}
        />
        <Typography variant="h3" style={fontStyles.titleCard}>
          {compromiso.title}
        </Typography>
      </Box>
      {compromiso.list ? (
        <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
          {compromiso.list.map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "5px",
                ...fontStyles.pCard,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <Typography variant="p" style={{ ...fontStyles.pCard }}>
          {compromiso.description}
        </Typography>
      )}
    </Box>
  );
};

export default CompromisoCard;
