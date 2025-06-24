
export const PX = {
  px: "60px",
  pxMobile: "30px",
};

export const colors = {
  primary: "rgb(1, 12, 125)",
  secondary: "rgb(217, 64, 189)",
  tertiary: "rgb(212, 136, 64)",
  text: "rgb(1, 8, 82)",
  gradient: "linear-gradient(to right, rgb(1, 12, 125), rgb(217, 64, 189), rgb(212, 136, 64))",
  gradient2: "linear-gradient(to right, rgb(217, 64, 189), rgb(212, 136, 64))"
};

export const fontStyles = {
  hero: {
    fontSize: "clamp(30px, 5vw, 60px)",
    lineHeight: "normal",
    fontWeight: 600,
    textWrap: "balance",
    color: "white",
    textShadow: "rgba(0, 0, 0, 0.5) 0px 0px 40px;"
  },
  title: {
    fontSize: {
      xs: "24px",
      sm: "26px",
      md: "28px",
    },
    lineHeight: "normal",
    color: colors.primary,
    fontWeight: 600,
  },
  titleCard: {
    fontSize: "26px",
    lineHeight: "normal",
    color: "white",
    fontWeight: 600,
  },
  titleDropDown: {
    fontSize: "24px",
    lineHeight: "normal",
    color: colors.primary,
    fontWeight: 600,
  },
  subTitle: {
    fontSize: "20px",
    lineHeight: 1.4,
    color: colors.text,
    fontWeight: 600,
  },
  subTitleCard: {
    fontSize: {
      xs: "16px",
      md: "20px",
    },
    lineHeight: 1.4,
    color: "white",
    fontWeight: 600,
  },
  p: {
    fontSize: {
      xs: "16px",
      md: "19px",
    },
    fontWeight: 400,
    lineHeight: 1.4,
    color: colors.text,
  },
  pCard: {
    fontSize: "16px",
    letterSpacing: "0.4px",
    fontWeight: 500,
    lineHeight: 1.2,
    color: "white",
  },
  nav: {
    fontSize: "14px",
    color: colors.primary,
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: colors.secondary,
    },
  },
  navMobile: {
    fontSize: "16px",
    color: "white",
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: colors.secondary,
    },
  }
}


