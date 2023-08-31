import estilos from "./TreinoIniciante.module.scss";
import dados from "../../dados/iniciante.json";
import { ITreinos } from "../../interfaces/ITreinos";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import  movimentoImagem  from "../../assets/images/move.png";

export default function Home() {
  const [treinos, setTreinos] = useState<ITreinos[]>(dados);

  return (
    <div className={estilos.conteiner}>
      <div className={estilos.movimentoImagem}>
      </div>
      <table className={estilos.tabela}>
        <thead>
          <tr className={estilos.tabela__head}>
            <th className={estilos.tabela__head}>Exerc</th>
            <th className={estilos.tabela__head}>Series</th>
            <th className={estilos.tabela__head}>Rep</th>
            <th className={estilos.tabela__head}>Desc</th>
            <th className={estilos.tabela__head}>Ajuda</th>
          </tr>
        </thead>
        <tbody>
          {treinos
            .map((item, index) => (
              <tr key={index} className={estilos.tabela__linhas}>
                <td className={estilos.tabela__body}>{item.exercicio}</td>
                <td className={estilos.tabela__body__pessoas}>
                  {item.series}
                </td>
                <td className={estilos.tabela__body}>{item.repeticoes}</td>
                <td className={estilos.tabela__body}>{item.descanso}</td>
                <td className={estilos.tabela__body}><Link to={item.link}><HiOutlineQuestionMarkCircle /></Link></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
