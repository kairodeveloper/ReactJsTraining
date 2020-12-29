import './Header.css';
import '../../globals/globalStyle.css'
import { useHistory } from 'react-router-dom';

function selectionMenuInAlunos(history) {
    let path = history.location.pathname
    return path==="/" || path==="/add-aluno"
}

function Header() {
    let history = useHistory()
    let isAlunos = selectionMenuInAlunos(history)

    return (
        <div className={"divContainerHeader"}>
            <div className={"divContainerMenu"}>
                <img className={"logoHeader"} src={"https://transmobibeneficios.com.br/wp-content/uploads/2017/08/logoTransmobi.png"} alt={"logo transmobi"} />
                <div className={"divMenuHeader"}>
                    <div className={"itemContent"}>
                        <button className={"itemMenuHeader"}>
                            <p>Login</p>
                        </button>
                        {isAlunos ? (<div />) : (<div className={"divTriangleUp"} />)}
                    </div>
                    <div className={"itemContent"}>
                        <button className={"itemMenuHeader"}>
                            <p>Alunos</p>
                        </button>
                        {isAlunos ? (<div className={"divTriangleUp"} />) : (<div />)}
                    </div>
                    {/* <button className={"itemMenuHeader"}>
                        <div className={"itemContent"}>
                            <p>Login</p>
                            {history.location.pathname === "/" ? (<div />) : (<div className={"divTriangleUp"} />)}
                        </div>
                    </button> */}
                    {/* <button className={"itemMenuHeader"}>
                        <div className={"itemContent"}>
                            <p>Alunos</p>
                            {history.location.pathname === "/" ? (<div className={"divTriangleUp"} />) : (<div />)}
                        </div>
                    </button> */}
                </div>
            </div>
            <div className={"divBaseMenu"} />
        </div>
    )
}

export default Header;