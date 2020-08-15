import ApiService from './apiService'

export default class UsuarioService extends ApiService {

  constructor() {
    super('/api/v1')
  }
}