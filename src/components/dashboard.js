import React from "react";
import { makeStyles } from "@mui/styles";
import help from "../assets/help.JPG"
import Sidebar from "./sidebar";
import add from '../assets/add.JPG'
import { NavLink } from "react-router-dom";
 
const styles = makeStyles((theme) => ({
    
    fullpage:{
        display: "flex",
        maxWidth: "100%",
        overflow: "hidden",
        justifyContent: "flex-start"
    },
    container:{
        backgroundColor: "white",
        width: "1200px",
        overflow: "hidden",
    },
    projectstext:{
        color: "black",
        justifyContent: "flex-start",
        fontSize: "28px",
        fontWeight: 900,
        fontFamily: 'Lato, sans-serif',
        textAlign: "center",
        marginInlineStart: "40px",
        marginTop: "40px"
    },
    bluebox:{
        border: '1px solid #ffffff',
        height: "180px",
        backgroundColor: "#00ebeb",
        width: "240px",
        marginInlineStart: "30px",
        marginTop: "50px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        cursor: "pointer",
        "&:hover": {
            color: "#ffffff",
            border: '1px solid #00ebeb',
          },
    },
    addimg:{
        height: "40px",
        width: "40px",
        marginTop: "20px"
    },

    boxtext:{
        fontSize: "20px",
        fontWeight: 900,
        fontFamily: 'Lato, sans-serif',
        marginTop: "20px"
    },

    imgcontainer:{
        width: "240px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center" ,
    },

    whitebox:{
        border: '1px solid #ffffff',
        boxShadow: "0px 4px 8px 0 rgba(0, 0, 0, 0.3)",
        height: "180px",
        backgroundColor: "#ffffff",
        width: "240px",
        marginInlineStart: "20px",
        color: "black",
        marginTop: "50px",
        borderRadius: "20px",
        color: "black",
        display: "flex",
        // justifyContent: "center",
        // alignContent: "center"
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        "&:hover": {
            color: "#00EBEB",
            border: '1px solid #ffffff',
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.6)",
          },
    },
    newtext:{
        fontSize: "20px",
        fontWeight: 900,
        fontFamily: 'Lato, sans-serif',
        
    },
    projects:{
        display: "flex",
        flexDirection: "row"
    },
    lin:{
        textDecoration: 'none',
        color:'black'
      }
        
    }));


function Dashboard() {
    const classes = styles()
    return (
     <div className={classes.fullpage} >
        <Sidebar />
            <div className={classes.container} >
                <div className={classes.projectstext}>Your Projects</div>
                    <div className={classes.projects}>
                    <div className={classes.bluebox}>
                        <div className={classes.imgcontainer}>
                            <img className={classes.addimg} src={add} alt="" />
                        </div>
                        <NavLink className={classes.lin} activeClassName="active">
                        <div className={classes.boxtext}>
                           
                            New Project</div>
                            </NavLink>
                </div>
                <NavLink className={classes.lin} to="/query" activeClassName="active">
               <div className={classes.whitebox}>
                        <div className={classes.newtext}>ERD Generator</div>
                </div>
</NavLink>
                <div className={classes.whitebox}>
                        <div className={classes.newtext}>School Management</div>
                </div>
                <div className={classes.whitebox}>
                        <div className={classes.newtext}>College Management</div>
                </div>
                    </div>
                   
            </div>    
     </div>    
    )
}

export default Dashboard
