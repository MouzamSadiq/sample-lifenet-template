export type Theme = {
  colors: {
    primary: string;
    activeBg: string;
    activeText: string;
    text: string;
    border: string;
    textGray: string;
    textLight: string;
    textLightGray: string;
    errorTitle: string;
    background: string;
    ideaCardBg: string;
    fcfcfc: string;
    appBg: string;
    cardBg: string;
    iconColor: string;
    error: string;
    logoBlue: string;
    greenText: string;
  };
  center: {
    display: string;
    alignContent: string;
    alignItems: string;
    justifyContent: string;
  };
  left: {
    display: string;
    alignContent: string;
    alignItems: string;
    justifyContent: string;
  };
  leftcenter: {
    display: string;
    alignContent: string;
    alignItems: string;
    justifyContent: string;
  };

  textstyle: {
    fontSize: string;
    fontWeight: string;
    color: string;
  };
  bodystyle: {
    fontSize: string;
    fontWeight: string;
    color: string;
  };
  commentbodystyle: {
    fontSize: string;
    fontWeight: string;
    color: string;
  };
  labelstyle: {
    fontSize: string;
    fontWeight: string;
    color: string;
  };
  namestyle: {
    fontSize: string;
    fontWeight: string;
    color: string;
  };
  contactstyle: {
    fontSize: string;
    fontWeight: string;
    color: string;
  };
  headstyle: {
    fontSize: string;
    fontWeight: string;
    color: string;
  };
  boldstyle: {};
  datestyle: {};
  ideaCardIcons: { [key: string]: string | number };
  cancelstyle: {};
  showButton: {};
};

export const theme: Theme = {
  colors: {
    textLightGray: "#f7f7fa",
    textLight: "#eee",
    errorTitle: "#ff0000",
    background: "#27445C",
    // primary: "#3d5a79",
    primary: "#293e51",
    // activeBg: "#B58B00",
    activeBg: "#a2ad00",
    activeText: "#2681D6",
    text: "#333333",
    border: "#eee",
    textGray: "#666666",
    ideaCardBg: "#F7F7FA",
    fcfcfc: "#FCFCFC",
    appBg: "#FFF",
    cardBg: "#efefef",
    iconColor: "#6667",
    error: "#E47474",
    logoBlue: "#1A237E",
    greenText: "#a2ad00",
  },
  center: {
    display: "inline-flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    display: "inline-flex",
    alignContent: "left",
    alignItems: "left",
    justifyContent: "left",
  },
  leftcenter: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  textstyle: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#656565",
  },
  headstyle: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#999",
  },
  boldstyle: {
    fontSize: "16px",
    fontWeight: "bold",
    opacity: "0.8",
  },
  bodystyle: {
    fontSize: "13px",
    fontWeight: "",
    color: "grey",
  },
  commentbodystyle: {
    fontSize: "12px",
    fontWeight: "",
    color: "#656565",
  },
  datestyle: {
    fontSize: "12px",
    fontWeight: "",
    color: "#eee",
  },
  ideaCardIcons: {
    fontSize: "20px",
    color: "#666",
  },
  labelstyle: {
    fontSize: "13px",
    fontWeight: "",
    color: "#303030",
  },
  namestyle: {
    fontSize: "16px",
    fontWeight: "",
    color: "#0A0A0A",
  },
  contactstyle: {
    fontSize: "12px",
    fontWeight: "",
    color: "#656565",
  },
  cancelstyle: {
    height: "40px",
    width: "100px",
    fontSize: "18px",
    color: "black",
    borderRadius: "70px",
    background: "#B2BEB5",
    "&:hover": {
      backgroundColor: "#FFF",
    },
  },
  showButton: {
    width: "130px",
    height: "50px",
    borderRadius: "60px",
    fontSize: "12px",
    // fontWeight: "bold",
  },
};
