import Form from '@/components/Form'
import Input from '@/components/Input'
import useLodging from '@/hooks/useLodging'
import useTrip from '@/hooks/useTrip'
import useUser from '@/hooks/useUser'
import style from "@/styles/car.module.css"
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function carrinho() {

    const router = useRouter();
    const { data } = useUser();
    const { query } = router;
    const { dataLodgingiCity } = useLodging(query.cidade);
    const { precoTotal, setDataEntrada, setDataSaida, setObservacoes, setPrecoTotal, setState, setUserId, state, setLodging, handleSubmit, response, alert } = useTrip();

    return (
        <>
            <Head>
                <title>Vá longe - concluindo compra</title>
            </Head>
            <div className={style.container}>
                {response && (
                    <div className={"my-2 alert " + alert} role="alert">{response}</div>
                )}
                <Form title="Concluindo compra" onSubmit={handleSubmit}>

                    <div className='d-flex align-items-center flex-column gap-2'>
                        <div className={"d-flex gap-1"}>
                            <Input title={"Data de check-in"} type="date" onChange={(e) => setDataEntrada(e.target.value)} required={true} />
                            {/* <Input title="Hora" type="time" onChange={(e) => setDataEntrada(prev => prev + " " + e.target.value)} /> */}
                            <Input title={"Data de check-out"} type="date" onChange={(e) => setDataSaida(e.target.value)} required={true} />
                            {/* <Input title="Hora" type="time" onChange={(e) => setDataSaida(prev => prev + " " + e.target.value)} /> */}
                        </div>
                        {dataLodgingiCity.length > 0 ? (
                            <div className={style.div}>
                                <label htmlFor='select'>Possui hospedagem ?</label>
                                <select className='form-select' id='select' required onChange={(e) => setState(e.target.value)}>
                                    <option value={1}>Sim</option>
                                    <option value={0}>Não</option>
                                </select>
                                <label>Selecione a hospedagem</label>
                            </div>
                        ) : null}
                        <div className='d-flex flex-wrap gap-2' >

                            {state == 1 ?
                                dataLodgingiCity.map(element => (
                                    <div key={element.id}>

                                        {/* colocar no useSale setcidade */}
                                        <input type="radio" className='btn-check' name="viagem" value={element} id={element.id} onChange={() => setLodging(element)} />
                                        <label className="btn btn-outline-primary" htmlFor={element.id}>
                                            <div className="d-flex gap-3 w-100 justify-content-between">
                                                <h5 className="mb-1">{element.cidade}</h5>

                                            </div>
                                            <p>{element.nomeLocal}</p>
                                            <p>{element.endereco}</p>
                                        </label>
                                    </div>
                                )
                                ) : (null)}
                        </div>
                        <div div className={style.div}>
                            <label>Obsevações da viagem </label>
                            <textarea className={style.textarea + " form-control"} onChange={(e) => setObservacoes(e.target.value)}></textarea>
                        </div>
                        {/* <div>
                            <Input type="text" title="Cupom de desconto" />
                        </div> */}
                        <div>
                            <label>Se possui cadastro selecione seu nome abaixo</label>
                            <select className='form-select' onChange={(e) => setUserId(e.target.value)} required>
                                <option value="">Selecione o usuário</option>
                                {data && data.map(usuario => (
                                    <option value={usuario.id} key={usuario.id} >{usuario.nome}</option>
                                ))
                                }
                            </select>
                            <label><Link href="/users/cadastro">Cadastre-se aqui </Link> caso não possua cadastro</label>
                        </div>
                        <div>
                            <label>
                                <strong>Preço total: </strong>
                                R$ {precoTotal}
                            </label>
                        </div>
                    </div>
                    <button className='btn btn-primary' >Comprar viagem</button>
                </Form >
            </div >
        </>
    )
}
