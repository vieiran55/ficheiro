import { useState } from "react";
import estilos from "./Contador.module.scss";
import {BiReset} from "react-icons/bi";
import {IoMdAdd} from "react-icons/io";

export default function Contador(){
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(0);
  };

  return (
    <div className={estilos.contador}>
      <h1>Series</h1>
      <p>{count}</p>
      <div>
        <button onClick={increment}><IoMdAdd /> </button>
        <button onClick={decrement}><BiReset /></button>
      </div>
    </div>
  );
}