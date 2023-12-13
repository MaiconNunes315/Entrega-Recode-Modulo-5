import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from '@/styles/users/formRegister.module.css'
import Input from '../Input';
import { moneyMask } from '@/services/functions';

export default function ModalForm({ dados }) {

    const [data, setData] = useState([]);
    const [precoDiaria, setPrecoDiaria] = useState("");
    const [endereco, setEndereco] = useState("");
    const [nome, setNome] = useState("");
    const [response, setResponse] = useState("");
    const [alert, setAlert] = useState("");
    const [cidade, setCidade] = useState("");
    const [cidadeDestino, setCidadeDestino] = useState([]);
    const [erro, setErro] = useState("")
    const [searchHospedagem, setSearchHospedagem] = useState()


    function handleSubmit(e) {
        e.preventDefault();


        if (cidade == null) {
            setErro("Selecione a cidade")
        } else {
            setErro("");

            const preco = precoDiaria.replace(/\D/g, '').replace(/([0-9]{2})$/g, ".$1")
            axios.put("http://localhost:8080/editar-hospedagem", {
                nomeLocal: nome,
                cidade: cidade,
                precoDiaria: preco,
                endereco: endereco,
                id: dados.id
            }).then(res => {
                setResponse(res.data.message)
                if (res.data.error) {
                    setAlert("alert-danger")

                } else {
                    setAlert("alert-success")
                    setPrecoDiaria("")
                    setNome("")
                    setEndereco("")
                }
            })
        }
    }

    useEffect(() => {
        if (dados) {
            setCidade(dados.cidade)
            setNome(dados.nomeLocal)
            setEndereco(dados.endereco)
            setPrecoDiaria(dados.precoDiaria)
        }

    }, [dados])

    useEffect(() => {
        axios.get("http://localhost:8080/destinos").then(res => {
            setCidadeDestino(res.data.map(destino => destino.cidade))
        })
    }, [])


    return (
        <>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            {dados && (
                                <form className={style.form} onSubmit={handleSubmit}>
                                    {response && (
                                        <p className={'alert ' + alert}>{response}</p>
                                    )}

                                    <p className={style.title}>Cadastrar Hospedagem</p>

                                    <div className={style.flex}>


                                        <Input required={true} title="Nome do local" type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do hotel, pousada, hostel, etc." />
                                        <Input required={true} title="PrecoDiaria" type="tel" value={precoDiaria} onChange={(e) => setPrecoDiaria(moneyMask(e.target.value))} />
                                    </div>

                                    <address className={style.address}>
                                        <div className={style.flex}>
                                            <Input required={true} title="Endereço" type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                                            <select className='form-select' required onChange={(e) => setCidade(e.target.value)}>
                                                <option selected value={cidade}>{cidade}</option>
                                                {cidadeDestino.map(destino => (
                                                    <option key={destino} value={destino} >{destino}</option>
                                                ))}
                                            </select>
                                            {erro && <p className='text-danger'>{erro}</p>}


                                        </div>


                                    </address>

                                    <button className={style.submit} style={{ maxWidth: "150px" }}>Editar</button>

                                </form>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Sair
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
