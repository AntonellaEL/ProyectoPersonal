import axios from "axios";

export default class AuthRepository {
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_ENDPOINT;
    }

    async login(credentials) {
        try {
            const response = await axios.get(this.baseUrl + '/login', {
                auth: {
                    username: credentials.getUsername(),
                    password: credentials.getPassword() 
                },
                withCredentials: true
            });

            return response.data; 
        } catch (error) {
            if (error.response && error.response.status === 401) {
                return { success: false, message: 'Credenciales incorrectas' }; 
            } else {
                return error.toJSON();
            }
        }
    }
}
