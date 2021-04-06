import React, { useEffect, useState } from "react";

function Button(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="buttonContainer">
      <div className="container_button">
        <button onClick={() => alert(data)}>Login</button>
      </div>
      <div className="container_button">
        <button>Register</button>
      </div>
    </div>
  );
}

export default Button;
