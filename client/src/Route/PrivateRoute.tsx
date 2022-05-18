// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/authcontext";

// const PrivateRoute = ({
//   navigateTo,
// }: {
//   navigateTo: JSX.Element;
// }): JSX.Element => {
//   const { authState } = useAuth();
//   console.log(authState.userId);
//   return authState.userId === "" ? (
//     <Navigate replace to="/login"></Navigate>
//   ) : (
//     navigateTo
//   );
// };
// export { PrivateRoute };

import { Navigate } from "react-router-dom";
import { Children } from "../services/types";

export function PrivateRoute({ children }: Children) {
  const session: { userId: string } = JSON.parse(
    localStorage.getItem("session")!
  );
  return session?.userId ? children : <Navigate replace to="/login" />;
}
