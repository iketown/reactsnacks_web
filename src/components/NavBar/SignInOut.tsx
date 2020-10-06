import { useAuth } from "@contexts/auth/AuthCtx";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const SignInOut = () => {
  const { user, signOut, setSignInModalOpen } = useAuth();
  const handleSignIn = () => {
    setSignInModalOpen(true);
  };
  return user ? (
    <Button onClick={signOut} size="tiny" inverted>
      Sign Out
    </Button>
  ) : (
    <Button onClick={handleSignIn} size="tiny" inverted>
      Sign In
    </Button>
  );
};

export default SignInOut;
