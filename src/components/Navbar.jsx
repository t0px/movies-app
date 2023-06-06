import styled from "@emotion/styled";
import {
  Alert,
  Box,
  Button,
  Collapse,
  FormControl,
  IconButton,
  Input,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const TopNav = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.bgColor.main,
  color: theme.palette.textColor.main,
  borderRadius: 4,
  fontSize: 18,
  background: "rgba(255, 255, 255, 0.43)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.1px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
}));

const Navbar = ({
  inputField,
  searchInput,
  setSearchInput,
  setMovies,
  movies,
  errorMsg,
  setErrorMsg,
  isDarkMode,
  setIsDarkMode
}) => {

    //Toggle dark mode ON OFF
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

  const [open, setOpen] = useState(false);

  //API INFO
  const API_URL = "http://www.omdbapi.com/?apikey=bc4ddc1&";

  //MOVIES API
  const handleAPICall = async (e) => {
    e.preventDefault();
    if (!searchInput) {
        setErrorMsg("You can't search for nothing!");
      setOpen(true);
    } else {
      setSearchInput("");
      try {
        const response = await fetch(
          `${API_URL}s=${searchInput}&t=${searchInput}&plot=full&type=${type}`
        );
        const data = await response.json();
        if (data.Search.Error) {
          console.log("error!");
        } else {
          setMovies(data.Search);
        }
      } catch (Error) {
        setErrorMsg(`No movie matching "${searchInput}".`);
        setOpen(true);
        console.log(Error);
      }
    }
    console.log(movies);
  };

    //handling filters
    const [type, setType] = useState("Movie");

    // handling select values
    const handleChangeType = (event) => {
      setType(event.target.value);
    };


  return (
    <>
      <Box>
        <TopNav
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 6, py: 2 }}
        >
          <Box>
            <Typography
              variant="navLogo"
              sx={{ cursor: "pointer" }}
              component="h1"
              onClick={() => location.reload()}
            >
              MoviesDB<span style={{fontSize: 16}}> by Roland Meir</span>
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
            onSubmit={(e) => handleAPICall(e)}
          >
            {isDarkMode ? <Brightness7Icon /> : <DarkModeIcon />}
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              color="error"
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  sx={{
                    height: 40,
                    color: "textColor.main",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Type"
                  onChange={handleChangeType}
                >
                  <MenuItem value="Movie">Movie</MenuItem>
                  <MenuItem value="Series">Series</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <InputBase
              ref={inputField}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search Movie..."
              sx={{
                height: 40,
                color: "textColor.default",
                background: "rgba(255, 255, 255, 0.43)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5.1px)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                borderRadius: 1,
                p: 0.5,
                pl: 2,
              }}
            ></InputBase>
            <Button
              type="submit"
              variant="primary"
              sx={{
                height: 40,
                color: "textColor.default",
                background: "rgba(255, 255, 255, 0.43)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5.1px)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              Find
            </Button>
          </Box>
        </TopNav>
      </Box>

      <Box
        sx={{
          position: "absolute",
          zIndex: 100,
          bottom: 50,
          right: 500,
          left: 500,
        }}
      >
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {errorMsg}
          </Alert>
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;
