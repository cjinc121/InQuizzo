import { useEffect, useState } from "react";
import { useAuth } from "../../context/authcontext";
import { Link } from "react-router-dom";
import "./AuthPage.css";
function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signupHandler } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  return (
    <div className="login-container">
      <div className="login-form">
        <h3>Sign Up</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />

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

        <button onClick={() => signupHandler(name, email, password)}>
          Continue
        </button>
        <h4>Or</h4>

        <div>
          Already a user?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="link"> LOGIN </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
