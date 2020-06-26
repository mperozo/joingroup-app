import React from 'react'

import Grid from '@material-ui/core/Grid';

import Cartao from '../../components/cartao';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { withRouter } from 'react-router-dom'

import CampanhaService from '../../main/services/campanhaService'

class ConsultarCampanhas extends React.Component {

    state = {
        campanhas: []
    }

    constructor() {
        super();
        this.campanhaService = new CampanhaService();

        this.buscarCampanhasDoUsuarioLogado();
    }

    buscarCampanhasDoUsuarioLogado() {
        this.campanhaService.findByIdUsuario(1)
            .then(response => {
                this.setState({ campanhas: response.data })
            }).catch(error => {
                //messages.mensagemErro(error.response.data)
                console.log("Ocorreu um erro ao buscar campanhas de um usuário.");
                console.log(error.response.data);
            })
    }

    render() {
        return (
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item campanhas={this.state.campanhas} xs={12} container justify="center" spacing={2}>
                    {this.state.campanhas.map((campanha) => (
                        <Cartao key={campanha.id}
                            titulo={"Campanha"}
                            nome={campanha.nome}
                            url={campanha.url}
                            descricao={"Grupos: " + campanha.quantidadeGrupos + "Redirecionamentos: " + campanha.quantidadeRedirecionamentos}
                        >
                            <Button href={`/#consultar-grupos/${campanha.id}`} size="large">Grupos</Button>
                        </Cartao>
                    ))}
                    <Fab aria-label="add" href="#/cadastrar-campanhas" >
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
        )
    }
}
export default withRouter(ConsultarCampanhas)