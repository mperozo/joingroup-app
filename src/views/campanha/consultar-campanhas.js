import React from 'react'

import Button from '@material-ui/core/Button';

import Grade from '../../components/grade'
import Cartao from '../../components/cartao';

import { withRouter } from 'react-router-dom'

class ConsultarCampanhas extends React.Component {

    state = {
        campanhas: [
            {
                id: 1,
                nome: "Teste1",
                url: "www.campanha1.com.br",
                quantidadeGrupos: 3,
                quantidadeRedirecionamentos: 250
            },
            {
                id: 2,
                nome: "Teste2",
                url: "www.campanha2.com.br",
                quantidadeGrupos: 5,
                quantidadeRedirecionamentos: 220
            }
        ]
    }

    render() {
        return (
            <Grade campanhas={this.state.campanhas}>
                {this.state.campanhas.map((campanha) => (
                    <Cartao key={campanha.id}
                        titulo={"Campanha"}
                        nome={campanha.nome}
                        url={campanha.url}
                        descricao={"Grupos: " + campanha.quantidadeGrupos + "Redirecionamentos: " + campanha.quantidadeRedirecionamentos}
                    >
                        <Button size="medium">Grupos</Button>
                    </Cartao>
                ))}
            </Grade>
        )
    }
}
export default withRouter(ConsultarCampanhas)