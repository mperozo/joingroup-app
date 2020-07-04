import React from 'react'
import GrupoService from '../../main/services/grupoService'

import Grid from '@material-ui/core/Grid';

import CampoTexto from '../../components/campoTexto'
import Botao from '../../components/botao'
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

import * as toast from '../../components/toast'

import { withRouter } from 'react-router-dom'

class CadastrarGrupos extends React.Component {

    state = {
        id: '',
        nome: '',
        url: '',
        idCampanha: '',

        isEditarGrupo: false
    }

    constructor() {
        super();
        this.grupoService = new GrupoService();
    }

    componentDidMount() {
        const idCampanha = this.props.match.params.idCampanha;
        const id = this.props.match.params.id;
        if (idCampanha) {
            this.setState({ idCampanha });
            if (id) {
                this.carregarCamposParaEditarGrupo(id);
            }
        }
    }

    carregarCamposParaEditarGrupo(id) {
        this.grupoService
            .findById(id)
            .then(response => {
                const { id, nome, url, idCampanha } = response.data;
                this.setState({ id, nome, url, idCampanha, isEditarGrupo: true });
            })
            .catch(error => {
                console.log("Erro ao carregar grupo para edição.")
            })
    }

    salvar = () => {
        const { id, nome, url, idCampanha } = this.state;
        const grupo = { id, nome, url, idCampanha }

        if (this.state.isEditarGrupo) {
            this.grupoService.update(grupo)
                .then(response => {
                    this.props.history.push(`/consultar-grupos/${this.state.idCampanha}`)
                    console.log("Grupo editado com sucesso: " + grupo.nome);
                }).catch(error => {
                    console.log("Erro ao tentar editar grupo: " + error.response ? error.response.data : error.response);
                });
        } else {
            this.grupoService.save(grupo)
                .then(response => {
                    this.props.history.push(`/consultar-grupos/${this.state.idCampanha}`)
                    console.log("Grupo cadastrado com sucesso: " + grupo.nome);
                }).catch(error => {
                    console.log("Erro ao tentar cadastrar grupo: " + error.response ? error.response.data : error.response);
                });
        }

    }

    render() {
        return (
            <div>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <CampoTexto
                            id={this.state.id}
                            label="Nome *"
                            helperText="Nome do Grupo. Ex: 'Grupo 1'"
                            value={this.state.nome}
                            evento={e => this.setState({ nome: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <CampoTexto
                            id={this.state.id}
                            label="URL *"
                            helperText="URL de convite do grupo."
                            value={this.state.url}
                            evento={e => this.setState({ url: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <Botao label="Salvar"
                            color="primary"
                            evento={this.salvar}>
                            <SaveIcon />
                        </Botao>
                    </Grid>
                    <Grid item>
                        <Botao label="Cancelar"
                            color="secundary"
                            evento={e => this.props.history.push(`/consultar-grupos/${this.props.match.params.idCampanha}`)} >
                            <ClearIcon />
                        </Botao>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withRouter(CadastrarGrupos)