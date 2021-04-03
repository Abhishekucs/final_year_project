import React from "react";

function Button(props) {
  return (
    <div className="buttonContainer">
      <div className="container_button">
        <button>Login</button>
      </div>
      <div className="container_button">
        <button>Register</button>
      </div>
    </div>
  );
}

export default Button;
