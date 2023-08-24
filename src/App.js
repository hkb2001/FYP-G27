import "./App.css";
import NavBar from "./components/NavBar";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";

import About from "./components/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Features from "./components/Features";

import Bottombar from "./components/bottombar";

import Products from "./components/products";
import Pricing from "./components/pricing";
import Sidebar from "./components/sidebar";

import SignUp from "./components/SignUp";
import Login from "./components/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Lato"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="about" element={<About />} />
            <Route path="features" element={<Features />} />
            <Route path="products" element={<Products />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="sidebar" element={<Sidebar />} />
            {/* <ContentContainer/>
      <Middlebar />
      <Bottombar /> */}

            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="sidebar" element={<Sidebar />} />
          </Routes>
          <Bottombar />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
