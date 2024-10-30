"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  login as loginService,
  register as registerService,
} from "../services/AuthService";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  user: any;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      //pegar usuário atuial usando o token, se necessário
    }
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginService(email, password);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("token", data.token);
    router.push("/dashboard");
  };

  const register = async (name: string, email: string, password: string) => {
    const data = await registerService(name, email, password);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("token", data.token);
    router.push("/dashboard"); // Redirecionar após cadastro
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
