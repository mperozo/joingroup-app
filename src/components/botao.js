import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Botao(props) {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color={props.color}
                size="large"
                className={classes.button}
                startIcon={props.children}
                onClick={props.evento}
            >
                {props.label}
            </Button>
        </div>
    )
}