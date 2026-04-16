import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import feedIcon from "../../Assets/feed.svg";
import statsIcon from "../../Assets/estatisticas.svg";
import postIcon from "../../Assets/adicionar.svg";
import logoutIcon from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  {
    /*Cria-se o contexto para a atuacao do botao SAIR, ao clicar o usuario consegue deslogar da sua conta gracas a acao userLogout adicionada ao onClick*/
  }
  const mobile = useMedia("(max-width: 40rem)");
  {
    /*esta constante sera utilizada para ativar o menu mobile ou desativar ele*/
  }
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} /*para conseguir passar mais de uma classe em um mesmo atributo utiliza-se o metodo de string literal `${}`*/
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}
      >
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
    </>
  );
};

export default UserHeaderNav;
