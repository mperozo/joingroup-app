import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textFieldBig: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100ch',
    },
    textFieldMedium: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '50ch',
    },
    textFieldSmall: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

export default function CampoTexto(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                label={props.label}
                id="outlined-margin-normal"
                defaultValue=""
                className={classes.textFieldBig}
                helperText={props.helperText}
                margin="normal"
                variant="outlined"
                onChange={props.evento}
            />
        </div>
    )
}