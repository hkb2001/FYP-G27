import './App.css';
import CustomBtn from './CustomBtn';
import Signoutbtn from './components/signoutbtn';
import NavBar from './components/NavBar';
import {withStyles,makeStyles} from '@mui/styles';
import ContentContainer from './components/maincontainer';
import { createTheme, ThemeProvider } from '@mui/material';

import {Typography} from '@mui/material';
import Middlebar from './components/middlebar';
import Bottombar from './components/bottombar';
import About from './components/About';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Layout from './layout';


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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/about' element={<About/>}/>
      
      
      {/* <ContentContainer/>
      <Middlebar />
      <Bottombar /> */}
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
