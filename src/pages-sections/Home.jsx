import CustomButton from "../components/CustomButton";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
import { fontStyles, PX } from "../utils";
import "swiper/css/effect-fade";
import "swiper/css";

export const Home = () => {
  return (
    <Box
      sx={{
        mt: "80px",
        height: {
          xs: "calc(100vh - 150px)",
          md: "calc(100vh - 80px)",
        },
        position: "relative",
        maxHeight: "1000px",
        minHeight: "500px",
      }}
    >
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        allowTouchMove={false}
        style={{ width: "100%", height: "100%" }}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: "url(/hero.webp)",
              backgroundSize: "cover",
              backgroundPosition: "54% 100%",
            }}
          >
            <Box
              sx={{
                boxSizing: "border-box",
                px: { xs: PX.pxMobile, md: PX.px },
                py: { xs: "40px", md: PX.px },
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src="/dna.png"
                alt="dna"
                sx={{
                  width: "200px",
                  position: "absolute",
                  bottom: "-130px",
                  right: "70px",
                  opacity: 0.7,
                  display: { xs: "none", md: "block" },
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  ...fontStyles.hero,
                  textAlign: { xs: "center", md: "left" },
                  display: "flex",
                  flexDirection: "column",
                  textShadow: "rgb(0,0,0) 0px 0px 40px",
                }}
              >
                <span>Atención médica</span>
                <span>de la más alta calidad</span>
                <span>en la comodidad</span>
                <span>de tu hogar.</span>
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: "url(/hero1.webp)",
              backgroundSize: "cover",
              backgroundPosition: "54% 100%",
            }}
          >
            <Box
              sx={{
                boxSizing: "border-box",
                px: { xs: PX.pxMobile, md: PX.px },
                py: { xs: "40px", md: PX.px },
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src="/dna.png"
                alt="dna"
                sx={{
                  width: "200px",
                  position: "absolute",
                  bottom: "-130px",
                  right: "70px",
                  opacity: 0.7,
                  display: { xs: "none", md: "block" },
                }}
              />
              <Typography
                sx={{
                  ...fontStyles.hero,
                  textAlign: { xs: "center", md: "left" },
                  display: "flex",
                  flexDirection: "column",
                  textShadow: "rgb(0,0,0) 0px 0px 40px",
                }}
              >
                <span>Compromiso Vitalis:</span>
                <span>donde la conexión es vital,</span>
                <span>la calidad asistencial</span>
                <span>es nuestra norma.</span>
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
      <Box
        sx={{
          position: "absolute",
          bottom: "60px",
          zIndex: 99,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: PX.pxMobile, md: PX.px },
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "30px", md: "0px" },
        }}
      >
        <Box
          component="img"
          src="/cadeid.png"
          alt="cadeid"
          sx={{ width: "80px" }}
        />
        <CustomButton />
      </Box>
    </Box>
  );
};
