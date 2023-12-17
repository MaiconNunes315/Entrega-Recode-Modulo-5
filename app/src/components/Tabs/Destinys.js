import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Accordion from '../Accordion';
import style from '@/styles/users/formRegister.module.css'
import styleCard from '@/styles/control-panel/list-users.module.css';
import Input from '../Input';
import Link from 'next/link';

export default function Destinys() {

    const [data, setData] = useState([]);
    const [cidade, setCidade] = useState("");
    const [detail, setDetail] = useState("");
    const [estado, setEstado] = useState("");
    const [img, setImg] = useState("");
    const [pais, setPais] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState();
    const [alert, setAlert] = useState();
    const [page, setPage] = useState(0);

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
        axios.get("http://localhost:8080/destinos?page=" + page + "&size=5").then(res => setData(res.data))

        if (data) {
            setCidade(data.cidade);
            setEstado(data.estado);
            setPais(data.pais);
            setDetail(data.detalhes);
            setImg(data.img);
        }

    }, [response, page])

    return (
        <div>
            {/* <div className="accordion" id="accordionExample">
                <Accordion title="Cadastrar destinos" content={<FormDestiny />} collapseNumber="collapseOne" expandBol="true" show />
                <Accordion title="Listar destino" collapsed="collapsed" content={<Input title="qqq" />} collapseNumber="collapseTwo" expandBol="false" />
            </div> */}

            <div className={style.main + " my-3 "}>
                <div>

                    <form className={style.form} onSubmit={handleSubmit}>
                        {response && (
                            <p className={'alert ' + alert}>{response}</p>
                        )}

                        <p className={style.title}>Cadastrar Destinos</p>
                        <address className={style.address}>
                            <div className={style.flex}>

                                <Input required={true} title="img" maxLength={"255"} type="text" onChange={(e) => setImg(e.target.value)} />
                                <Input required={true} title="Pais" type="text" onChange={(e) => setPais(e.target.value)} />
                            </div>
                            <div className={style.flex}>
                                <Input required={true} title="Cidade" type="text" onChange={(e) => setCidade(e.target.value)} />
                                <Input required={true} title="Estado" type="text" onChange={(e) => setEstado(e.target.value)} />
                            </div>
                        </address>

                        <div>
                            <textarea
                                className={'form-control ' + style.textarea}
                                placeholder='Digite os detalhes do destino, como pontos turisticos, baladas, eventos, etc.'
                                maxLength="255"
                                onChange={(e) => setDetail(e.target.value)}>
                            </textarea>
                        </div>
                        <button className={style.submit} style={{ maxWidth: "150px" }}>Cadastrar</button>

                    </form>

                </div >
            </div>

            <div className={'my-5 ' + styleCard.cards}>

                {data.map(destiny => (
                    <div className="card" key={destiny.id} style={{ width: "18rem" }}>
                        <img height="150px" src={destiny.img} className="card-img-top" alt={"Imagem do destino " + destiny.cidade} width={"100%"} />
                        <div className="card-body">
                            <h5 className="card-title">Dados do destino: {destiny.id}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">País: {destiny.pais}</li>
                            <li className="list-group-item">Estado: {destiny.estado}</li>
                            <li className="list-group-item">Cidade: {destiny.cidade}</li>
                            <li className="list-group-item">Detalhes: {destiny.detalhes}</li>
                        </ul>
                        <div className="card-body">
                            <button className='btn btn-warning'><Link className='nav-link' href={"painel-de-controle/editar-destino/" + destiny.id}>Editar</Link></button>
                            <button className='btn btn-danger mx-1' type='button' onClick={() => deletarDestino(destiny.id)} >Deletar</button>
                        </div>
                    </div>
                ))}

            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {page > 0 ? (<li class="page-item"><span class="page-link" href="#" onClick={() => setPage(prev => prev - 1)}>Previous</span></li>) : (null)}
                    <li class="page-item"><span class="page-link" onClick={() => setPage(0)}>1</span></li>
                    <li class="page-item"><span class="page-link" onClick={() => setPage(1)}>2</span></li>
                    <li class="page-item"><span class="page-link" onClick={() => setPage(2)}>3</span></li>
                    {page < data.length / 5 ? (<li class="page-item"><span class="page-link" onClick={() => setPage(prev => prev + 1)}>Next</span></li>) : (null)}
                </ul>
            </nav>
        </div>
    )
}
