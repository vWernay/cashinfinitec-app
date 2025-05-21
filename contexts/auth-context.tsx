import { createContext, useContext, useState, useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

type User = {
    email: string;
};

type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, phone: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            const userData = await AsyncStorage.getItem("@user");
            if (userData) {
                setUser(JSON.parse(userData));
            }
            setIsLoading(false);
        };
        loadUser();
    }, []);

    const login = async (email: string, password: string) => {
        const fakeUser = { email };
        await AsyncStorage.setItem("@user", JSON.stringify(fakeUser));
        setUser(fakeUser);
        router.replace("/");

        Toast.show({
            type: 'success',
            text1: 'Autenticação realizada com sucesso',
            text2: 'Seja bem-vindo(a) de volta! 👋'
        });
    };

    const register = async (email: string, phone: string, password: string) => {
        const fakeUser = { email };
        await AsyncStorage.setItem("@user", JSON.stringify(fakeUser));
        setUser(fakeUser);
        router.replace("/");

        Toast.show({
            type: 'success',
            text1: 'Autenticação realizada com sucesso',
            text2: 'Seja bem-vindo(a)! 👋'
        });
    };

    const logout = async () => {
        await AsyncStorage.removeItem("@user");
        setUser(null);
        router.replace("/auth");

        Toast.show({
            type: 'success',
            text1: 'Logout realizado com sucesso',
            text2: 'Até logo! 👋'
        });
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};
