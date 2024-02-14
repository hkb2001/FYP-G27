import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from './NavBar';
import { createTheme, ThemeProvider } from '@mui/material';
import CustomBtn from '../CustomBtn';
import Buy from './buy';


const useStyles = makeStyles((theme) => ({
    space1: {
        marginTop: "10px",
      },
      titleContainer: {
        width: "100%", /* Takes the full width of the screen */
      height: "280px",
      display: "flex",
      alignItems: "center",
      background: "black",
      display: 'flex',
        flexDirection: 'column',
    
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
        width: "120px",
        marginBottom: "20px",
        marginLeft: "7px"
    
      },
  pricingContainer: {
    background: "white",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: "10px",
    marginBottom: "!0px",
  },
  pricingPlan: {
    boxShadow: "1px 4px 8px 0 rgba(0, 0, 0, 0.6)",
    width: '320px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    background: "white",
    borderRadius: "20px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pricetitle:{
     marginTop: "10px",
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
    textAlign: 'left',
    alignContent: 'flex-start'

  },
  pricingList: {
    display: 'flex',
    flexWrap: 'wrap', // To wrap the pricing plan items if needed
    justifyContent: 'center', // Center the items horizontally
    gap: '40px',
  },
  btn: {
    marginTop: '20px',
    marginBottom: "20px"
  },
  features: {
    alignContent: 'flex-start',
  }
}));

const pricingPlans = [
  {
    id: 1,
    title: 'Basic Plan',
    price: '$9.99/month',
    features: [
      'Text Input',
      'Entity and attribute extraction.',
      'Basic ERD generation',
      'Entity recognition and labeling.',
      'Attribute extraction and assignment.',
      'Simple relationship creation.',
      'Basic diagram styling.',
      'Export ERDs in standard formats',
      
    ],
  },
  {
    id: 2,
    title: 'Pro Plan',
    price: '$19.99/month',
    features: [
        'Advanced relationships (subtype/supertype, self-referencing)',
        'Cardinality and participation indicators',
        'Recognize attribute types (numeric, string, date)',
        'Data flow annotations',
        'Export in PNG, SVG, PDF formats',
        'Integrate with popular tools and databases',
        'Customize ERD appearance',
        'Priority customer support',
      ]
      
  },
];

function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.fullpage}>
      <div className={classes.titleContainer}>
    <div variant="h4" className={classes.title}>Pricing Plans</div>
    <div className={classes.head}> </div>
    <div className={classes.space1}> </div>
    <div className={classes.text}>Tailor your experience with our flexible pricing plans, providing value and convenience to meet your specific needs and budget</div>
  </div>
      <div className={classes.pricingContainer}>
        <div className={classes.pricingList}>
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={classes.pricingPlan}>
            <div className={classes.pricetitle}>
              <div className={classes.planTitle}>{plan.title}</div>
              <div className={classes.planPrice}>{plan.price}</div>
              <div className={classes.btn}>
              <Buy>GET</Buy>
              </div>
                </div>
                <div className={classes.features}>
              <ul className={classes.planFeatures}>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              </div>
            
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
