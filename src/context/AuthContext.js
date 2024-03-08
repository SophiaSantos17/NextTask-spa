// Importa os hooks e a função createContext do React
import { createContext, useContext, useState, useCallback } from 'react';

// Cria um contexto de autenticação
const AuthContext = createContext();

// Cria um provedor de autenticação que envolve a aplicação
export function AuthProvider({ children }) {
  // Estado para armazenar o token de autenticação
  const [token, setToken] = useState(null);

  // Função de login que recebe um novo token e o armazena no estado
  const login = useCallback((newToken) => {
    if (newToken) {
      setToken(newToken);
    } else {
      console.error('Login falhou. Token não fornecido.');
    }
  }, []);

  // Função de logout que limpa o token do estado
  const logout = useCallback(() => {
    setToken(null);
  }, []);

  // Retorna o provedor de contexto, passando o token, login e logout como valor
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para facilitar o acesso ao contexto de autenticação
export function useAuth() {
  return useContext(AuthContext);
}
