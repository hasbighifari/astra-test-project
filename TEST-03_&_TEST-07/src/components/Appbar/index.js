import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles'
import styles from './style'

const AppBars = ({ ...props }) => {
    const { classes } = props
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {props.name}
                    </Typography>
                    {/* <Button color="inherit" onClick={props.handleLogout}>Logout</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default withStyles(styles)(AppBars)
