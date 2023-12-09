import React from 'react'

export default function contact() {


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
        <section className="container py-5 ">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        required=""
                        placeholder="Digite seu email"
                        id="inputEmail4"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                        Nome Completo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        required=""
                        placeholder="Digite seu nome completo"
                        id="inputPassword4"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Endereço
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        required=""
                        placeholder="Nome da rua e o numero da casa"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                        Complemento
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartamento, casa1, lote, etc."
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                        Cidade
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        required=""
                        placeholder="Digite a cidade"
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">
                        Estado
                    </label>
                    <select id="inputState" className="form-select">
                        <option selected> Selecione</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">
                        CEP
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu CEP"
                        id="inputZip"
                    />
                </div>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Digite sua mensagem"
                        id="floatingTextarea2"
                        style={{ height: 250 }}
                        defaultValue={""}
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

    )
}
