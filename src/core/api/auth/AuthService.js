import AuthRepository from './AuthRepository';

export default class AuthService {
    #repo;
    #credentials;

    constructor(credentials) {
        this.#repo = new AuthRepository();
        this.#credentials = credentials;
    }

    async login() {
        const response = await this.#repo.login(this.#credentials);

        if (response.success === false) {
            return { isAuthenticated: false, message: response.message };
        }

        return { isAuthenticated: true, ...response };
    }
}
