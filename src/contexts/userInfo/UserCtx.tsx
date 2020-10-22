import { useAuth } from "@contexts/auth/AuthCtx";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import useSWR from "swr";
import { firebase } from "@firebase/firebaseClient";

const axiosFetcher = (url) => axios.get(url).then(({ data }) => data);

export const UserContext = createContext<UserContextI>({
  userProfile: null,
  mySnacks: null,
});
export const UserCtxProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState<UserProfile>(null);
  const [mySnacks, setMySnacks] = useState<MySnacks>(null);
  const dashboardUrl = `/api/dashboard`;
  const { data, error } = useSWR<{
    mySnacks: MySnacks;
    userProfile: UserProfile;
  }>(dashboardUrl, axiosFetcher);
  useEffect(() => {
    if (data) {
      const { mySnacks: _mySnacks, userProfile: _userProfile } = data;
      if (_mySnacks) setMySnacks(_mySnacks);
      if (_userProfile) setUserProfile(_userProfile);
    }
    console.log({ data, error });
  }, [data]);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setUserProfile(null);
        setMySnacks(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ userProfile, mySnacks }} {...{ children }} />
  );
};
export const useUserCtx = (): UserContextI => useContext(UserContext);
