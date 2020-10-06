import FirebaseAuth from "@components/FirebaseAuth";
import { useAuth } from "@contexts/auth/AuthCtx";
import React, { useState } from "react";
import { Modal } from "semantic-ui-react";

const SignInModal = () => {
  const { signInModalOpen, setSignInModalOpen } = useAuth();
  return (
    <Modal
      basic
      open={signInModalOpen}
      onClose={() => setSignInModalOpen(false)}
      size="small"
    >
      <Modal.Content>
        <FirebaseAuth />
      </Modal.Content>
    </Modal>
  );
};

export default SignInModal;
