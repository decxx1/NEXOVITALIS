/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import Title from "../components/Title";
import { colors, PX } from "../utils";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegex = /^(\+?54\s?9?\s?)?([0-9]{2,4})\s?([0-9]{6,8})$/;

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  phone: yup
    .string()
    .matches(phoneRegex, "Teléfono inválido")
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .required("El teléfono es obligatorio"),
  message: yup.string().required("La consulta es obligatoria"),
});

const contactItems = [
  {
    href: "https://www.google.com/maps/place/Av.+Perú+1579,+M5500+Ciudad,+Mendoza",
    icon: "/location.png",
    text: "Av. Perú 1579, Mendoza Ciudad",
  },
  {
    href: "tel:+5492615792500",
    icon: "/tel.png",
    text: "+54 9 261 5 79 2500",
  },
  {
    href: "mailto:adm.carimsa@gmail.com",
    icon: "/mail.png",
    text: "adm.carimsa@gmail.com",
  },
];

const openLink = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const ContactLink = ({ href, icon, text }) => (
  <Box
    component="a"
    href={href}
    sx={{
      textDecoration: "none",
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        paddingLeft: "10px",
      },
    }}
  >
    <Box component="img" src={icon} alt="icon" sx={{ width: 30, height: 30 }} />
    <Typography sx={{ color: "inherit" }}>{text}</Typography>
  </Box>
);

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      id="contacto"
      component="footer"
      sx={{
        mt: "40px",
        bgcolor: "rgb(0, 0, 112)",
        height: "fit-content",
        overflow: "hidden",
        position: "relative",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/bgFooter3.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(50px)",
          opacity: 0.7,
        }}
      />
      <Box
        sx={{
          width: {
            xs: "min(100%, 700px)",
            lg: "100%",
          },
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          alignItems: "flex-start",
          justifyContent: {
            xs: "center",
            lg: "space-between",
          },
          gap: "20px",
          position: "relative",
          zIndex: 999,
          p: { xs: PX.pxMobile, md: PX.px },
          pb: "0px !important",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          <Title
            title="Contacto"
            img="/contact.png"
            sxTitle={{ color: "white" }}
            sx={{ flexDirection: "row" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {contactItems.map((item, idx) => (
              <ContactLink key={idx} {...item} />
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <FacebookIcon
              sx={mediaStyles}
              onClick={() => openLink("https://www.facebook.com/nexovitalis/")}
            />
            <InstagramIcon
              sx={mediaStyles}
              onClick={() =>
                openLink("https://www.instagram.com/nexovitalis.mza/")
              }
            />
            <LinkedInIcon
              sx={mediaStyles}
              onClick={() => openLink("https://www.nexovitalis.com.ar")}
            />
          </Box>
        </Box>

        {/* FORMULARIO */}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: {
              xs: "100%",
              md: "600px",
            },
          }}
        >
          <Typography variant="h6" sx={{ color: "white" }}>
            Escribinos
          </Typography>

          <Box>
            <Box
              sx={inputStyles}
              component="input"
              type="text"
              placeholder="Nombre y apellido*"
              {...register("name")}
            />
            {errors.name && (
              <Typography sx={errorStyles}>{errors.name.message}</Typography>
            )}
          </Box>

          <Box>
            <Box
              sx={inputStyles}
              component="input"
              type="email"
              placeholder="Email*"
              {...register("email")}
            />
            {errors.email && (
              <Typography sx={errorStyles}>{errors.email.message}</Typography>
            )}
          </Box>

          <Box>
            <Box
              sx={inputStyles}
              component="input"
              type="text"
              placeholder="Teléfono*"
              {...register("phone")}
            />
            {errors.phone && (
              <Typography sx={errorStyles}>{errors.phone.message}</Typography>
            )}
          </Box>

          <Box>
            <Box
              sx={{ ...inputStyles, resize: "none", height: "150px" }}
              component="textarea"
              placeholder="Consulta*"
              {...register("message")}
            />
            {errors.message && (
              <Typography sx={errorStyles}>{errors.message.message}</Typography>
            )}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained">
              ENVIAR
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row-reverse",
          },
          alignItems: "center",
          justifyContent: {
            xs: "center",
            lg: "space-between",
          },
          gap: "20px",
          position: "relative",
          zIndex: 999,
          p: { xs: PX.pxMobile, md: PX.px },
          pb: "0px !important",
        }}
      >
        <Box
          component={"img"}
          src="/footerLogo.png"
          alt="logo"
          sx={{
            width: "200px",
          }}
        />
        <Typography
          variant="p"
          sx={{
            color: "white",
            fontSize: "14px",
            textAlign: {
              xs: "center",
              lg: "left",
            },
            fontWeight: 600,
            paddingRight: {
              xs: "0px",
              lg: "40px",
            },
          }}
        >
          Somos Nexovitalis, una marca registrada de CARIM SA; y brindamos
          cuidados para la salud de las personas, en ámbitos no tradicionales.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "fit-content",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          alignItems: "center",
          justifyContent: {
            xs: "center",
            lg: "space-between",
          },
          gap: "10px",
          position: "relative",
          zIndex: 999,
          p: { xs: PX.pxMobile, md: PX.px },
        }}
      >
        <Box
          component={"img"}
          src="/nautix.png"
          alt="logo"
          sx={{
            width: "70px",
          }}
        />
        <Typography
          variant="p"
          sx={{
            color: "white",
            fontSize: "12px",
            textAlign: "center",
            opacity: 0.7,
          }}
        >
          Contenidos, diseño y programación @NAUTIX 2022 / www.nautix.com.ar
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

const inputStyles = {
  width: "100%",
  height: "60px",
  borderRadius: "10px",
  border: "1px solid white",
  padding: "10px",
  fontSize: "16px",
  color: "black",
  backgroundColor: "white",
  "&:focus": {
    outline: "none",
  },
};

const mediaStyles = {
  color: "white",
  fontSize: "32px",
  cursor: "pointer",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    color: colors.secondary,
  },
};

const errorStyles = {
  color: "white",
  fontSize: "11px",
  mt: "4px",
};
