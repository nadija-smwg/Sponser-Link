import { useState } from "react";
import useAddUser from "../userMutation";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const addUser = useAddUser();

  const handleSubmit = (e) => {
    e.preventDefault(); // moved here

    if (!email || !password) return;

    addUser.mutate(
      { email, password },
      {
        onSuccess: () => console.log("User created!"),
        onError: (err) => console.log("Error:", err.message),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Create User</button>
    </form>
  );
}
