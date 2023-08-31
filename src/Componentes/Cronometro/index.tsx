import { useEffect, useState } from "react";
import {BiPauseCircle} from "react-icons/bi";
import {VscPlay} from "react-icons/vsc";
import {BiReset} from "react-icons/bi";
import estilos from "./Cronometro.module.scss";



// Definindo um componente funcional chamado Cronometro
export default function Cronometro() {
  // Definindo estados para minutos, segundos, milissegundos e para controle de execução do cronômetro
  const [minutes, setMinutes] = useState(0); // Estado para os minutos
  const [seconds, setSeconds] = useState(0); // Estado para os segundos
  const [milliseconds, setMilliseconds] = useState(0); // Estado para os milissegundos
  const [running, setRunning] = useState(false); // Estado para controlar se o cronômetro está em execução ou não

  // Efeito colateral que será executado quando certas dependências (running, milliseconds, seconds, minutes) mudarem
  useEffect(() => {
    let interval : any;

    // Se o cronômetro estiver em execução, cria um intervalo que atualiza os estados a cada milissegundo
    if (running) {
      interval = setInterval(() => {
        // Verifica se os milissegundos atingiram 999
        if (milliseconds === 999) {
          setMilliseconds(0); // Reseta os milissegundos

          // Verifica se os segundos atingiram 59
          if (seconds === 59) {
            setSeconds(0); // Reseta os segundos
            setMinutes(minutes + 1); // Incrementa os minutos
          } else {
            setSeconds(seconds + 1); // Incrementa os segundos
          }
        } else {
          setMilliseconds(milliseconds + 1); // Incrementa os milissegundos
        }
      }, 1); // Executa a cada milissegundo
    } else {
      clearInterval(interval); // Caso contrário, limpa o intervalo (pausa o cronômetro)
    }

    // Função de limpeza que é chamada quando o componente é desmontado ou quando as dependências mudam
    return () => clearInterval(interval);
  }, [running, milliseconds, seconds, minutes]);

  // Função para alternar entre iniciar/pausar o cronômetro
  const toggleRunning = () => {
    setRunning(!running);
  };

  // Função para resetar o cronômetro
  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
    setRunning(false);
  };

  // Renderização do componente
  return (
    <div className={estilos.cronometro}>
      <h1>Cronômetro</h1>
      <div>
        {/* Exibe os minutos, segundos e milissegundos formatados com zeros à esquerda */}
        <span>{String(minutes).padStart(2, "0")}:</span>
        <span>{String(seconds).padStart(2, "0")}:</span>
        <span>{String(milliseconds).padStart(3, "0")}</span>
      </div>
      <div>
        {/* Botão para iniciar/pausar o cronômetro, exibindo ícone de pausa ou play dependendo do estado */}
        <button onClick={toggleRunning}>{running ? <BiPauseCircle /> : <VscPlay />}</button>
        {/* Botão para resetar o cronômetro, exibindo ícone de reset */}
        <button onClick={resetTimer}><BiReset /></button>
      </div>
    </div>
  );
}