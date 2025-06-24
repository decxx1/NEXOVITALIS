import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { fontStyles } from "../utils";

const Cadeid = () => {
  return (
    <Layout
      id={"cadeid"}
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
      <Title
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          width: "100%",
        }}
        title="Somos miembros de la CADEID."
        img="/cadeidIcon.png"
      />
      <Box
        component={"img"}
        sx={{
          width: "300px",
        }}
        src="/cadeidImg.webp"
        alt="cadeid"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Title
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
          title="Somos miembros de la CADEID."
          img="/cadeidIcon.png"
        />
        <Typography
          variant="h3"
          sx={{
            ...fontStyles.subTitle,
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Somos miembros de la CÁMARA ARGENTINA DE EMPRESAS DE INTERNACIÓN
          DOMICLIARIA.
        </Typography>
        <Typography
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
            ...fontStyles.p,
          }}
        >
          Esta es una acción fundamental para impulsar en conjunto la excelencia
          del sector y mantenernos a la vanguardia, así como también generar
          cobertura de servicios en todo el país a través de numerosas empresas
          asociadas a la Red nacional de prestadores. Ser parte de CADEID es
          apostar al crecimiento en un espacio de integración con más de 20 años
          de trayectoria.
        </Typography>{" "}
      </Box>
    </Layout>
  );
};

export default Cadeid;
