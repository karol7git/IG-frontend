import { Divider, CssBaseline } from "@mui/material";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import AppAppbar from "./components/AppAppbar";
import { useState } from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import getAppTheme from "./getAppTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App() {
  const [mode, setMode] = useState("light");
  const Apptheme = createTheme(getAppTheme(mode));
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeProvider theme={Apptheme}>
      <CssBaseline />
      <AppAppbar />
      <Home />
      <Services />
      <Divider />
      <Highlights />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="3022241027"
        chatMessage="Hola !🤝 En que te colaboramos ?"
        placeholder="Escribe un mensaje..."
        darkMode="true"
        accountName="Ingenius Capital"
        avatar="assets/logo.png"
        statusMessage="Normalmente responde en una hora"
      />
    </ThemeProvider>
  );
}
