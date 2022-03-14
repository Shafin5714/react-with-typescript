import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  // Type of user can be null or AuthUser
  const [user, setUser] = useState<AuthUser | null>(null);

  // Type Assertion (when you are sure that the state will not be empty)
  //   const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "shafin",
      email: "shafin@example.com",
    });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <p>User name is {user?.name}</p>
      <button onClick={handleLogin}> Click Here</button>
    </div>
  );
}
