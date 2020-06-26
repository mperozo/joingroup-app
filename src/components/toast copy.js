import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Toast(tipo, mensagem) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity={tipo}>{mensagem}</Alert>
            </Snackbar>
        </div>
    );
}

export function mensagemErro(mensagem) {
    Toast('error', mensagem);
}

export function mensagemSucesso(mensagem) {
    Toast('success', mensagem);
}

export function mensagemAlerta(mensagem) {
    Toast('warning', mensagem);
}

export function mensagemInformacao(mensagem) {
    Toast('info', mensagem);
}