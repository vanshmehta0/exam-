import React, { useContext } from "react";
import UserContext from "./UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>User: {user}</p>
    </div>
  );
}

export default GrandChild;