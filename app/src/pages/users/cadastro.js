import Input from '@/components/Input'
import { cpfMask, phoneMask, zipMask } from '@/services/functions';
import style from '@/styles/users/formRegister.module.css';
import axios from "axios";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function cadastro() {

    const [buscaCep, setBuscaCep] = useState(null);
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
    const [valor, setValor] = useState('')
    const [response, setResponse] = useState();
    const [alert, setAlert] = useState();

    const router = useRouter()


    function handleSubmit(event) {
        event.preventDefault();

        axios.post("http://localhost:8080/cadastro_usuario", {
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
            cep: cep.replace("-", "")
        }).then(res => {
            setResponse(res.data.message + "Você será redirecionado em instantes")
            if (res.data.error) {
                setAlert("alert-danger")

            } else {
                setAlert("alert-success")
                setTimeout(() => {
                    router.push("/")
                }, 5000);
            }


        })
    }


    useEffect(() => {

        if (cep.length > 8) {
            axios.get("https://viacep.com.br/ws/" + cep + "/json/").then(res => {
                if (!res.data.erro) {
                    setBuscaCep(res.data)
                    setBairro(res.data.bairro)
                    setEndereco(res.data.logradouro)
                    setCidade(res.data.localidade)
                    setEstado(res.data.uf)
                    setErro(null)
                } else {
                    setErro("CEP inválido! verifique e tente novamente")
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

                <div className={style.session}>


                    <form className={style.form} onSubmit={handleSubmit}>
                        {response && (
                            <div className={"my-2 alert " + alert} role="alert">{response}</div>
                        )}
                        <p className={style.title}>Cadastro </p>
                        <p className={style.message}>Se cadastre e aproveite as melhores ofertas de viagens </p>
                        <div className={style.flex}>
                            <Input title="Nome" type="text" required={true} value={name} onChange={(e) => setName(e.target.value)} />
                            <Input title="Email" type="email" required={true} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={style.flex}>
                            <Input title="CPF" type="tel" value={cpf} required={true} onChange={(e) => setCpf(cpfMask(e.target.value))} />
                            <Input title="RG" type="tel" maxLength="8" required={true} onChange={(e) => setRg(e.target.value)} />
                        </div>
                        <div className={style.flex}>
                            <Input title="Telefone" type="tel" required={true} value={telefone} onChange={(e) => setTelefone(phoneMask(e.target.value))} maxLength="15" />
                            <Input title="Data de Nascimento" type="date" required={true} onChange={(e) => setDataNascimento(e.target.value)} />
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
                        <div className={style.flex}>
                            <Input title="Senha" type="password" required={true} value={password} onChange={(e) => setPassword(e.target.value)} />

                        </div>

                        <button className={style.submit}>Cadastrar</button>
                        {/* <p className={style.signin}>
                            Já possui cadastro ? <Link className={style.a} href="users/login">Login</Link>
                        </p> */}
                    </form>
                </div>
            </div>
        </>
    )
}
