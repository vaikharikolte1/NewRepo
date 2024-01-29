import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";
import { mockLogin, mockLogout } from "./AuthService";

interface AuthContextProps {
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = async (username: string, password: string): Promise<void> => {
    try {
      const token = await mockLogin(username, password);
      setUser(token);
    } catch (error) {
      console.error("Login failed:", (error as Error).message);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    await mockLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
