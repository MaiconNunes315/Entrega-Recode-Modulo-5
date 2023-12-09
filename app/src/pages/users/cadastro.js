import Input from '@/components/Input'
import style from '@/styles/users/formRegister.module.css';
import axios from "axios";
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function cadastro() {

    const [buscaCep, setBuscaCep] = useState({});
    const [cep, setCep] = useState("");
    const [erro, setErro] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState();
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        axios.post("http://localhost:8080/users/cadastro", {
            nome: name,
            dataNascimento: dataNascimento,
            email: email,
            endereco: endereco + "; " + complemento + "; " + bairro,
            estado: estado,
            cidade: cidade,
            cpf: cpf,
            rg: rg,
            telefone: telefone,
            senha: password
        }).then(res => console.log(res))
    }


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
                <title>Válonge - Cadastro</title>
            </Head>
            <div className={style.main}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <p className={style.title}>Cadastro </p>
                    <p className={style.message}>Se cadastre e aproveite as melhores ofertas de viagens </p>
                    <div className={style.flex}>
                        <Input title="Nome" type="text" required={true} value={name} onChange={(e) => setName(e.target.value)} />
                        <Input title="Email" type="email" required={true} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={style.flex}>
                        <Input title="CPF" type="text" required={true} onChange={(e) => setCpf(e.target.value)} />
                        <Input title="RG" type="text" required={true} onChange={(e) => setRg(e.target.value)} />
                    </div>
                    <div className={style.flex}>
                        <Input title="Telefone" type="tel" required={true} onChange={(e) => setTelefone(e.target.value)} />
                        <Input title="Data de Nascimento" type="date" required={true} onChange={(e) => setDataNascimento(e.target.value)} />
                    </div>
                    <address className={style.address}>
                        <div className={style.flex}>
                            <Input title="Cep" type="text" onChange={(e) => setCep(e.target.value)} required={true} />

                            <Input title="Bairro" type="text" required={true} value={bairro} onChange={(e) => setBairro(e.target.value)} />
                        </div>
                        <div className={style.flex}>
                            <Input title="Endereço" type="text" required={true} value={endereco} placeholder="Rua tancredo neves 21" onChange={(e) => setEndereco(e.target.value)} />

                            <Input title="Complemento" type="text" onChange={(e) => setComplemento(e.target.value)} placeholder="casa, apartamento, bloco etc." />
                        </div>
                        <div className={style.flex}>
                            <Input title="Cidade" type="text" required={true} value={cidade} onChange={(e) => setCidade(e.target.value)} />
                            <Input title="Estado" type="text" required={true} value={estado} onChange={(e) => setEstado(e.target.value)} />
                        </div>
                    </address>
                    <div className={style.flex}>
                        <Input title="Senha" type="password" required={true} value={password} onChange={(e) => setPassword(e.target.value)} />

                    </div>

                    <button className={style.submit}>Cadastrar</button>
                    <p className={style.signin}>
                        Já possui cadastro ?<Link className={style.a} href="users/login">Login</Link>
                    </p>
                </form>

            </div>
        </>
    )
}
