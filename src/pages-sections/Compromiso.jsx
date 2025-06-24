import { Box } from "@mui/material";
import Layout from "../components/Layout";

import CompromisoCard from "../components/CompromisoCard";
import Title from "../components/Title";
import { compromisos } from "../utils/compromisos";
const Compromiso = () => {
  return (
    <Layout
      id={"compromiso"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Title
        title="Compromiso Vitalis: donde la conexión es vital, la calidad asistencial es nuestra norma."
        img="/handIcon.png"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: "20px",
        }}
      >
        {compromisos.map((compromiso, index) => {
          return <CompromisoCard key={index} compromiso={compromiso} />;
        })}
      </Box>
    </Layout>
  );
};

export default Compromiso;
