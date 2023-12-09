import React from 'react'
import style from "@/styles/bannerInfo.module.css"

export default function BannerInfo() {

    const containerInfo = [{
        title: " Viagens para qualquer lugar do mundo",
        img: "images/aviao.png"
    }, {
        title: "Parcelamento em até 12x sem juros",
        img: "images/carteira.png"
    }, {
        title: " Sua compra totalmente segura",
        img: "images/seguranca.png"
    }];


    return (
        <>
            {/* container das informações */}
            <section className={`d-flex justify-content-around flex-wrap ${style.info_container} p-3`}>
                {containerInfo.map((card, index) => (
                    <span key={index} className=""><img className="pe-2" src={card.img} alt="icone aviao" />
                        {card.title}
                    </span>
                ))}
            </section>
        </>
    )

}
