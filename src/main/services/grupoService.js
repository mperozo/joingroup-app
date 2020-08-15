import ApiService from './apiService'

import authHeader from './auth-header';

export default class GrupoService extends ApiService {

    constructor() {
        super('/api/v1')
    }

    findByIdCampanha(id) {
        return this.get(`/campanhas/${id}/grupos`, { headers: authHeader() })
    }

    findById(id) {
        return this.get(`/grupos/${id}`, { headers: authHeader() })
    }

    save(grupo) {
        console.log(grupo);
        return this.post(`/grupos/`, grupo, { headers: authHeader() })
    }

    update(grupo) {
        return this.put(`/grupos/update/${grupo.id}`, grupo, { headers: authHeader() })
    }

    deleteById(id) {
        return this.delete(`/grupos/${id}`, { headers: authHeader() })
    }

}