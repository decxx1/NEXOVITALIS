import { Box, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import { colors } from "../utils";

const Info = () => {
  return (
    <Layout
      id={"about"}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "space-between",
        gap: {
          xs: "20px",
          md: "40px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          py: "50px",
          px: {
            xs: "20px",
            md: "70px",
          },
          background: colors.gradient,
          borderRadius: "30px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          justifyContent: "center",
          overflow: "hidden",
          gap: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontSize: {
              xs: "26px",
              md: "30px",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
            fontWeight: 600,
            maxWidth: {
              xs: "400px",
              md: "500px",
            },
          }}
        >
          Conectamos la vitalidad y la atención médica en cada visita.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: "17px",
              md: "20px",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
            color: "white",
            fontStyle: "italic",
          }}
        >
          Contactanos para recibir asesoramiento profesional
        </Typography>
        <CustomButton variant={2} />
        <Box
          component={"img"}
          src="/dna.png"
          alt="info"
          sx={{
            position: "absolute",
            width: "100px",
            right: "70px",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        />
      </Box>
    </Layout>
  );
};

export default Info;
