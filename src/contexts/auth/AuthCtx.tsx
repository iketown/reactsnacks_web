import { firebase } from "@firebase/firebaseClient";
import cookie from "js-cookie";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

// ...

interface ForwardTo {
  href: string | null;
  as: string | null;
}

interface AuthContextI {
  user: firebase.User | null;
  signOut: () => void;
  signInModalOpen: boolean;
  setSignInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateFBCookie: (user: any) => void;
  setModalContent: React.Dispatch<React.SetStateAction<JSX.Element>>;
  modalContent: JSX.Element;
  forwardTo: ForwardTo;
  setForwardTo: React.Dispatch<React.SetStateAction<ForwardTo>>;
}

const errorFxn = () => {
  throw new Error("out of context");
};

const AuthContext = createContext<AuthContextI>({
  user: null,
  signInModalOpen: false,
  signOut: errorFxn,
  setSignInModalOpen: errorFxn,
  updateFBCookie: errorFxn,
  modalContent: null,
  setModalContent: errorFxn,
  forwardTo: { href: null, as: null },
  setForwardTo: errorFxn,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element>(null);
  const [forwardTo, setForwardTo] = useState<ForwardTo>({
    href: null,
    as: null,
  });
  const updateFBCookie = useCallback(async (fbUser: firebase.User) => {
    if (fbUser) {
      const token = await fbUser.getIdToken();
      cookie.set("token", token, { expires: 1 });
      setUser(fbUser);
    } else {
      cookie.remove("token");
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateFBCookie(user);
    }, 1000 * 60 * 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateFBCookie(user);
    return firebase.auth().onIdTokenChanged(updateFBCookie);
  }, [user]);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(updateFBCookie);
  }, []);
  const signOut = () => {
    firebase.auth().signOut();
    setUser(null);
    cookie.remove("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signOut,
        signInModalOpen,
        setSignInModalOpen,
        updateFBCookie,
        modalContent,
        setModalContent,
        forwardTo,
        setForwardTo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextI => useContext(AuthContext);
