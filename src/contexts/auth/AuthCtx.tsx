import nookies from "nookies";
import { createContext, useContext, useState, useEffect } from "react";
import { firebase } from "@firebase/firebaseClient";
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
    console.log("running auth effect");

    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
    });
  }, []);

  const signOut = () => {
    console.log("signing out");
    firebase.auth().signOut();
    nookies.destroy(undefined, "token");
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
