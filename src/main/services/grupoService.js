import ApiService from './apiService'

export default class GrupoService extends ApiService {

    constructor() {
        super('/api/v1')
    }

    findByIdCampanha(id) {
        return this.get(`/campanhas/${id}/grupos`)
    }

    save(grupo) {
        console.log(grupo);
        return this.post(`/grupos/`, grupo)
    }

}