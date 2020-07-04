import React from 'react'
import CampanhaService from '../../main/services/campanhaService'

import Grid from '@material-ui/core/Grid';

import CampoTexto from '../../components/campoTexto'
import Botao from '../../components/botao'
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

import * as toast from '../../components/toast'

import { withRouter } from 'react-router-dom'

class CadastrarCampanhas extends React.Component {

    state = {
        id: '',
        nome: '',
        empresa: '',
        link: '',
        groupClickLimit: '',
        telefoneSuporte: '',
        endUrl: '',
        tipoRedirect: 'DIRETO',

        isEditarCampanha: false
    }

    constructor() {
        super();
        this.campanhaService = new CampanhaService();
        this.setState({ nome: 'teste3' })
    }

    componentDidMount() {
        const params = this.props.match.params;
        if (params.id) {
            this.carregarCamposParaEditarCampanha(params.id);
        }
    }

    carregarCamposParaEditarCampanha(idCampanha) {
        this.campanhaService
            .findById(idCampanha)
            .then(response => {
                const { id, nome, empresa, link, groupClickLimit, telefoneSuporte, endUrl, tipoRedirect } = response.data;
                this.setState({ id, nome, empresa, link, groupClickLimit, telefoneSuporte, endUrl, tipoRedirect, isEditarCampanha: true });
            })
            .catch(error => {
                console.log("Erro ao carregar campanha para edição.")
            })
    }

    salvar = () => {
        const { id, nome, empresa, link, groupClickLimit, telefoneSuporte, endUrl, tipoRedirect } = this.state;
        const campanha = { id, nome, empresa, link, groupClickLimit, telefoneSuporte, endUrl, tipoRedirect }

        if (this.state.isEditarCampanha) {
            this.campanhaService.update(campanha)
                .then(response => {
                    this.props.history.push('/consultar-campanhas')
                    console.log("Campanha editada com sucesso: " + campanha.nome);
                }).catch(error => {
                    console.log("Erro ao tentar cadastrar campanha: " + error.response ? error.response.data : error.response);
                });
        } else {
            this.campanhaService.save(campanha)
                .then(response => {
                    this.props.history.push('/consultar-campanhas')
                    console.log("Campanha cadastrada com sucesso: " + campanha.nome);
                }).catch(error => {
                    console.log("Erro ao tentar cadastrar campanha: " + error.response ? error.response.data : error.response);
                });
        }
    }

    render() {
        return (
            <div>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <CampoTexto
                            label="Nome *"
                            helperText="Nome da Campanha. Ex: 'Promoção de Verão 2020'"
                            value={this.state.nome}
                            evento={e => this.setState({ nome: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <CampoTexto
                            label="Empresa *"
                            helperText="Nome da Empresa. Ex: 'Joingroup'"
                            value={this.state.empresa}
                            evento={e => this.setState({ empresa: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <CampoTexto
                            label="Link *"
                            helperText="Link que será utilizado para gerar a URL. Ex: 'campanha-verao-2020'"
                            value={this.state.link}
                            evento={e => this.setState({ link: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <CampoTexto
                            label="Group Click Limit *"
                            helperText="Limite de redirecionamentos por grupo."
                            value={this.state.groupClickLimit}
                            evento={e => this.setState({ groupClickLimit: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <CampoTexto
                            label="Telefone Suporte *"
                            helperText="Telefone de suporte ao usuário."
                            value={this.state.telefoneSuporte}
                            evento={e => this.setState({ telefoneSuporte: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <CampoTexto
                            label="End URL *"
                            helperText="Caminho para onde o usuário será direcionado caso a campanha esteja indisponível. Ex: 'www.joingroup.com'"
                            value={this.state.endUrl}
                            evento={e => this.setState({ endUrl: e.target.value })}
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
                            evento={e => this.props.history.push('/consultar-campanhas')} >
                            <ClearIcon />
                        </Botao>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withRouter(CadastrarCampanhas)