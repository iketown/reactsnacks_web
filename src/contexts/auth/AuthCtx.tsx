import nookies from "nookies";
import { createContext, useContext, useState, useEffect } from "react";
import { firebase } from "@firebase/firebaseClient";
// ...

interface AuthContextI {
  user: firebase.User | null;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextI>({
  user: null,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
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
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextI => useContext(AuthContext);
