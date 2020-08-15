import ApiService from './apiService'

import authHeader from './auth-header';

import ErroValidacao from '../exceptions/erroValidacao'

export default class CampanhaService extends ApiService {

    constructor() {
        super('/api/v1')
    }

    findByIdUsuario(id) {
        return this.get(`/usuarios/${id}/campanhas`, { headers: authHeader() })
    }

    findById(id) {
        return this.get(`/campanhas/${id}`, { headers: authHeader() })
    }

    deleteById(id) {
        return this.delete(`/campanhas/${id}`, { headers: authHeader() })
    }

    save(campanha) {
        return this.post(`/campanhas/`, campanha, { headers: authHeader() })
    }

    update(campanha) {
        return this.put(`/campanhas/update/${campanha.id}`, campanha, { headers: authHeader() })
    }

    validar(campanha) {
        const erros = [];

        if(!campanha.nome) {
            erros.push("Nome é obrigatório");
        }

        if(!campanha.empresa) {
            erros.push("Empresa é obrigatória");
        }

        if(!campanha.link) {
            erros.push("Link é obrigatório");
        }

        if(!campanha.url) {
            erros.push("Url é obrigatória");
        }

        if(erros && erros.length > 0) {
            throw new ErroValidacao(erros)
        }
    }
}