import { create } from "zustand";

interface AuthState {
    token: string | null;
    userId: number | null;
    login: (token: string, userId: number) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    userId: null,

    login: (token, userId) => {
        localStorage.setItem("token", token);
        set({ token, userId });
    },

    logout: () => {
        localStorage.removeItem("token");
        set({ token: null, userId: null });
    },
}));
