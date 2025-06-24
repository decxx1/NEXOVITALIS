import { Typography } from "@mui/material";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { fontStyles } from "../utils";

const About = () => {
  return (
    <Layout
      id={"about"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
      }}
    >
      <Title
        title="Transformamos la atención domiciliaria con innovación y calidad asistencial."
        img="/check.png"
      />
      <Typography
        variant="p"
        sx={{
          marginLeft: {
            xs: "0px",
            sm: "85px",
          },
          textAlign: {
            xs: "center",
            sm: "left",
          },
          ...fontStyles.p,
        }}
      >
        Brindamos cuidados integrales de salud en el domicilio, con un equipo
        altamente capacitado y comprometido con la excelencia. Nos destacamos
        por ofrecer atención médica de alta calidad con agilidad y seguridad,
        para garantizar el bienestar de nuestros pacientes y sus familias.
      </Typography>
    </Layout>
  );
};

export default About;
