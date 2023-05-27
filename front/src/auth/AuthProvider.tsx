import { createContext, useContext, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { authWrapper } from "./authWrapper";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  canAccess: any;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signin = (newUser: string, cb: VoidFunction) => {
    return authWrapper.signin(() => {
      setUser(newUser);
      cb();
    });
  };

  const signout = (cb: VoidFunction) => {
    return authWrapper.signout(() => {
      setUser(null);
      cb();
    });
  };
  const canAccess = user;
  const auth = { user, signin, signout, canAccess };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  console.log(auth);
  const location = useLocation();

  if (!auth.canAccess) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
