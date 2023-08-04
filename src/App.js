import logo from './logo.svg';
import './App.css';
import CustomBtn from './CustomBtn';
import Signoutbtn from './components/signoutbtn';
import NavBar from './components/NavBar';
import withStyles from '@material-ui/core';
import ContentContainer from './components/maincontainer';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import {Typography} from '@material-ui/core';
import Middlebar from './components/middlebar';
import Bottombar from './components/bottombar';


const theme = createMuiTheme({
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
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  return (
    <div className="App">
    <ThemeProvider>
      <NavBar/>
      <ContentContainer/>
      <Middlebar />
      <Bottombar />
    </ThemeProvider>
    </div>
  );
}

export default App;
