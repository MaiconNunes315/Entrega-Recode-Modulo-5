import useContact from '@/hooks/useContact'
import { phoneMask, zipMask } from '@/services/functions'
import Head from 'next/head'
import React from 'react'

export default function contact() {


    const { telefone, setTelefone, handleSubmit, setEmail, setNome, setMensagem, response } = useContact();

    const states = ["Acre",
        "Alagoas", "Amapá",
        "Amazonas", "Bahia",
        "Brasilia", "Ceará",
        "Espírito Santo", "Goiás",
        "Maranhão", "Mato Grosso", "Mato Grosso do ul",
        "Minas Gerais", "Pará",
        "Paraíba", "Paraná", "Pernambuco", "Piauí",
        "Rio de Janeiro", "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Tocantins",]

    return (
        <>
            <Head>
                <title>Vá longe - Contato</title>
            </Head>
            <section className="container py-5 ">

                <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
                    {response && (
                        <div className={"my-2 alert alert-success"} role="alert">{response}</div>
                    )}
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            required
                            placeholder="Digite seu email"
                            id="inputEmail4"
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Digite seu nome completo"
                            id="inputPassword4"
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">
                            Telefone
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Digite seu Telefone"
                            id="inputZip"
                            value={telefone}
                            onChange={(e) => setTelefone(phoneMask(e.target.value))}
                        />
                    </div>
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Digite sua mensagem"
                            id="floatingTextarea2"
                            style={{ height: 250 }}
                            defaultValue={""}
                            onChange={(e) => setMensagem(e.target.value)}
                        />
                        <label htmlFor="floatingTextarea2">Mensagem</label>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Enviar mensagem
                        </button>
                    </div>
                </form>
            </section>
        </>

    )
}
