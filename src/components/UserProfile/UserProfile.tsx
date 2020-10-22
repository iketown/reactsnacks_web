import React, { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthCtx";
import { Accordion, Icon } from "semantic-ui-react";

const UserProfile = () => {
  const { user } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div>
      <Accordion>
        <Accordion.Title
          active={profileOpen}
          onClick={() => setProfileOpen((o) => !o)}
        >
          <Icon name="dropdown" />
          User Profile
        </Accordion.Title>
        <Accordion.Content active={profileOpen}>
          <pre style={{ fontSize: 10 }}>{JSON.stringify(user, null, 2)}</pre>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default UserProfile;
