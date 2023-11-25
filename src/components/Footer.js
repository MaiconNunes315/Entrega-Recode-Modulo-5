import style from '@/styles/Footer.module.css';
export default function Footer() {
    return (
        <footer className={`py-5 d-flex flex-column align-items-center ${style.footer}`}>
            <div className="container d-flex justify-content-center flex-wrap gap-5">
                <div>
                    <h4>Vá longe</h4>
                    <p>
                        <a
                            className={`text-decoration-none text-dark ${style.footer_link}`}
                            href="sobre.html"
                        >
                            Sobre nós
                        </a>
                    </p>
                    <p>SAC 21 2222-2222</p>
                    <p>Atendimento Seg. a Sex: 09h às 19h</p>
                    <p>CNPJ: 42.047.067/0001-21</p>
                </div>
                <div>
                    <h4>Formas de pagamento</h4>
                    <img
                        width="300px"
                        src="https://images.tcdn.com.br/img/editor/up/365915/bandeiras_cartoes.png"
                        alt=""
                    />
                </div>
                <div>
                    <h4>Viaje com a gente</h4>
                    <p>
                        {" "}
                        <a
                            href="sales.html"
                            className={`text-decoration-none text-dark ${style.footer_link}`}
                        >
                            Promoção
                        </a>{" "}
                    </p>
                    <p>
                        {" "}
                        <a
                            href="destiny.html"
                            className={`text-decoration-none text-dark ${style.footer_link}`}
                        >
                            Destinos
                        </a>{" "}
                    </p>
                    <p>
                        {" "}
                        <a
                            href="contact.html"
                            className={`text-decoration-none text-dark ${style.footer_link}`}
                        >
                            Fale conosco
                        </a>{" "}
                    </p>
                </div>
                <div>
                    <h4>Siga nossas redes</h4>
                    <a href="#" className="text-decoration-none">
                        <img src="assets/images/instagram.png" alt="icone instagram" />
                    </a>
                    <a href="#" className="text-decoration-none">
                        <img src="assets/images/facebook.png" alt="icone facebook" />
                    </a>
                    <a href="#" className="text-decoration-none">
                        <img src="assets/images/youtube.png" alt="icone youtube" />
                    </a>
                </div>
            </div>
            <div className="">
                Feito por:
                <a
                    className="text-decoration-none text-dark"
                    href="https://www.linkedin.com/in/maicon-nunes/"
                    target="_blank"
                >
                    Maicon Nunes
                    <img width="40px" src="assets/images/linkedin.png" alt="icone linkedin" />
                </a>
            </div>
        </footer>

    )
}
