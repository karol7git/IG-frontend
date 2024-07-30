import {
    Box,
    Button,
    Container,
    Link,
    Stack,
    Typography,
    Fab,
  } from "@mui/material";
  import { alpha, useTheme } from "@mui/material/styles";
  import ilustration from "../assets/ilustration2.png";
  import azure from "../assets/azure.png";
  import excel from "../assets/excel.png";
  import powerbi from "../assets/powerbi.png";
  import python from "../assets/python.png";
  import react from "../assets/react.png";
  import django from "../assets/django.png";
  
  const logos = [
    { label: "Azure", imageUrl: azure },
    { label: "Excel", imageUrl: excel },
    { label: "Power BI", imageUrl: powerbi },
    { label: "Python", imageUrl: python },
    { label: "React", imageUrl: react },
    { label: "Django", imageUrl: django },
  ];
  const Home = () => {
    const theme = useTheme();
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          pt: { xs: 10, md: 0 },
          pb: { xs: 10, md: 0 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(2rem,9vw, 3rem)",
              color: "primary.dark",
            }}
          >
            Automatiza tus &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(2rem,9vw, 3rem)",
                color: "primary.main",
              }}
            >
              Procesos
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
            variant="h5"
          >
            Potencia el rendimiento de tu empresa.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Button variant="contained">Inicia ya</Button>
          </Stack>
          <Typography variant="caption" textAlign="center" color="text.secondary">
            Al dar click en &quot;Inicia ya&quot; usted acepta&nbsp;
            <Link href="#" color="primary">
              Nuestros terminos y condiciones
            </Link>
            .
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            useFlexGap
            sx={{
              color: "text.secondary",
            }}
          >
            {logos.map((logo, index) => (
              <Fab
                key={index}
                sx={{
                  backgroundImage: `url(${logo.imageUrl})`,
                  backgroundSize: "cover",
                  width: 34,
                  height: 30,
                  "&:hover": {
                    boxShadow:
                      theme.palette.mode === "light"
                        ? `0 0 16px 10px ${alpha("#9CCCFC", 0.3)}`
                        : `0 0 32px 16px ${alpha("#033363", 0.3)}`,
                  },
                }}
                color="primary"
                aria-label={logo.label}
              >
                <img
                  src={logo.imageUrl}
                  alt={logo.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Fab>
            ))}
          </Stack>
        </Stack>
  
        <Box
          sx={(theme) => ({
            mt: { xs: 8, md: 6 },
            alignSelf: "center",
            height: { md: 400, xs: 200, sm: 700 },
            width: "100%",
            backgroundImage: `url(${ilustration})`,
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        />
      </Container>
    );
  };
  export default Home;
  