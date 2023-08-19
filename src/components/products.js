import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from './NavBar';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Bottombar from './bottombar';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';


import { fontFamily, fontWeight } from '@mui/system';

const theme = createTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Lato'
      ],
      h3: {
        fontWeight: 100,
        fontSize: 26,
        lineHeight: '2rem',
        color: "black",
        fontFamily: "'Lato', sans-serif",
        },
        h4: {
          fontWeight: 100,
          fontSize: "18px",
          lineHeight: '2rem',
          color: "black",
          fontFamily: "'Lato', sans-serif",
          },
      h5: {
        fontWeight: 900,
        lineHeight: '2rem',
      },
    },

    product: {
        fontSize: "20px",
        fontFamily: "'Lato', sans-serif",

    }
  });

const products = [
  {
    id: 1,
    name: 'Digital Clock',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Et aliquam velit sed earum voluptate ut consequatur iure et quia corporis. Ea blanditiis magnam eos distinctio consectetur et fuga tempora. Ut earum sunt est ipsum modi sed enim culpa nam laboriosam quia. Aut omnis tempora aut rerum veritatis ut incidunt nesciunt et ratione velit.',
    Image: p1
  },
  {
    id: 2,
    name: 'Database Software',
    description: 'Praesent vel dolor non velit luctus volutpat.Lorem ipsum dolor sit amet. Et aliquam velit sed earum voluptate ut consequatur iure et quia corporis. Ea blanditiis magnam eos distinctio consectetur et fuga tempora. Ut earum sunt est ipsum modi sed enim culpa nam laboriosam quia. Aut omnis tempora aut rerum veritatis ut incidunt nesciunt et ratione velit.',
    Image: p2
  },
  {
    id: 3,
    name: 'Weather Forecast',
    description: 'Integer at lorem ullamcorper, congue ante vel, hendrerit ex.Lorem ipsum dolor sit amet. Et aliquam velit sed earum voluptate ut consequatur iure et quia corporis. Ea blanditiis magnam eos distinctio consectetur et fuga tempora. Ut earum sunt est ipsum modi sed enim culpa nam laboriosam quia. Aut omnis tempora aut rerum veritatis ut incidunt nesciunt et ratione velit.',
    Image: p3
  },
];

const useStyles = makeStyles((theme) => ({
  product: {
    border: '5px solid #00EBEB',
    width: '300px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    background: "#ffffff",
    borderRadius: "20px"

  },
  fullpage: {
      background: "#000000"
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  productList: {
    background: "black",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  productName: {
    fontSize: "100px",
    color : "#000000",
    fontFamily: "'Lato', sans-serif",
    paddingBottom: "10px",
    paddingTop: "10px",
    fontWeight: 900,

  },
  title: {
  cursor: "pointer",
  color: "#ffffff"  ,
  paddingBottom: "50px",
  paddingTop: "50px",
  fontWeight: "bold",
  fontFamily: "'Lato', sans-serif",
  "&:hover": {
    color: "#00EBEB",
  },
  },
  productdescription: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "17px",
    lineHeight: 1.5,
  }

}));

function Products() {
  const classes = useStyles();
  return (
    <div className={classes.fullpage}>
      <NavBar />
      <div className={classes.productContainer}>
        <Typography variant="h4" className={classes.title}>Our Products</Typography>
        <div className={classes.productList}>
          {products.map((product) => (
            <div key={product.id} className={classes.product}>
            <img
                src={product.Image}
                alt={product.name}
                style={{ width: "300px", height: "250px", borderRadius: "20px", objectFit: "cover" }}
              /> 
              <Typography variant= 'h5' className={classes.productName}>{product.name}</Typography>
              <Typography variant='body' className={classes.productdescription}>{product.description}</Typography>
            </div>
          ))}
        </div>
      </div>
      <Bottombar />
    </div>
  );
}

export default Products;
