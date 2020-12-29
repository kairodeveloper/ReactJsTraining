import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

//import logo from './logo.svg';
import './Main.css';
import '../../globals/globalStyle.css'

function Main() {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  const history = useHistory()
  let alunosObjects = localStorage.getItem("alunos")
  
  if (alunosObjects==null) {
    alunosObjects = []
  } else {
    alunosObjects = JSON.parse(alunosObjects)
    console.log(alunosObjects[0].nome)
  }

  const [alunos, ] = useState(alunosObjects);
      
  const goToAddAluno = (history) => {
    history.push("/add-aluno", { idProp: alunos.length+1 })
  }

  return (
      <div className={"divMain"}>
        <div className={"titleDiv"}>
          <p>Existem atualmente {alunos.length} alunos(as) na lista.</p>
        </div>
        <div className={"divContainerList"}>
          {alunos.map((it) => {
            return (
              <div className={"AlunoItem"}>
                <p>{it.nome} - {it.idade}</p>
              </div>
            )
          })}
        </div>
        <div className={"divForButton"}>
          <button className={"greenButton buttonNovoAluno"} onClick={() => {
            goToAddAluno(history)
          }}>
            <p className={"pLink"}>+ Add Aluno</p>
          </button>
        </div>
      </div>
  );
}

export default Main;
