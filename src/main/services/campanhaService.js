import ApiService from './apiService'

import ErroValidacao from '../exceptions/erroValidacao'

export default class CampanhaService extends ApiService {

    constructor() {
        super('/api/v1')
    }

    findByIdUsuario(id) {
        return this.get(`/usuarios/${id}/campanhas`)
    }

    findById(id) {
        return this.get(`/campanhas/${id}`)
    }

    deleteById(id) {
        return this.delete(`/campanhas/${id}`)
    }

    save(campanha) {
        return this.post(`/campanhas/`, campanha)
    }

    update(campanha) {
        return this.put(`/campanhas/update/${campanha.id}`, campanha)
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