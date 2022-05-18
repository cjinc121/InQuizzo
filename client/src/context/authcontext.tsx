import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authInitialState, authReducer } from "../reducer/authReducer";
import { loadUser, login, signout, signup } from "../services/authCalls";
import { AuthContextType, Children } from "../services/types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: Children) => {
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  async function loginHandler(email: string, password: string) {
    const data = await login(email, password);
    if (data!.success) {
      authDispatch({ type: "CREATE_SESSION", payload: data!.user });
      navigate("/");
    }
  }
  async function signupHandler(name: string, email: string, password: string) {
    const data = await signup({ name, email, password });
    if (data!.success) {
      authDispatch({ type: "CREATE_SESSION", payload: data!.user });
      navigate("/login");
    }
  }

  async function signoutHandler() {
    await signout();
    authDispatch({ type: "END_SESSION" });
    navigate("/");
  }

  useEffect(() => {
    (async () => {
      const session: { userId: string } = JSON.parse(
        localStorage.getItem("session")!
      );

      if (session?.userId) {
        const userData = await loadUser();

        if (userData!.success === false) {
          authDispatch({ type: "END_SESSION" });
          navigate("/login");
        } else authDispatch({ type: "START_SESSION", payload: userData!.user });
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authDispatch,
        authState,
        loginHandler,
        signupHandler,
        signoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider, useAuth };
