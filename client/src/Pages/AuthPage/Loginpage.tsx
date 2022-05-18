import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import "./AuthPage.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginHandler } = useAuth();

  const guestemail = "aman@gmail.com";
  const guestpassword = "123456";

  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  return (
    <div className="login-container">
      <div className="login-form">
        <h3>Login</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="Password"
        />

        <button onClick={() => loginHandler(email, password)}>Continue</button>
        <h4>Or</h4>
        <button
          onClick={() => loginHandler(guestemail, guestpassword)}
          className="guest-login-btn"
        >
          Guest Login
        </button>
        <div>
          New to Website?{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span className="link"> SIGN UP </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export { LoginPage };
