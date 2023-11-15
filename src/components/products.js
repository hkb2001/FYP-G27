import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Bottombar from "./bottombar";
import { Divider } from "@mui/material";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import { fontFamily, fontWeight } from "@mui/system";

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
    h3: {
      fontWeight: 100,
      fontSize: 26,
      lineHeight: "2rem",
      color: "black",
      fontFamily: "'Lato', sans-serif",
    },
    h4: {
      fontWeight: 100,
      fontSize: "18px",
      lineHeight: "2rem",
      color: "black",
      fontFamily: "'Lato', sans-serif",
    },
    h5: {
      fontWeight: 900,
      lineHeight: "2rem",
    },
  },

  product: {
    fontSize: "20px",
    fontFamily: "'Lato', sans-serif",
  },
});

const products = [
  {
    id: 1,
    name: "Digital Clock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Et aliquam velit sed earum voluptate ut consequatur iure et quia corporis. Ea blanditiis magnam eos distinctio consectetur et fuga tempora. Ut earum sunt est ipsum modi sed enim culpa nam laboriosam quia. Aut omnis tempora aut rerum veritatis ut incidunt nesciunt et ratione velit.",
    Image: p1,
  },
  {
    id: 2,
    name: "Database Software",
    description:
      "Praesent vel dolor non velit luctus volutpat.Lorem ipsum dolor sit amet. Et aliquam velit sed earum voluptate ut consequatur iure et quia corporis. Ea blanditiis magnam eos distinctio consectetur et fuga tempora. Ut earum sunt est ipsum modi sed enim culpa nam laboriosam quia. Aut omnis tempora aut rerum veritatis ut incidunt nesciunt et ratione velit.",
    Image: p2,
  },
  {
    id: 3,
    name: "Weather Forecast",
    description:
      "Integer at lorem ullamcorper, congue ante vel, hendrerit ex.Lorem ipsum dolor sit amet. Et aliquam velit sed earum voluptate ut consequatur iure et quia corporis. Ea blanditiis magnam eos distinctio consectetur et fuga tempora. Ut earum sunt est ipsum modi sed enim culpa nam laboriosam quia. Aut omnis tempora aut rerum veritatis ut incidunt nesciunt et ratione velit.",
    Image: p3,
  },
];

const useStyles = makeStyles((theme) => ({
  product: {
    boxShadow: "1px 4px 8px 0 rgba(0, 0, 0, 0.6)",
    // border: '3px solid #000000',
    width: "300px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    background: "#ffffff",
    borderRadius: "20px",
  },
  fullpage: {
    background: "#000000",
  },
  productContainer: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  productList: {
    background: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: "100px",
    color: "#000000",
    fontFamily: "'Lato', sans-serif",
    paddingBottom: "10px",
    paddingTop: "10px",
    fontWeight: 900,
  },
  title: {
    background: "black",

    fontSize: "42px",
    fontWeight: "bold",
    fontFamily: "Lato, sans-serif",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "30px",
    margin: "auto",
    width: "350px",
    color: "white",
  },
  productdescription: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "17px",
    lineHeight: 1.5,
  },
  space1: {
    marginTop: "10px",
  },
  titleContainer: {
    width: "100%",
    height: "280px",
    display: "flex",
    alignItems: "center",
    background: "black",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: "20px",
    fontFamily: "Lato, sans-serif",
    width: "500px",
    margin: "auto",
    textAlign: "center",
    marginBottom: "50px",
    color: "#E7EBEB",
  },
  line: {
    border: "1px solid #00ebeb",
    width: "120px",
    marginBottom: "20px",
    marginLeft: "0px",
  },
  head: {
        border: '1px solid #00ebeb',
        width: "120px",
        marginBottom: "20px",
        marginLeft: "5px"
    
      },
}));

function Products() {
  const classes = useStyles();
  return (
    <div className={classes.fullpage}>
  <div className={classes.titleContainer}>
    <div variant="h4" className={classes.title}>Our Products</div>
    <div className={classes.head}> </div>
    <div className={classes.space1}> </div>
    <div className={classes.text}>Discover and elevate your daily experiences with our premium product collection</div>
  </div>
      
      <div className={classes.productContainer}>
        <div className={classes.productList}>
          {products.map((product) => (
            <div key={product.id} className={classes.product}>
              <img
                src={product.Image}
                alt={product.name}
                style={{
                  width: "300px",
                  height: "250px",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h5" className={classes.productName}>
                {product.name}
              </Typography>
              <Typography variant="body" className={classes.productdescription}>
                {product.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
