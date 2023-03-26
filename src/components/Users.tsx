import { useState } from "react";

interface User {
  uId: string;
  name: string;
}

export const Users = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uId: "ABC123",
      name: "Pepito Pérez",
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuario: useState</h3>
      <button onClick={() => login()} className="btn btn-outline-primary">
        Login
      </button>
      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};
