import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from './NavBar';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  // your theme configuration
});

const useStyles = makeStyles((theme) => ({
    space1: {
        marginTop: "10px",
      },
      titleContainer: {
        width: "100%", /* Takes the full width of the screen */
      height: "260px",
      display: "flex",
      alignItems: "center",
      background: "black",
      display: 'flex',
        flexDirection: 'column',
    
      },
      title: {
        background: "black",
        cursor: "pointer",
        fontSize: "42px",
        fontWeight: "bold",
        fontFamily: "Lato, sans-serif",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "20px",
        margin: "auto",
        width: "350px",
        color: "white",
      "&:hover": {
        color: "#00EBEB",
      },
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
      head: {
        border: '1px solid #00ebeb',
        width: "300px",
        marginBottom: "20px",
        marginLeft: "10px"
    
      },
  pricingContainer: {
    background: "#ffffff",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '50px 0',
  },
  pricingPlan: {
    boxShadow: "1px 4px 8px 0 rgba(0, 0, 0, 0.6)",
    width: '300px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    background: "#f0f0f0",
    borderRadius: "20px",
  },
  planTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  planPrice: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  planFeatures: {
    fontSize: "16px",
    lineHeight: 1.5,
  },
  pricingList: {
    display: 'flex',
    flexWrap: 'wrap', // To wrap the pricing plan items if needed
    justifyContent: 'center', // Center the items horizontally
    gap: '20px',
  }
}));

const pricingPlans = [
  {
    id: 1,
    title: 'Basic Plan',
    price: '$9.99/month',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
  {
    id: 2,
    title: 'Pro Plan',
    price: '$19.99/month',
    features: [
      'All Basic features',
      'Feature 4',
      'Feature 5',
    ],
  },
  // Add more plans as needed
];

function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.fullpage}>
      <div className={classes.titleContainer}>
    <div variant="h4" className={classes.title}>Pricing Plans</div>
    <div className={classes.head}> </div>
    <div className={classes.space1}> </div>
    <div className={classes.text}>Transforming ideas into reality - our innovative feature revolutionizes the way you work</div>
  </div>
      <div className={classes.pricingContainer}>
        <div className={classes.pricingList}>
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={classes.pricingPlan}>
              <Typography variant='h5' className={classes.planTitle}>{plan.title}</Typography>
              <Typography variant='h6' className={classes.planPrice}>{plan.price}</Typography>
              <ul className={classes.planFeatures}>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
