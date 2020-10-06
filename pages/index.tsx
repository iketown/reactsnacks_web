import useSWR from "swr";
import Link from "next/link";
// import { useUser } from '../utils/auth/useUser'
import { useAuth } from "@contexts/auth/AuthCtx";
import { Button } from "semantic-ui-react";

const Index = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{" "}
          <Link href={"/auth"}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    );
  }
  console.log("user", user);
  return (
    <div>
      hey hi
      <Button onClick={signOut}>sign out</Button>
    </div>
  );
};

export default Index;
