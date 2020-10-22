import FirebaseAuth from "@components/FirebaseAuth";
import { useAuth } from "@contexts/auth/AuthCtx";
import React, { useState } from "react";
import { Modal } from "semantic-ui-react";

const SignInModal = () => {
  const {
    signInModalOpen,
    setSignInModalOpen,
    modalContent,
    forwardTo,
  } = useAuth();
  return (
    <Modal
      basic
      open={signInModalOpen}
      onClose={() => setSignInModalOpen(false)}
      size="small"
    >
      <Modal.Content>
        <div
          style={{
            textAlign: "center",
            background: "#000000a3",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
          {modalContent}
        </div>
        <FirebaseAuth />
      </Modal.Content>
    </Modal>
  );
};

export default SignInModal;
