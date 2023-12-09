import style from '@/styles/control-panel/list-users.module.css';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react'
export default function Users() {
    const [data, setData] = useState([]);

    function deleteUser(id) {

        const confirm = prompt("Digite sim para deletar usuário, não para desistir da operação");

        if (confirm === "Sim" || confirm == confirm.toLocaleLowerCase() || confirm == confirm.toUpperCase() || confirm == "s") {
            axios.delete("http://localhost:8080/deletar-usuario/" + id).then(res => {
                alert(res.data)
            });
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8080/usuarios").then(res => setData(res.data))
    }, [data])
    return (
        <div className={data.length > 8 ? "container my- 5" : style.footerBottom}>
            <h3>Usuários cadastrados</h3>

            {/* {userId > 0 ? <ModalEditUser id={userId} /> : null} */}


            <div>
                <table className='table table-primary '>
                    <thead>
                        <tr>

                            <td>ID</td>
                            <td>Nome</td>
                            <td>Email</td>
                            <td>Endereço</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>


                        {data.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.endereco}</td>
                                <td>
                                    {/* Button trigger modal */}


                                    <button className='btn btn-warning mx-1'><Link className='nav-link' href={"painel-de-controle/edit/" + user.id}>Editar</Link></button>
                                    <button className='btn btn-danger' onClick={() => deleteUser(user.id)} >Deletar</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div >
    )
}
