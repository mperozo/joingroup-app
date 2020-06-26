import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Cartao from '../../components/cartao';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { withRouter } from 'react-router-dom'

import GrupoService from '../../main/services/grupoService'

class ConsultarGrupos extends Component {

    state = {
        idCampanha: '',
        grupos: []
    }
    
    constructor(props) {
        super(props);
        this.grupoService = new GrupoService();
        
        this.buscarGruposDaCampanha(this.props.match.params.idCampanha);
    }

    buscarGruposDaCampanha(idCampanha) {
        this.grupoService.findByIdCampanha(idCampanha)
            .then(response => {
                this.setState({ grupos: response.data })
            }).catch(error => {
                //messages.mensagemErro(error.response.data)
                console.log("Ocorreu um erro ao buscar grupos de uma campanha.");
                console.log(error.response.data);
            })
    }

    render() {
        return (
            <Grid container spacing={1} alignItems="flex-end" >
                <Grid item grupos={this.state.grupos} xs={12} container justify="center" spacing={2}>
                    {this.state.grupos.map((grupo) => (
                        <Cartao key={grupo.id}
                            titulo={"Grupo"}
                            nome={grupo.nome}
                            url={grupo.url}
                        />
                    ))}
                    <Fab aria-label="add" href={`/#cadastrar-grupos/${this.props.match.params.idCampanha}`} >
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
        );
    }
}
export default withRouter(ConsultarGrupos)