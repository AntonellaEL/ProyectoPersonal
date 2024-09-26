import { ref } from "vue";
import { defineStore } from "pinia";
import AuthService from "@/core/api/auth/AuthService";
import Credentials from "@/core/models/Credentials";

export const useAuthStore = defineStore('auth', () => {
    const user = ref({
        username: '',
        isAuthenticated: false
    });

    async function login(username, password) {
        const credentials = new Credentials(username, password);
        const service = new AuthService(credentials);
        const response = await service.login();

        if (response.isAuthenticated) {
            user.value.username = username;
            user.value.isAuthenticated = true;
        } else {
            user.value.isAuthenticated = false;
        }

        return response; 
    }

    return { user, login };
});
