import React, { useState } from "react";

function AuthForm() {
  const [Login, setLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={Login ? "active" : " "}
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <button
            className={Login ? "" : "active"}
            onClick={() => setLogin(false)}
          >
            signup
          </button>
        </div>
        {Login ? (
          <div className="form">
            <h2>Login form</h2>
            <input type="Email" placeholder="Email" required />
            <input type="password" placeholder="password" required />
            <a href="#">Forget Password?</a>
            <button>Log in</button>
            <p>
              Not a member?{" "}
              <a href="signup" onClick={() => setLogin(false)}>
                Sign Up
              </a>
            </p>
          </div>
        ) : (
          <div className="form">
            <h2>SignUp form</h2>

            <input type="Email" placeholder="Email" required />

            <input type="Password" placeholder="password" required />
            <input type="Password" placeholder="Confirm Password" required />
            <button>Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
