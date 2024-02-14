import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const BuyButtonRoot = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  width: "200px",
  boxSizing: "border-box",
  fontWeight: "bold",
  borderRadius: 10,
  backgroundColor: "#00EBEB",
  fontSize: "15px",
  color: "#000000",
  transform: "none",
  transition: "background .3s, border-color .3s, color.3s",
  "&:hover": {
    background: "#9d9fa3",
  },
  fontFamily: "'Lato', sans-serif",
}));

const Buy = ({ children, onClick }) => {
  return <BuyButtonRoot onClick={onClick}>{children}</BuyButtonRoot>;
};

export default Buy;
