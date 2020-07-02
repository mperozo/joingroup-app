import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Cartao from '../../components/cartao';
import ConfirmationDialog from '../../components/confirmationDialog';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { withRouter } from 'react-router-dom'

import GrupoService from '../../main/services/grupoService'

class ConsultarGrupos extends Component {

    state = {
        idCampanha: '',
        grupos: [],
        //deletar campanha
        showConfirmDialog: false,
        idGrupoADeletar: ''
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

    deletarGrupo = () => {
        this.grupoService.deleteById(this.state.idGrupoADeletar)
            .then(response => {
                const grupos = this.state.grupos;
                const elementPosition = grupos.map(function (x) { return x.id; }).indexOf(this.state.idGrupoADeletar);
                grupos.splice(elementPosition, 1);
                this.setState({ grupos: grupos, showConfirmDialog: false, idGrupoADeletar: '' })
                console.log("Grupo deletado com sucesso!");
            }).catch(error => {
                console.log("Ocorreu um erro ao deletar o grupo.");
            })
    }

    abrirDialogConfirmarExclusao = (id) => {
        this.setState({ showConfirmDialog: true, idGrupoADeletar: id })
    }

    fecharDialogConfirmarExclusao = () => {
        this.setState({ showConfirmDialog: false, idGrupoADeletar: '' })
    }

    render() {
        return (
            <>
                <Grid container spacing={1} alignItems="flex-end" >
                    <Grid item grupos={this.state.grupos} xs={12} container justify="center" spacing={2}>
                        {this.state.grupos.map((grupo) => (
                            <Cartao key={grupo.id}
                                id={grupo.id}
                                titulo={"Grupo"}
                                nome={grupo.nome}
                                url={grupo.url}
                                deleteAction={this.abrirDialogConfirmarExclusao}
                            />
                        ))}
                        <Fab aria-label="add" href={`/#cadastrar-grupos/${this.props.match.params.idCampanha}`} >
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
                <ConfirmationDialog
                    visible={this.state.showConfirmDialog}
                    titulo="Tem certeza que deseja excluir o grupo?"
                    texto="Essa ação não poderá ser desfeita."
                    closeAction={this.fecharDialogConfirmarExclusao}
                    confirmAction={this.deletarGrupo}>
                </ConfirmationDialog>
            </>
        );
    }
}
export default withRouter(ConsultarGrupos)