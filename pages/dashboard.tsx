import React from "react";
import { firebaseAdmin } from "../src/firebase/firebaseAdmin";
import nookies from "nookies";
import { Container, Grid } from "semantic-ui-react";
import FirebaseAuth from "@components/FirebaseAuth";
import { useAuth } from "@contexts/auth/AuthCtx";
const Dashboard = () => {
  const { user } = useAuth();
  if (!user) return <FirebaseAuth />;
  return <div>you're in</div>;
};

export default Dashboard;
