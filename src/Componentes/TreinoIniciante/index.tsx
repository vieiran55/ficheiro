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

export default function Home() {
  const [treinos, setTreinos] = useState<ITreinos[]>(dados);

  return (
    <>
      {/* <TableHead style={{ border: "1px solid #ddd" }}>
        <TableRow>
          <TableCell padding="none" sx={{ width: 50 }}>
            ID
          </TableCell>
          <TableCell padding="none" sx={{ width: 100, maxWidth: 300 }}>
            Titulo
          </TableCell>
          <TableCell padding="none" sx={{ width: 700 }}>
            Link
          </TableCell>
          <TableCell padding="none" sx={{ width: 300 }}>
            Foto
          </TableCell>
          <TableCell padding="none" sx={{ width: 130 }}>
            Status
          </TableCell>
          <TableCell padding="none" sx={{ width: 130 }}>
            Preço
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {treinos.map((item, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell padding="none" sx={{ width: 100, whiteSpace: "normal" }}>
              {item.exercicio}{" "}
            </TableCell>
            <TableCell padding="none" sx={{ width: 100, whiteSpace: "normal" }}>
              {item.series}{" "}
            </TableCell>
            <TableCell padding="none" sx={{ width: 100, whiteSpace: "normal" }}>
              {item.repeticoes}{" "}
            </TableCell>
            <TableCell padding="none" sx={{ width: 100, whiteSpace: "normal" }}>
              {item.rpm}{" "}
            </TableCell>
            <TableCell padding="none" sx={{ width: 100, whiteSpace: "normal" }}>
              <HiOutlineQuestionMarkCircle />
            </TableCell>
          </TableRow>
        ))}
      </TableBody> */}
      <table className={estilos.tabela}>
        <thead>
          <tr className={estilos.tabela__head}>
            <th className={estilos.tabela__head}>Exercicio</th>
            <th className={estilos.tabela__head}>Series</th>
            <th className={estilos.tabela__head}>Repeticoes</th>
            <th className={estilos.tabela__head}>Descanso</th>
            <th className={estilos.tabela__head}>Ajuda</th>
          </tr>
        </thead>
        <tbody>
          {treinos
            .map((item, index) => (
              <tr key={index} className={estilos.tabela__body}>
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
    </>
  );
}
