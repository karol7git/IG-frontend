import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import highlights1 from "../assets/highlights1.png";
import highlights2 from "../assets/highlights2.png";
import highlights3 from "../assets/highlights3.png";
import highlights4 from "../assets/highlights4.png";
import highlights5 from "../assets/highlights5.png";
import highlights6 from "../assets/highlights6.png";
import ReactCardFlip from 'react-card-flip';


const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Rendimiento adaptable",
    description:
      "Nuestro producto se adapta perfectamente a lo que usted requiere, mejorando la eficacia y haciendo más sencillas sus labores diarias.",
    img: highlights1,
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Construido para durar",
    description:
      "Experimenta una durabilidad excepcional que perdura con una inversión a largo plazo.",
    img: highlights2,
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Gran experiencia de usuario",
    description:
      "Incorpora nuestro producto en tu rutina con una interfaz intuitiva y accesible.",
    img: highlights3,
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Funcionalidad innovadora",
    description:
      "Permanece a la vanguardia con funciones que establecen nuevos estándares, satisfaciendo tus necesidades cambiantes de manera superior a la competencia.",
    img: highlights4,
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Soporte fiable",
    description:
      "Confíe en nuestro servicio de atención al cliente receptivo, que proporciona asistencia integral más allá de la compra inicial.",
    img: highlights5,
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Precisión en cada detalle",
    description:
      "Disfruta de un producto cuidadosamente diseñado donde los pequeños detalles marcan una diferencia notable en tu experiencia general.",
    img: highlights6,
  },
];

export default function Highlights() {

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };
 
  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        bgcolor: "primary.dark",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h3" color="#d9d9d9">
            Destacados
          </Typography>
          <Typography
            color="grey.light"
            sx={{ mb: { xs: 2, sm: 4 } }}
            variant="h5"
          >
            Explora en que nos destacamos como producto único en el mercado.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ReactCardFlip
                isFlipped={flippedIndex === index}
                flipDirection="vertical"
                containerStyle={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* Front Side */}
                <Stack
                  direction="column"
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={{
                    p: 3,
                    height: "20rem",
                    background: "transparent",
                    color: "grey.400",
                    opacity: "70%",
                    cursor: "pointer",

                    position: "relative",

                    cursor: "pointer",
                    zIndex: 1,
                    backfaceVisibility: "hidden",
                  }}
                  onClick={() => handleFlip(index)}
                >
                  <Box>{item.icon}</Box>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: "text.secondary", fontWeight: 600 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "grey.400" }}>
                      {item.description}
                    </Typography>
                  </div>
                </Stack>

                {/* Back Side */}
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => handleFlip(index)}
                />
              </ReactCardFlip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
