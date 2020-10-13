import React from "react";
import FirebaseAuth from "@components/FirebaseAuth";
import { useAuth } from "@contexts/auth/AuthCtx";
const Dashboard = () => {
  const { user } = useAuth();
  if (!user) return <FirebaseAuth />;
  return <div>you're in. dashboard goes here.</div>;
};

export default Dashboard;
