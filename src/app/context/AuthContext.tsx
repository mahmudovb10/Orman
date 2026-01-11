import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile as firebaseUpdateProfile,
  signInWithPopup,
  User as FirebaseUser,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

// Foydalanuvchi interfeysi
interface UserProfile {
  id: string;
  name: string;
  email: string | null;
  photoURL: string | null;
}

// Context ichidagi funksiyalar va holatlar turi
interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  googleLogin: () => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfile: (userData: { name?: string }) => Promise<void>;
  isAuthenticated: boolean;
}

// Context yaratish (default qiymat undefined)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged avtomatik sessiyani tekshiradi
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || "Foydalanuvchi",
            email: firebaseUser.email,
            photoURL: firebaseUser.photoURL,
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error: any) {
      console.error("Login xatosi:", error.message);
      return false;
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Ismni Firebase profilida yangilash
      await firebaseUpdateProfile(result.user, {
        displayName: name,
      });

      // State-ni darhol yangilash
      setUser({
        id: result.user.uid,
        name: name,
        email: result.user.email,
        photoURL: null,
      });
      return true;
    } catch (error: any) {
      console.error("Register xatosi:", error.message);
      return false;
    }
  };

  const googleLogin = async (): Promise<boolean> => {
    try {
      await signInWithPopup(auth, googleProvider);
      return true;
    } catch (error: any) {
      console.error("Google login xatosi:", error.message);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error: any) {
      console.error("Chiqish xatosi:", error.message);
    }
  };

  const updateProfile = async (userData: { name?: string }): Promise<void> => {
    if (auth.currentUser) {
      try {
        if (userData.name) {
          await firebaseUpdateProfile(auth.currentUser, {
            displayName: userData.name,
          });
          setUser((prev) => (prev ? { ...prev, name: userData.name! } : null));
        }
      } catch (error: any) {
        console.error("Update xatosi:", error.message);
      }
    }
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    googleLogin,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
