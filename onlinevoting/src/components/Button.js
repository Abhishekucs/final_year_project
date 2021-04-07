import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <button>
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}

export default Button;
