import axios from "axios";
import { useEffect, useState } from "react";


export default function Contato() {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8080/contatos").then(res => {
            setData(res.data)

        })
    }, [])


    return (
        <>{data && (
            <div>
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Email</td>
                            <td>Nome</td>
                            <td>Mensagem</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(contato => (
                            <tr key={contato.id}>
                                <td>{contato.id}</td>
                                <td>{contato.email}</td>
                                <td>{contato.nome}</td>
                                <td>{contato.mensagem}</td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        )

        }</>
    )
}
