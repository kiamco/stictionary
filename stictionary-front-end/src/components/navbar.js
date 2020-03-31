import React from 'react';
import { AppBar, 
    Toolbar, 
    Typography, 
    Button,
    IconButton
     } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
    const {location} = props.history
    return (
        <div className={classes.root}>

        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Stictionary
                </Typography>
                    <Button color="inherit" 
                        onClick={() => location.pathname === '/signup' ? props.history.push('/login') : props.history.push('/signup') }
                    >{location.pathname === '/signup' ? 'Login': 'Sign Up'}</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;

