/* eslint-disable react/prop-types */
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { fontStyles, PX } from "../utils";
import { colors } from "../utils";
import { useEffect } from "react";
import { useState } from "react";
const env = {
  instagram: import.meta.env.VITE_INSTAGRAM,
  facebook: import.meta.env.VITE_FACEBOOK,
  linkedin: import.meta.env.VITE_LINKEDIN
}
const openLink = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    if (open) {
      setOpen(false);
    }
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = ""; 
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <NavMobile
        open={open}
        setOpen={setOpen}
        scrollToSection={scrollToSection}
      />
      <Box
        sx={{
          height: "80px",
          px: { xs: PX.pxMobile, md: PX.px },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 99,
          backgroundColor: "#fff",
          transition: "transform 0.2s ease-in-out",
          transform: showNav ? "translateY(0)" : "translateY(-100%)",
          boxShadow: showNav ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <Box
          component="img"
          src="/navLogo.png"
          alt="logo"
          sx={{
            zIndex: 999,
            height: "47px",
          }}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "30px",
          }}
        >
          <Box onClick={() => scrollToSection("about")}>
            <Typography sx={fontStyles.nav}>QUÉ HACEMOS</Typography>
          </Box>
          <Box onClick={() => scrollToSection("servicios")}>
            <Typography sx={fontStyles.nav}>SERVICIOS</Typography>
          </Box>
          <Box onClick={() => scrollToSection("compromiso")}>
            <Typography sx={fontStyles.nav}>COMPROMISO</Typography>
          </Box>
          <Box onClick={() => scrollToSection("cadeid")}>
            <Typography sx={fontStyles.nav}>CADEID</Typography>
          </Box>
          <Box onClick={() => scrollToSection("contacto")}>
            <Typography sx={fontStyles.nav}>CONTACTO</Typography>
          </Box>
        </Box>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <MenuRoundedIcon
            sx={{
              color: colors.primary,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "rotate(180deg)",
              },
            }}
          />
        </IconButton>
      </Box>
    </>
  );
};

export default Nav;

const NavMobile = ({ open, setOpen, scrollToSection }) => {
  return (
    <Box
      sx={{
        zIndex: 999,
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.2s ease-in-out",
        position: "fixed",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(30px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: "20px",
          right: "30px",
        }}
        onClick={() => setOpen(false)}
      >
        <CloseRoundedIcon
          sx={{
            color: "white",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "rotate(180deg)",
            },
          }}
        />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          mb: "150px",
        }}
      >
        <Box onClick={() => scrollToSection("que-hacemos")}>
          <Typography sx={fontStyles.navMobile}>QUÉ HACEMOS</Typography>
        </Box>
        <Box onClick={() => scrollToSection("servicios")}>
          <Typography sx={fontStyles.navMobile}>SERVICIOS</Typography>
        </Box>
        <Box onClick={() => scrollToSection("compromiso")}>
          <Typography sx={fontStyles.navMobile}>COMPROMISO</Typography>
        </Box>
        <Box onClick={() => scrollToSection("cadeid")}>
          <Typography sx={fontStyles.navMobile}>CADEID</Typography>
        </Box>
        <Box onClick={() => scrollToSection("contacto")}>
          <Typography sx={fontStyles.navMobile}>CONTACTO</Typography>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            gap: "20px",
          }}
        >
          { env.facebook &&
            <FacebookIcon onClick={() => openLink(env.facebook)} sx={mediaStyles} />
          }
          { env.instagram &&
            <InstagramIcon onClick={() => openLink(env.instagram)} sx={mediaStyles} />
          }
          { env.linkedin &&
            <LinkedInIcon onClick={() => openLink(env.linkedin)} sx={mediaStyles} />
          }
        </Box>
      </Box>
    </Box>
  );
};

const mediaStyles = {
  color: "white",
  fontSize: "28px",
  textTransform: "uppercase",
  fontWeight: 600,
  cursor: "pointer",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    color: colors.secondary,
  },
};
