import React from 'react'
import { Button, withStyles } from '@material-ui/core'

var StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "34px",
        width: "150px",
        boxSizing: "border-box",
        fontSize: '15px',
        borderRadius: 10,
        background: "#ffffff",
        color: "#000000",
        transform: "none",
        fontWeight: "bold",
        fontFamily: "'Lato', sans-serif",
        transition: "background .3s, border-color .3s, color.3s" ,
        "&:hover":{
            background: "#20A4A4"
        },
    },
    label:{
        textTransform: 'capitalize'
    },

})(Button);

function Signoutbtn(props) {
    return (
        <StyledButton variant='contained'>{props.txt}</StyledButton>    
    )
}

export default Signoutbtn
