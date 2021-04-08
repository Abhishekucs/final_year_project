import React from "react";
import registerlogo from "../assests/images/register.png";

function Register(props) {
  return (
    <div className="register_container">
      <div className="left">
        <div className="Image">
          <img src={registerlogo} alt="RegisterLogo"></img>
        </div>
        <div className="text">
          <span>
            One step away to <br />
            cast your vote 
          </span>
        </div>
      </div>
      <div className="right">
        <div className="right_container">
          <div className="form_heading">
            <span>Create</span>
            <br />
            <span>an e-Profile</span>
          </div>
          <div className="form">
            <form>
              <label>Full Name</label>
              <br />
              <input type="text"></input>
              <br />
              <label>Date of Birth</label>
              <br />
              <input type="number"></input>
              <br />
              <label>Email id</label>
              <br />
              <input type="email"></input>
              <br />
              <label>Contact Number</label>
              <br />
              <input type="number"></input>
              <br />
              <label>Aadhar Number</label>
              <br />
              <input type="number"></input>
              <br />
              <label>Set Password</label>
              <br />
              <input type="password"></input>
            </form>
            <div className="register_button">
              <button className="register_button_one">REGISTER</button>
            </div>
          </div>
          <div className="info">
            <span>Already have an account?</span>Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
