import Contador from "../Componentes/Contador";
import Cronomentro from "../Componentes/Cronometro";
import TreinoIniciante from "../Componentes/TreinoIniciante";
import estilos from "./Home.module.scss";

export default function Home(){
  return(
    <>
      <div className={estilos.home}>
        <h1 className={estilos.home__titulo}>Vamos Treinar Goxtosa!</h1>
        <div><TreinoIniciante /></div>
        <div className={estilos.home__ferramentas}>
          <div><Cronomentro /></div>
          <div><Contador /></div>
        </div>
      </div>
    </>
  );
}