import React from 'react'

import ConsultarCampanhas from '../views/campanha/consultar-campanhas'
import CadastrarCampanhas from '../views/campanha/cadastrar-campanhas'

import ConsultarLeads from '../views/leads/consultar-leads'

import { Route, Switch, HashRouter } from 'react-router-dom'

export default function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/consultar-campanhas" component={ConsultarCampanhas} />
                <Route path="/cadastrar-campanhas" component={CadastrarCampanhas} />
                <Route path="/consultar-leads" component={ConsultarLeads} />
            </Switch>
        </HashRouter>
    )
}