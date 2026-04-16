import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import feedIcon from "../../Assets/feed.svg";
import statsIcon from "../../Assets/estatisticas.svg";
import postIcon from "../../Assets/adicionar.svg";
import logoutIcon from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  {
    /*esta constante sera utilizada para ativar o menu mobile ou desativar ele*/
  }
  const { userLogout } = React.useContext(UserContext);
  {
    /*Cria-se o contexto para a atuacao do botao SAIR, ao clicar o usuario consegue deslogar da sua conta gracas a acao userLogout adicionada ao onClick*/
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={feedIcon} alt="Minhas Fotos" />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={statsIcon} alt="Estatisticas" />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={postIcon} alt="Adicionar Foto" />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <img src={logoutIcon} alt="Sair" />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
