import style from '@/styles/main/cardSales.module.css'

export default function CardSales() {
    return (
        <section>
            <div className="m-3 d-flex flex-wrap justify-content-evenly gap-5 ">
                <div
                    className={`card position-relative ${style.card_sale}`}
                    style={{ width: "18rem" }}
                >
                    <div className={`position-absolute d-flex flex-column ${style.btn_card_absolute}`}>
                        <p className="btn btn-warning">Pacotes Nacionais</p>
                        <p className="btn btn-danger">-50%</p>
                    </div>
                    <div className={style.card_sales_img}>
                        <img
                            src="images/bauneario.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Bauneário Camboriú</h5>
                        <p className="card-text">
                            <img
                                className="me-1"
                                width="22px"
                                src="images/mala.png"
                                alt="icone mala"
                            />
                            4 diárias
                        </p>
                        <ul className={style.card_list_sale}>
                            <li>Passagem aérea</li>
                            <li>Hospedagem</li>
                            <li>Café da manhã</li>
                            <li>Open bar</li>
                            <li>Saindo de São Paulo</li>
                        </ul>
                        <div>
                            <span>
                                <s>de R$ 2150,00</s>
                            </span>
                            <div>
                                <small>por</small>
                                <span className={`fs-3 ${style.card_sale_price} text-warning`}>
                                    R$ 1075,00
                                </span>
                            </div>
                            <span />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
