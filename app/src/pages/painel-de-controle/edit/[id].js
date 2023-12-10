import Input from "@/components/Input";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import style from '@/styles/users/formRegister.module.css'
import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {

    const [buscaCep, setBuscaCep] = useState({});
    const [data, setData] = useState({});
    const [cep, setCep] = useState("");
    const [erro, setErro] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
    const { id } = router.query;

    function handleSubmit(event) {
        event.preventDefault();

        setComplemento(prev => prev != "" ? "sem complemento" : prev);

        axios.put("http://localhost:8080/editar-usuario/" + id, {
            nome: name,
            dataNascimento: dataNascimento,
            email: email,
            endereco: endereco + "; " + complemento + "; " + bairro,
            estado: estado,
            cidade: cidade,
            cpf: cpf,
            rg: rg,
            telefone: telefone,
            senha: password,
            cep: cep,
            id: id
        }).then(res => console.log(res))
    }



    useEffect(() => {
        if (id) {
            axios.get("http://localhost:8080/usuario/" + id).then(res => {
                const endereco = res.data.endereco ? res.data.endereco.split(";") : [null, null, null]

                setEndereco(endereco[0])
                setComplemento(endereco[1])
                setBairro(endereco[2])
                setData(res.data)
                setEmail(res.data.email)
                setDataNascimento(res.data.dataNascimento)
                setCpf(res.data.cpf)
                setCidade(res.data.cidade)
                setCep(res.data.cep)
                setName(res.data.nome)
                setPassword(res.data.senha)
                setTelefone(res.data.telefone)
                setCep(res.data.cep)
                setRg(res.data.rg)
                setEstado(res.data.estado)
                setTipoUsuario(res.data.tipoUsuario)
            })
        }
    }, [id])


    useEffect(() => {



        if (cep.length > 7) {
            axios.get("https://viacep.com.br/ws/" + cep + "/json/").then(res => {
                if (res.status == 200) {
                    setBuscaCep(res.data)
                    setBairro(res.data.bairro)
                    setEndereco(res.data.logradouro)
                    setCidade(res.data.localidade)
                    setEstado(res.data.uf)

                } else {
                    setErro("Cep inválido tente novamente")
                }
            })
        }


    }, [cep])

    //console.log(buscaCep)








    return (
        <>
            <Head>
                <title>Válonge - Editar usuário</title>
            </Head>
            <div className={style.main}>
                {data &&
                    <form className={style.form} onSubmit={handleSubmit}>
                        <p className={style.title}>Editar usuário</p>
                        <p className={style.message}>Se cadastre e aproveite as melhores ofertas de viagens </p>
                        <div className={style.flex}>
                            <Input title="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <Input title="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={style.flex}>
                            <Input title="CPF" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            <Input title="RG" type="text" value={rg} onChange={(e) => setRg(e.target.value)} />
                        </div>
                        <div className={style.flex}>
                            <Input title="Telefone" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            <Input title="Data de Nascimento" type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                        </div>
                        <address className={style.address}>
                            <div className={style.flex}>
                                <Input title="Cep" type="tel" onChange={(e) => setCep(e.target.value)} value={cep} />

                                <Input title="Bairro" type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                            </div>
                            <div className={style.flex}>
                                <Input title="Endereço" type="text" value={endereco} placeholder="Rua tancredo neves 21" onChange={(e) => setEndereco(e.target.value)} />

                                <Input title="Complemento" type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} placeholder="casa, apartamento, bloco etc." />
                            </div>
                            <div className={style.flex}>
                                <Input title="Cidade" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                                <Input title="Estado" type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
                            </div>
                        </address>
                        <span className="text-danger">*Tipos de Usuário "ADMIN", "USER", "FUNC"</span>
                        <div>
                            <Input title="Tipo de Usuário " type="text" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} />
                        </div>
                        <p>
                            clique para editar senha
                        </p>
                        {/* <div className={style.flex}>
                            <Input title="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        </div> */}

                        <button className={style.submit}>Editar</button>

                    </form>
                }

            </div>
        </>
    )
}
