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

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/new-destino", {
            img: img,
            cidade: cidade,
            estado: estado,
            pais: pais,
            detalhes: detail
        }).then(res => setResponse(res.data))
    }

    function deletarDestino(id) {
        axios.delete("http://localhost:8080/delete-destino/" + id).then(res => setResponse(res.data))
    }

    useEffect(() => {
        axios.get("http://localhost:8080/destinos").then(res => setData(res.data))

        if (data) {
            setCidade(data.cidade);
            setEstado(data.estado);
            setPais(data.pais);
            setDetail(data.detalhes);
            setImg(data.img);
        }
    }, [response])



    console.log(response)
    return (
        <div>
            {/* <div className="accordion" id="accordionExample">
                <Accordion title="Cadastrar destinos" content={<FormDestiny />} collapseNumber="collapseOne" expandBol="true" show />
                <Accordion title="Listar destino" collapsed="collapsed" content={<Input title="qqq" />} collapseNumber="collapseTwo" expandBol="false" />
            </div> */}

            <div className={style.main + " my-3 "}>
                <div>

                    <form className={style.form} onSubmit={handleSubmit}>
                        <p className={style.title}>Cadastrar Destinos</p>
                        <address className={style.address}>
                            <div className={style.flex}>

                                <Input title="img" type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                                <Input title="Pais" type="text" value={pais} onChange={(e) => setPais(e.target.value)} />
                            </div>
                            <div className={style.flex}>
                                <Input title="Cidade" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                                <Input title="Estado" type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
                            </div>
                        </address>

                        <div>
                            <textarea
                                className={'form-control ' + style.textarea}
                                placeholder='Digite os detalhes do destino, como pontos turisticos, baladas, eventos, etc.'
                                value={detail}
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
                        <img src={destiny.img} className="card-img-top" alt={"Imagem do destino " + destiny.cidade} width={"100%"} />
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
                            <button className='btn btn-warning'><Link className='nav-link' href={"painel-de-controle/edit/" + destiny.id}>Editar</Link></button>
                            <button className='btn btn-danger mx-1' onClick={() => deletarDestino(destiny.id)} >Deletar</button>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    )
}
