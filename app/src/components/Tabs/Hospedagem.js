import axios from 'axios';
import { useEffect, useState } from 'react'
import style from '@/styles/users/formRegister.module.css'
import Input from '../Input';
import { moneyMask } from '@/services/functions';
import ModalForm from '../Modal/ModalForm';
import useTrip from '@/hooks/useTrip';



export default function Hospedagem() {


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
            axios.post("http://localhost:8080/new-hospedagem", {
                nomeLocal: nome,
                cidade: cidade,
                precoDiaria: preco,
                endereco: endereco
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

    function deletarHospedagem(id) {
        let confirm = prompt("Digite sim para deletar usuário, não para desistir da operação");

        confirm ? confirm.toLowerCase() : confirm;
        if (confirm === "sim" || confirm == "s") {
            axios.delete("http://localhost:8080/deletar-hospedagem/" + id).then(res => {
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

    function buscarHospedagem(id) {
        axios.get("http://localhost:8080/hospedagem/" + id).then(res => setSearchHospedagem(res.data))
    }


    useEffect(() => {
        axios.get("http://localhost:8080/hospedagens").then(res => setData(res.data))

        if (data) {
            setCidade(data.cidade);
            setPrecoDiaria(data.estado);
            setNome(data.pais);
            setEndereco(data.img);
        }

    }, [response])

    useEffect(() => {
        axios.get("http://localhost:8080/destinos").then(res => {
            setCidadeDestino(res.data.map(destino => destino.cidade))
        })

    }, [])


    return (
        <>
            <ModalForm dados={searchHospedagem} />
            <div className={style.main + " my-3 "}>
                <div>

                    {data ? (
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
                                    {/* <Input title="Cidade" type="text" required={true} onChange={(e) => setCidade(e.target.value)} /> */}
                                    <select className='form-select' required onChange={(e) => setCidade(e.target.value)}>
                                        <option selected>Selecione a cidade</option>
                                        {cidadeDestino.map(destino => (
                                            <option key={destino} value={destino} >{destino}</option>
                                        ))}
                                    </select>
                                    {erro && <p className='text-danger'>{erro}</p>}
                                </div>


                            </address>

                            <button className={style.submit} style={{ maxWidth: "150px" }}>Editar</button>

                        </form>
                    ) : (
                        <p className='alert alert-danger'>Carregando</p>
                    )}

                </div >
            </div>
            <div>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <td>Id:</td>
                            <td>Local</td>
                            <td>Preço diária</td>
                            <td>Cidade</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(hosp => (

                            <tr key={hosp.id}>
                                <td>{hosp.id}</td>
                                <td>{hosp.nomeLocal}</td>
                                <td>{hosp.precoDiaria}</td>
                                <td>{hosp.cidade}</td>
                                <td>

                                    <button type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        className='btn btn-warning m-1'
                                        onClick={() => buscarHospedagem(hosp.id)}>Editar</button>
                                    <button className='btn btn-danger m-1' onClick={() => deletarHospedagem(hosp.id)}>Deletar</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
