import style from '@/styles/main/cardDestiny.module.css';

export default function CardDestiny() {
    return (
        <section className="m-3">

            <div className="d-flex flex-wrap justify-content-evenly gap-5 mt-3">
                <div
                    className={`card position-relative overflow-hidden ${style.card_destiny}`}
                    style={{ width: "18rem" }}
                >
                    <img
                        width="100%"
                        height="100%"
                        src="images/paris.jpg"
                        className="position-absolute"
                        alt="..."
                    />
                    <div className="z-1 d-flex h-100 flex-column justify-content-end align-items-center mb-3">
                        <p className="text-warning mb-0">PACOTES PARA</p>
                        <h3 className="text-white fs-1">Paris</h3>
                        <a href="#" className="btn btn-warning text-white">
                            Conferir
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
