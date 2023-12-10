import style from '@/styles/control-panel/list-users.module.css';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react'
export default function Users() {
    const [data, setData] = useState([]);
    const [response, setResponse] = useState();
    const [alert, setAlert] = useState();
    // const [dataNascimento, setDataNascimento] = useState();
    // const [idade, setIdade] = useState();

    function deleteUser(id) {

        let confirm = prompt("Digite sim para deletar usuário, não para desistir da operação");

        confirm ? confirm.toLowerCase() : confirm;

        if (confirm === "sim" || confirm == "s") {
            axios.delete("http://localhost:8080/deletar-usuario/" + id).then(res => {
                if (res.data.error) {
                    setResponse("Error por favor tente novamente, caso persista entre em contato")
                    setAlert("alert-danger")
                } else {
                    setResponse(res.data.message)
                    setAlert("alert-success")
                }
            });
        }
    }


    useEffect(() => {
        axios.get("http://localhost:8080/usuarios").then(res => setData(res.data))
    }, [response])

    function descobrirIdade(nascimento) {
        nascimento = nascimento.split("-");
        let dataNascimento = new Date(nascimento[0], nascimento[1], nascimento[2]);
        let dataAtual = new Date();

        let diferenca = dataAtual.getTime() - dataNascimento.getTime();
        let idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
        return idade
    }

    return (
        <div className={data.length > 8 ? "container my-5" : style.footerBottom} style={data.length < 1 ? { margin: "200px 0" } : { margin: "auto" }}>
            {response && (
                <div className={"my-2 alert " + alert} role="alert">{response}</div>
            )}
            <h3>Usuários cadastrados</h3>
            <div>

                <div className={style.cards}>
                    {data && data.map((user, index) => (
                        <div className="card" key={user.id}>
                            <h5 className="card-header bg-warning">Dados do usuário: {user.id}</h5>
                            <div className="card-body">
                                <h5 className="text-primary">{user.nome}</h5>
                                <ul>
                                    <li className="list-group-item "><strong>Cidade:    </strong>{user.cidade}</li>
                                    <li className="list-group-item"><strong>Email:    </strong>{user.email}</li>
                                    <li className="list-group-item"><strong>Idade:    </strong>{descobrirIdade(user.dataNascimento)}</li>

                                </ul>

                                <button className='btn btn-warning'><Link className='nav-link' href={"painel-de-controle/edit/" + user.id}>Editar</Link></button>
                                <button className='btn btn-danger mx-1' onClick={() => deleteUser(user.id)} >Deletar</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}
