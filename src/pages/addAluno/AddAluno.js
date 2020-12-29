import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import logo from './logo.svg';
import './AddAluno.css';
import '../../globals/globalStyle.css'

import image1 from '../../images/icons/icon_back_return.png'

function AddAluno() {
    // Declare uma nova variável de state, a qual chamaremos de "count"
    let historyData = useHistory()
    let idProp = historyData.location.state.idProp
    
    const [id, ] = useState(idProp)
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [sexo, setSexo] = useState("M")
    
    const setNomeApply = (e) => {
        setNome(e.target.value)
    }
    const setIdadeApply = (e) => {
        setIdade(e.target.value, 10)
    }
    const setSexoApply = (e) => {
        setSexo(e.target.value)
    }

    const sendAlunoBack = () => {
        let objReturn = {
            id: id,
            nome: nome,
            idade: idade,
            sexo: sexo
        }

        let listAlunos = JSON.parse(localStorage.getItem("alunos"))
        listAlunos.push(objReturn)
        localStorage.setItem("alunos", JSON.stringify(listAlunos))
        
        historyData.goBack()
    }
    
    return (
        <div>
            <div className={"titleDiv titleDivMode"}>
                <button className={"buttonBackTransparent"} onClick={() => historyData.goBack()}>
                    <img src={image1} alt={"icon back"} />
                    <p>voltar</p>
                </button>
                <p>Adicione um novo aluno a lista.</p>
                <div className={"spaceAtSide"} />
            </div>
            <div className={"containerFormDiv"}>
                <div className={"formDiv"}>
                    <input className={"formItem"} onChange={setNomeApply} type="text" name="name_aluno" placeholder="Digite o nome do(a) aluno(a)" />
                    <br />
                    <br />
                    <input className={"formItem"} onChange={setIdadeApply} type="number" name="age_aluno" placeholder="Digite a idade do(a) aluno(a)" />
                    <br />
                    <br />
                    <label for="genders">Selecione o sexo do aluno:</label>
                    <select className={"formItemSelector"} onChange={setSexoApply} name="genders" id="gender_aluno" form="alunoform">
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                    <br />
                    <br />
                    <button className={"greenButton"} onClick={sendAlunoBack}>Salvar</button>
                </div>
            </div>
        </div>
    );
}

export default AddAluno;
