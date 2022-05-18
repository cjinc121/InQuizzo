import { useEffect } from "react";
import { useAuth } from "../../context/authcontext";
import { updateUserScore } from "../../services/authCalls";
import "./AuthPage.css";
const Profile = () => {
  const { signoutHandler, authState, authDispatch } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  return (
    <div className="login-container">
      <div className="login-form">
        <h3>BingeIT</h3>

        <h4>Name: {authState.userName}</h4>

        <p>Score: {authState.score}</p>
        <button onClick={() => signoutHandler()}>Sign Out</button>
        <button
          onClick={() => {
            authDispatch({ type: "UPDATE_SCORE", payload: 0 });
            (async () => {
              await updateUserScore(0);
            })();
          }}
        >
          Reset Score
        </button>
      </div>
    </div>
  );
};
export { Profile };
