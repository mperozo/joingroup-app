import React from 'react'

import ConsultarCampanhas from '../views/campanha/consultar-campanhas'
import CadastrarCampanhas from '../views/campanha/cadastrar-campanhas'

import ConsultarGrupos from '../views/grupo/consultar-grupos'
import CadastrarGrupos from '../views/grupo/cadastrar-grupos'

import ConsultarLeads from '../views/leads/consultar-leads'

import { Route, Switch, HashRouter } from 'react-router-dom'

export default function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/consultar-campanhas" component={ConsultarCampanhas} />
                <Route path="/cadastrar-campanhas" component={CadastrarCampanhas} />
                <Route path="/consultar-leads" component={ConsultarLeads} />
                <Route path="/consultar-grupos/:idCampanha" component={ConsultarGrupos} />
                <Route path="/cadastrar-grupos/:idCampanha" component={CadastrarGrupos} />
            </Switch>
        </HashRouter>
    )
}