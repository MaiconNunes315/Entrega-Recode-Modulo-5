import axios from 'axios';
import { useEffect, useState } from 'react'
import style from '@/styles/users/formRegister.module.css'
import Input from '../Input';


export default function Hospedagem() {


    const [data, setData] = useState([]);
    const [buscaCep, setBuscaCep] = useState(null);
    const [cep, setCep] = useState("");
    const [detail, setDetail] = useState("");
    const [precoDiara, setPrecoDiaria] = useState("");
    const [endereco, setEndereco] = useState("");
    const [Nome, setNome] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState();
    const [alert, setAlert] = useState();
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [erro, setErro] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/new-destino", {
            img: img,
            cidade: cidade,
            estado: estado,
            pais: pais,
            detalhes: detail
        }).then(res => {
            setResponse(res.data.message)
            if (res.data.error) {
                setAlert("alert-danger")

            } else {
                setAlert("alert-success")

            }
        })
    }

    function deletarDestino(id) {
        let confirm = prompt("Digite sim para deletar usuário, não para desistir da operação");

        confirm ? confirm.toLowerCase() : confirm;
        if (confirm === "sim" || confirm == "s") {
            axios.delete("http://localhost:8080/delete-destino/" + id).then(res => {
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
        axios.get("http://localhost:8080/destinos").then(res => setData(res.data))

        if (data) {
            setCidade(data.cidade);
            setPrecoDiaria(data.estado);
            setNome(data.pais);
            setDetail(data.detalhes);
            setEndereco(data.img);
        }

    }, [response])

    useEffect(() => {

        if (cep.length > 8) {
            axios.get("https://viacep.com.br/ws/" + cep + "/json/").then(res => {
                if (!res.data.erro) {
                    setBuscaCep(res.data)
                    setBairro(res.data.bairro)
                    setEndereco(res.data.logradouro)
                    setCidade(res.data.localidade)
                    setEstado(res.data.uf)

                } else {
                    setErro("CEP inválido! verifique e tente novamente")
                }
            })
        }


    }, [cep])


    return (
        <div className={style.main + " my-3 "}>
            <div>

                <form className={style.form} onSubmit={handleSubmit}>
                    {response && (
                        <p className={'alert ' + alert}>{response}</p>
                    )}

                    <p className={style.title}>Cadastrar Hospedagem</p>

                    <div className={style.flex}>

                        <Input required={true} title="Endereço" type="text" onChange={(e) => setEndereco(e.target.value)} />
                        <Input required={true} title="Nome do local" type="text" onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className={style.flex}>
                        <Input required={true} title="PrecoDiaria" type="tel" onChange={(e) => setPrecoDiaria(e.target.value)} />
                    </div>
                    <address className={style.address}>
                        <div className={style.flex}>
                            <Input title="Cep" type="tel" maxLength="9" onChange={(e) => setCep(zipMask(e.target.value))} value={cep} required={true} />
                            <Input title="Bairro" type="text" disabled={buscaCep ? false : true} required={true} value={bairro} onChange={(e) => setBairro(e.target.value)} />
                        </div>
                        {erro && <span className='text-danger'>{erro}</span>}
                        <div className={style.flex}>
                            <Input title="Endereço" type="text" disabled={buscaCep ? false : true} required={true} value={endereco} placeholder="Rua tancredo neves 21" onChange={(e) => setEndereco(e.target.value)} />

                            <Input title="Complemento" type="text" disabled={buscaCep ? false : true} onChange={(e) => setComplemento(e.target.value)} placeholder="casa, apartamento, bloco etc." />
                        </div>
                        <div className={style.flex}>
                            <Input title="Cidade" type="text" disabled={buscaCep ? false : true} required={true} value={cidade} onChange={(e) => setCidade(e.target.value)} />
                            <Input title="Estado" type="text" disabled={buscaCep ? false : true} required={true} value={estado} onChange={(e) => setEstado(e.target.value)} />
                        </div>
                    </address>


                    <div>
                        <textarea
                            className={'form-control ' + style.textarea}
                            placeholder='Digite os detalhes do destino, como pontos turisticos, baladas, eventos, etc.'

                            onChange={(e) => setDetail(e.target.value)}>
                        </textarea>
                    </div>
                    <button className={style.submit} style={{ maxWidth: "150px" }}>Cadastrar</button>

                </form>

            </div >
        </div>
    )
}
