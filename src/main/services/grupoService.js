import ApiService from './apiService'

export default class GrupoService extends ApiService {

    constructor() {
        super('/api/v1')
    }

    findByIdCampanha(id) {
        return this.get(`/campanhas/${id}/grupos`)
    }

    findById(id) {
        return this.get(`/grupos/${id}`)
    }

    save(grupo) {
        console.log(grupo);
        return this.post(`/grupos/`, grupo)
    }

    update(grupo) {
        return this.put(`/grupos/update/${grupo.id}`, grupo)
    }

    deleteById(id) {
        return this.delete(`/grupos/${id}`)
    }

}