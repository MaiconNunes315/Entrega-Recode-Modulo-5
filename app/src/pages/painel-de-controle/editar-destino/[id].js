import Input from "@/components/Input";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from '@/styles/users/formRegister.module.css'
import axios from "axios";

export default function index() {

    const [data, setData] = useState({});
    const [cidade, setCidade] = useState("");
    const [detail, setDetail] = useState("");
    const [estado, setEstado] = useState("");
    const [img, setImg] = useState("");
    const [pais, setPais] = useState("");
    const [response, setResponse] = useState("");
    const [alert, setAlert] = useState();

    const router = useRouter();

    const { id } = router.query;


    function handleSubmit(e) {
        e.preventDefault();
        axios.put("http://localhost:8080/painel-de-controle/edit-destino/" + id, {
            img: img,
            cidade: cidade,
            estado: estado,
            pais: pais,
            detalhes: detail,
            id: id
        }).then(res => {
            setResponse(res.data.message)
            if (res.data.error) {
                setAlert("alert-danger")

            } else {
                setAlert("alert-success")

            }
        })
    }


    useEffect(() => {
        if (id) {
            axios.get("http://localhost:8080/destino/" + id).then(res => {
                setData(res.data)
                setCidade(res.data.cidade);
                setEstado(res.data.estado);
                setPais(res.data.pais);
                setDetail(res.data.detalhes);
                setImg(res.data.img);
            })
        }
    }, [id])


    return (

        <form className={style.form} onSubmit={handleSubmit}>
            {response && (
                <p className={'alert ' + alert}>{response}</p>
            )}
            {data && (
                <>
                    <p className={style.title}>Cadastrar Destinos</p>
                    <address className={style.address}>
                        <div className={style.flex}>

                            <Input required={true} title="Link Imagem" type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                            <Input required={true} title="Pais" type="text" value={pais} onChange={(e) => setPais(e.target.value)} />
                        </div>
                        <div className={style.flex}>
                            <Input required={true} title="Cidade" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                            <Input required={true} title="Estado" type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
                        </div>
                    </address>

                    <div>
                        <textarea
                            className={'form-control ' + style.textarea}
                            placeholder='Digite os detalhes do destino, como pontos turisticos, baladas, eventos, etc.'
                            value={detail}
                            maxLength="255"
                            onChange={(e) => setDetail(e.target.value)}>
                        </textarea>
                    </div>
                    <button className={style.submit} style={{ maxWidth: "150px" }}>Cadastrar</button>
                </>)}

        </form>
    )
}
