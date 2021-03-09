import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Loader from '../Loader/Loader'
import style from './style'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        system: state.system
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}


const LoginRegister = ({ ...props }) => {
    const { classes } = props
    const {  system } = props
    return (
        <div className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item lg={7} className={classes.quoteWrapper}>
                    <div className={classes.quote}>
                        <div className={classes.quoteInner}>
                            <Typography variant='h1' className={classes.quoteText}>
                                Welcome to the test 1
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.content} item lg={5} xs={12}>
                    {system.serviceStart ? <Loader /> : ''}
                    <div className={classes.content}>
                        <div className={classes.contentBody}>
                            {props.children}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(LoginRegister))
