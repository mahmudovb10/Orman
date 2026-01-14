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
  signInWithRedirect,
  getRedirectResult,
  User as FirebaseUser,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

interface UserProfile {
  id: string;
  name: string;
  email: string | null;
  photoURL: string | null;
  phone?: string;
  address?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  googleLogin: () => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfile: (userData: {
    name?: string;
    phone?: string;
    address?: string;
  }) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mobil qurilmalarda redirect natijasini ushlab olish
    getRedirectResult(auth).catch((error) => {
      console.error("Redirect login xatosi:", error.message);
    });

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const savedProfile = localStorage.getItem("userProfile");
        if (savedProfile) {
          setUser(JSON.parse(savedProfile));
        } else {
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || "Foydalanuvchi",
            email: firebaseUser.email,
            photoURL: firebaseUser.photoURL,
          });
        }
      } else {
        setUser(null);
        localStorage.removeItem("userProfile");
      }
      setLoading(false);
    });

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
      await firebaseUpdateProfile(result.user, { displayName: name });
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
      // Mobil qurilmani aniqlash
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // Telefonda redirect usuli (pop-up bloklanishini oldini oladi)
        await signInWithRedirect(auth, googleProvider);
      } else {
        // Kompyuterda pop-up usuli
        await signInWithPopup(auth, googleProvider);
      }
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
      localStorage.removeItem("userProfile");
    } catch (error: any) {
      console.error("Chiqish xatosi:", error.message);
    }
  };

  const updateProfile = async (userData: {
    name?: string;
    phone?: string;
    address?: string;
  }): Promise<void> => {
    if (!auth.currentUser) return;
    try {
      if (userData.name) {
        await firebaseUpdateProfile(auth.currentUser, {
          displayName: userData.name,
        });
      }
      await auth.currentUser.reload();
      const updatedUser: UserProfile = {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName || "Foydalanuvchi",
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
        phone: userData.phone,
        address: userData.address,
      };
      setUser(updatedUser);
      localStorage.setItem("userProfile", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Profilni yangilashda xatolik:", error);
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
