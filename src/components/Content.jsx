import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MovieCard from "./MovieCard";
import { useEffect, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Feed = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.bgColor.main,
  color: theme.palette.textColor.main,
  borderRadius: 4,
  fontSize: 18,
  background: "rgba(255, 255, 255, 0.43)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.1px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
}));

const Content = ({ movies, timeline, ease, setMovies, errorMsg, setErrorMsg }) => {

    const cardsContainer = useRef(null);
    useEffect(() => {
        if( movies.length > 0) {
        timeline.from(cardsContainer.current.children, 2, {
          y: 2400,
          skewY: 40,
          ease: ease,
          stagger: {
            amount: 1,
          },
        });
        }

    }, [setMovies, movies])

    return (
      <Box mt={4} flexGrow={1} sx={{ height: "100%" }}>
        <Feed
          ref={cardsContainer}
          container
          sx={{
            height: "100%",
            px: 6,
            py: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          gap={4}
        >
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
          <Typography sx={{ display: movies.length > 0 ? "none" : "block" }}>
            Results will show here.
          </Typography>
        </Feed>
      </Box>
    );
}
 
export default Content;