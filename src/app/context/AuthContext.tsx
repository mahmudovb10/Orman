import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("orman_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem("orman_users") || "[]");
    const foundUser = users.find(
      (u: User & { password: string }) =>
        u.email === email && u.password === password
    );

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("orman_user", JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("orman_users") || "[]");

    // Check if user already exists
    if (users.some((u: User & { password: string }) => u.email === email)) {
      return false;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("orman_users", JSON.stringify(users));

    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem("orman_user", JSON.stringify(userWithoutPassword));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("orman_user");
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("orman_user", JSON.stringify(updatedUser));

      // Update in users list
      const users = JSON.parse(localStorage.getItem("orman_users") || "[]");
      const updatedUsers = users.map((u: User & { password: string }) =>
        u.id === user.id ? { ...u, ...userData } : u
      );
      localStorage.setItem("orman_users", JSON.stringify(updatedUsers));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateProfile,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
