/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import Title from "../components/Title";
import { colors, PX } from "../utils";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";



const env = {
  phone: import.meta.env.VITE_PHONE,
  phoneFormat: import.meta.env.VITE_PHONE_FORMAT,
  email: import.meta.env.VITE_EMAIL,
  mapUrl: import.meta.env.VITE_MAPURL,
  address: import.meta.env.VITE_ADDRESS,
  instagram: import.meta.env.VITE_INSTAGRAM,
  facebook: import.meta.env.VITE_FACEBOOK,
  linkedin: import.meta.env.VITE_LINKEDIN,
  endpoint: import.meta.env.VITE_ENDPOINT,
}

const contactItems = [
  {
    href: env.mapUrl,
    icon: "/location.png",
    text: env.address,
  },
  {
    href: `tel:${env.phoneFormat}`,
    icon: "/tel.png",
    text: env.phone,
  },
  {
    href: `mailto:${env.email}`,
    icon: "/mail.png",
    text: env.email,
  },
];


const openLink = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const ContactLink = ({ href, icon, text }) => (
  <Box
    component="a"
    href={href}
    target="_blank"
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
    {text}
  </Box>
);

const Footer = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
      if (!executeRecaptcha) {
        toast.error("No se encontró el reCAPTCHA, actualice la página");
        //console.error("Execute recaptcha not yet available");
        return;
      }
      
      // Ejecutar reCAPTCHA y obtener token
      const token = await executeRecaptcha("submit_form");
      
      // Preparar los datos según el formato requerido por el endpoint
      const formData = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        secret_key: import.meta.env.VITE_SECRET_KEY,
        token: token,
        addressee: env.email, // Email de la página web
        asunto: `Contacto desde la web - de: ${data.name}`
      };
      
      // Enviar datos del formulario junto con el token de reCAPTCHA
      axios.post(env.endpoint, formData)
      .then(function (response) {
        //console.log(response)
        if (response.data.success) {
          toast.success("Gracias por consultar, te responderemos a la brevedad");
          reset();
        }
      })
      .catch(function (error) {
        //console.error(error.response.data)
        if (error.response.data.errors) {
          const formErrors = error.response.data.errors;
          for (const field in formErrors) {
            if (Object.prototype.hasOwnProperty.call(formErrors, field)) {
              toast.warning(formErrors[field]);
              break;
            }
          }
        }else if(error.response.data.message){
          toast.error(error.message)
        }
      })
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
            { env.facebook && (
              <FacebookIcon
                sx={mediaStyles}
                onClick={() => openLink(env.facebook)}
              />
            )}
            { env.instagram && (
              <InstagramIcon
                sx={mediaStyles}
                onClick={() =>
                  openLink(env.instagram)
                }
              />
            )}
            { env.linkedin && (
              <LinkedInIcon
                sx={mediaStyles}
                onClick={() => openLink(env.linkedin)}
              />
            )}
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
          </Box>

          <Box>
            <Box
              sx={inputStyles}
              component="input"
              type="email"
              placeholder="Email*"
              {...register("email")}
            />
          </Box>

          <Box>
            <Box
              sx={inputStyles}
              component="input"
              type="text"
              placeholder="Teléfono*"
              {...register("phone")}
            />
          </Box>

          <Box>
            <Box
              sx={{ ...inputStyles, resize: "none", height: "150px" }}
              component="textarea"
              placeholder="Consulta*"
              {...register("message")}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button 
              type="submit" 
              variant="contained"
            >
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
