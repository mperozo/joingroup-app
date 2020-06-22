import React from 'react'
import CampanhaService from '../../main/services/campanhaService'

import CampoTexto from '../../components/campoTexto'
import Botao from '../../components/botao'
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

import { withRouter } from 'react-router-dom'

class CadastrarCampanhas extends React.Component {

    state = {
        nome: '',
        empresa: '',
        link: '',
        groupClickLimit: '',
        telefoneSuporte: '',
        endUrl: '',
    }

    constructor() {
        super();
        this.campanhaService = new CampanhaService();
    }

    salvar = () => {

        const { nome, empresa, link, groupClickLimit, telefoneSuporte, endUrl } = this.state;
        const campanha = { nome, empresa, link, groupClickLimit, telefoneSuporte, endUrl }

        this.campanhaService.save(campanha)
            .then(response => {
                console.log("Cadastrado com sucesso!");
            }).catch(error => {
                console.log("erro!");
            });

    }

    render() {
        return (
            <div>
                <CampoTexto
                    label="Nome *"
                    helperText="Nome da Campanha. Ex: 'Promoção de Verão 2020'"
                    value={this.state.nome}
                    evento={e => this.setState({ nome: e.target.value })}
                />
                <CampoTexto
                    label="Empresa *"
                    helperText="Nome da Empresa. Ex: 'Joingroup'"
                    value={this.state.empresa}
                    evento={e => this.setState({ empresa: e.target.value })}
                />
                <CampoTexto
                    label="Link *"
                    helperText="Link que será utilizado para gerar a URL. Ex: 'campanha-verao-2020'"
                    value={this.state.link}
                    evento={e => this.setState({ link: e.target.value })}
                />
                <CampoTexto
                    label="Group Click Limit *"
                    helperText="Limite de redirecionamentos por grupo."
                    value={this.state.groupClickLimit}
                    evento={e => this.setState({ groupClickLimit: e.target.value })}
                />
                <CampoTexto
                    label="Telefone Suporte *"
                    helperText="Telefone de suporte ao usuário."
                    value={this.state.telefoneSuporte}
                    evento={e => this.setState({ telefoneSuporte: e.target.value })}
                />
                <CampoTexto
                    label="End URL *"
                    helperText="Caminho para onde o usuário será direcionado caso a campanha esteja indisponível. Ex: 'www.joingroup.com'"
                    value={this.state.endUrl}
                    evento={e => this.setState({ endUrl: e.target.value })}
                />
                <Botao label="Salvar"
                    color="primary"
                    evento={this.salvar}>
                    <SaveIcon />
                </Botao>
                <Botao label="Cancelar"
                    color="secundary"
                    evento={e => this.props.history.push('/consultar-campanhas')} >
                    <ClearIcon />
                </Botao>
            </div>
        )
    }
}
export default withRouter(CadastrarCampanhas)