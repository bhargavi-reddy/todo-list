import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    title:{
        margin: theme.spacing(5,10,10,10),
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px'
          },
    },
    box:{
        display:"flex",
        width:"100%",
        height:"80",
        alignItems:"center",
        justifyContent:"center"
    },
    add:{
        border: `1px solid ${alpha(theme.palette.common.black, 0.5)}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
        textAlign: 'center',
        margin: theme.spacing(0,2,0,0),
    },
    button:{
        backgroundColor: theme.palette.primary.light
    },
    inputRoot: {
        color: 'inherit',
      },
    inputInput:{
        padding: theme.spacing(1,1,1,1)
    }
}))