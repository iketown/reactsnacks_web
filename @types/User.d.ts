interface User {
  id: string;
  email: string;
  token: string;
}

interface UserContextI {
  userProfile: UserProfile | null;
  mySnacks: MySnacks | null;
}

interface UserProfile {
  avatarUrl?:string;
  username?:string;
}

interface MySnacks {
  [id: string]: {
    completed: number;
    snackSlug: string;
  };
}
