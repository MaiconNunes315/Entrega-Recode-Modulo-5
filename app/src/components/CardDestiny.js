
import style from '@/styles/main/cardDestiny.module.css';
import Link from 'next/link';

export default function CardDestiny({ id, img, cidade }) {

    return (

        <div className="d-flex flex-wrap justify-content-evenly gap-5 mt-3">
            <div
                className={`card position-relative overflow-hidden ${style.card_destiny}`}
                style={{ width: "18rem" }}
            >
                <img
                    width="100%"
                    height="100%"
                    src={img}
                    className="position-absolute"
                    alt="..."
                />
                <div className="z-1 d-flex h-100 flex-column justify-content-end align-items-center mb-3">
                    <p className="text-warning mb-0">PACOTES PARA</p>
                    <h3 className="text-white fs-1">{cidade}</h3>
                    <Link href={"/destinys/" + id} className="btn btn-warning text-white">
                        Conferir
                    </Link>
                </div>
            </div>
        </div>

    )
}
