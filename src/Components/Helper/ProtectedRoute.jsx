import React from "react";
import UserContext from "../../UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);

  return login ? children : <Navigate to="/login" />;
  {
    /*Basicamente o ProtectedRote ira mostrar dois cenarios se o Login for verdadeiro e o usuario estiver LoginPasswordLost, ira mostrar a conta do usuario, mas caso o mesmo nao estiver logado a pagina de conta ao ser chamada direciona o usuario diretamente para a pagina de login*/
  }
};

export default ProtectedRoute;
