import { makeStyles, alpha } from "@material-ui/core";

export default makeStyles((theme)=>({
    todo:{
        display:'flex',
         alignItems:'center', 
         justifyContent:'center'
    },
    wrapper:{
        fontWeight: 'bold',
        margin: theme.spacing(5,5,0,5),
        fontSize: '20px'
    },
    box:{
        maxWidth: '300px',
        maxHeight: '300px',
        minWidth: '300px',
        minHeight: '300px',
        // margin: theme.spacing(0,6.7,10,10),
        border: `3px solid ${alpha(theme.palette.primary.main, 0.8)}`,
        padding: theme.spacing(5,5,5,5),
        overflow: 'auto'
    },
    item:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: theme.spacing(0,0,5,0),
        border: `3px solid ${alpha(theme.palette.primary.main, 0.8)}`,
        borderRadius: "5px",
        padding: theme.spacing(1,1,1,1)

    },
    arrow:{
        borderRadius: "50%",
        backgroundColor: alpha(theme.palette.primary.main, 0.8),
        color: alpha(theme.palette.common.white, 1),
        margin: theme.spacing(1,0,1,1),
        fontSize: "20px",
        cursor: "pointer",
        padding:0,
        '&:hover':{
            color: alpha(theme.palette.primary.main, 0.8),
            backgroundColor: alpha(theme.palette.common.white, 0.8),
            border: `3px solid ${alpha(theme.palette.primary.main, 0.8)}`,
            fontSize: "24px"
        }
        
    },
    cancel:{
        borderRadius: "50%",
        backgroundColor: alpha(theme.palette.common.white, 0.8),
        color: alpha(theme.palette.primary.main, 0.8),
        margin: theme.spacing(0.8,0,1,1),
        fontSize: "24px",
        cursor: "pointer",
        '&:hover':{
            color: alpha(theme.palette.common.white, 0.8),
            backgroundColor: alpha(theme.palette.primary.main, 0.8),
        }
    }
}))