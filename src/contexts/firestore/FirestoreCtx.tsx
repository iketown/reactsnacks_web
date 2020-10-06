import { createContext, useContext } from "react";

import { firebase, db } from "../../firebase/firebaseClient";

type FBCtxType = {
  db: firebase.firestore.Firestore | null;
  firebase: typeof firebase;
};
const FBCtx = createContext<Partial<FBCtxType>>({});

export const FirebaseCtxProvider: React.FC = ({ children }) => {
  return <FBCtx.Provider value={{ firebase, db }} {...{ children }} />;
};

export const useFirebaseCtx = () => useContext(FBCtx);
