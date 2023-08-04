import { Button, withStyles } from '@material-ui/core'
import React from 'react'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "34px",
        width: "150px",
        boxSizing: "border-box",
        fontWeight: "bold",
        borderRadius: 10,
        background: "#00EBEB",
        fontSize: '15px',
        color: "#000000",
        transform: "none",
        transition: "background .3s, border-color .3s, color.3s" ,
        "&:hover":{
            background: "#9d9fa3"
        },
        fontFamily: "'Lato', sans-serif",
    },
    label:{
        textTransform: 'capitalize'
    },

})(Button);
function CustomBtn(props){
    return (
        <StyledButton variant='contained'>{props.txt}</StyledButton>
    )
}

export default CustomBtn
