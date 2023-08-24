import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "30px",
  width: "140px",
  boxSizing: "border-box",
  fontSize: "15px",
  borderRadius: 10,
  background: "#ffffff",
  color: "#000000",
  transform: "none",
  fontWeight: "bold",
  fontFamily: "'Lato', sans-serif",
  transition: "background .3s, border-color .3s, color.3s",
  "&:hover": {
    background: "#20A4A4",
  },
}));

const Signoutbtn = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children} </StyledButton>;
};

export default Signoutbtn;
