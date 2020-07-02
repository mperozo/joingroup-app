import React from 'react'

import Grid from '@material-ui/core/Grid';

import Cartao from '../../components/cartao';
import ConfirmationDialog from '../../components/confirmationDialog';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { withRouter } from 'react-router-dom'

import CampanhaService from '../../main/services/campanhaService'

class ConsultarCampanhas extends React.Component {

    state = {
        campanhas: [],
        //deletar campanha
        showConfirmDialog: false,
        idCampanhaADeletar: ''
    }

    constructor() {
        super();
        this.campanhaService = new CampanhaService();
    }

    componentWillMount() {
        this.buscarCampanhasDoUsuarioLogado();
    }

    buscarCampanhasDoUsuarioLogado() {
        this.campanhaService.findByIdUsuario(1)
            .then(response => {
                this.setState({ campanhas: response.data })
            }).catch(error => {
                //messages.mensagemErro(error.response.data)
                console.log("Ocorreu um erro ao buscar campanhas de um usuário.");
            })
    }

    deletarCampanha = () => {
        this.campanhaService.deleteById(this.state.idCampanhaADeletar)
            .then(response => {
                const campanhas = this.state.campanhas;
                const elementPosition = campanhas.map(function(x) {return x.id; }).indexOf(this.state.idCampanhaADeletar);
                campanhas.splice(elementPosition, 1);
                this.setState({campanhas: campanhas, showConfirmDialog: false, idCampanhaADeletar: '' })
                console.log("Campanha deletada com sucesso!");
            }).catch(error => {
                console.log("Ocorreu um erro ao deletar a campanha.");
            })
    }

    abrirDialogConfirmarExclusao = (id) => {
        this.setState({ showConfirmDialog: true, idCampanhaADeletar: id })
    }

    fecharDialogConfirmarExclusao = () => {
        this.setState({ showConfirmDialog: false, idCampanhaADeletar: '' })
    }

    render() {
        return (
            <>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item campanhas={this.state.campanhas} xs={12} container justify="center" spacing={2}>
                        {this.state.campanhas.map((campanha) => (
                            <Cartao key={campanha.id}
                                id={campanha.id}
                                titulo={"Campanha"}
                                nome={campanha.nome}
                                url={campanha.url}
                                descricao={"Grupos: " + campanha.quantidadeGrupos + "Redirecionamentos: " + campanha.quantidadeRedirecionamentos}
                                deleteAction={this.abrirDialogConfirmarExclusao}
                            >
                                <Button href={`/#consultar-grupos/${campanha.id}`} size="large">Grupos</Button>
                            </Cartao>
                        ))}
                        <Fab aria-label="add" href="#/cadastrar-campanhas" >
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
                <ConfirmationDialog
                    visible={this.state.showConfirmDialog}
                    titulo="Tem certeza que deseja excluir a campanha?"
                    texto="Todos os grupos dessa campanha também serão excluídos. Essa ação não poderá ser desfeita."
                    closeAction={this.fecharDialogConfirmarExclusao}
                    confirmAction={this.deletarCampanha}>
                </ConfirmationDialog>
            </>
        )
    }
}
export default withRouter(ConsultarCampanhas)