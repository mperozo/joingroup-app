import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import stylesWrapper from './HOC/stylesWrapper'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toast = (props) => {
    console.log(2);
    console.log(this.props);
    return (
        <Alert severity="success">{this.props.teste}</Alert>
    )
}
export default stylesWrapper(Toast);

function b() {
    console.log("b");
};

export function testando() {
    console.log(1);
    return Toast()
}