import styled from "@emotion/styled";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import theme from "../../lightTheme";

const Card = styled(Grid)(({ theme }) => ({
  backgroundColor: "#fff",
  color: theme.palette.textColor.main,
  borderRadius: 2,
  fontSize: 18,
  flexGrow: 1,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: 200,
  height: 300,
  borderRadius: 4,
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.43)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.1px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

const MovieCard = ({ movie }) => {
  const movieInfo = useRef(null);

  return (
    <Card
      onMouseEnter={() => (movieInfo.current.style.opacity = 1)}
      onMouseLeave={() => (movieInfo.current.style.opacity = 0)}
    >
      <Box
        component="img"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : `https://placehold.co/200x200?text=Missing+Image`
        }
        alt={movie.Title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.95,
          transition: "filter 0.2s",
          cursor: "pointer",
          "&:hover": {
            filter: "brightness(10%)",
          },
        }}
      />
      <Stack
        direction="column"
        maxWidth="60%"
        gap={2}
        position="absolute"
        ref={movieInfo}
        sx={{ opacity: 0, pointerEvents: "none" }}
      >
        <Typography variant="movieTitle" sx={{ color: "defaults.secondary" }}>
          {movie.Title}
        </Typography>
        <Typography variant="movieYear" sx={{ color: "defaults.secondary" }}>
          {movie.Year}
        </Typography>
      </Stack>
    </Card>
  );
};

export default MovieCard;
