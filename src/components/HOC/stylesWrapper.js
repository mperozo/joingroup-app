import React from 'react'

import commonStyles from '../styles/commonStyles'

const funcaoTeste = (props) => {
    
    const newProps = { teste : 'teste'};
    
    return newProps;
}

export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(funcaoTeste(args))
    }
}
