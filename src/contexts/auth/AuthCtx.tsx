import { firebase } from "@firebase/firebaseClient";
import { setCookie } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";

// ...

interface AuthContextI {
  user: firebase.User | null;
  signOut: () => void;
  signInModalOpen: boolean;
  setSignInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const errorFxn = () => {
  throw new Error("out of context");
};

const AuthContext = createContext<AuthContextI>({
  user: null,
  signInModalOpen: false,
  signOut: errorFxn,
  setSignInModalOpen: errorFxn,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        setCookie(null, "token", "", {});
        return;
      }

      const token = await user.getIdToken(true);
      setUser(user);
      setCookie(null, "token", token, {});
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (user) {
        const token = await user.getIdToken(true);
        setCookie(null, "token", token, {});
      }
    }, 1000 * 60 * 10 /** 10 minutes */);
    return () => clearInterval(interval);
  }, []);

  const signOut = () => {
    firebase.auth().signOut();
    setCookie(null, "token", "", {});
  };

  return (
    <AuthContext.Provider
      value={{ user, signOut, signInModalOpen, setSignInModalOpen }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextI => useContext(AuthContext);
