import { Box } from "@mui/material";
import { useState } from "react";
import Layout from "../components/Layout";
import ServiciosItem from "../components/ServiciosItem";
import Title from "../components/Title";
import { SERVICIOS } from "../utils/Servicios";

const Servicios = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Layout
      id={"servicios"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: {
          xs: "center",
          sm: "flex-start",
        },
      }}
    >
      <Title title="Nuestros servicios." img="/services.png" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {SERVICIOS.map((servicio, index) => (
          <ServiciosItem
            key={index}
            servicio={servicio}
            index={index}
            handleToggle={handleToggle}
            openIndex={openIndex}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default Servicios;
