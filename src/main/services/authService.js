import ApiService from './apiService'

class AuthService extends ApiService {

    constructor() {
        super('/api/v1')
    }

    login(loginRequest) {
        return this.post(`/auth/login`, loginRequest)
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(registerRequest) {
        return this.post(`/auth/register`, registerRequest)
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();