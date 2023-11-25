import style from "@/styles/main/cardInfo.module.css";

export default function CardInfo() {

  const cardSession = [{
    title: "Oferta Imperdível - Pacotes de Praia com Descontos Incríveis.",
    description: `Aproveite a temporada de sol e mar com nossas ofertas especiais para
    destinos de praia deslumbrantes. Reserve agora e economize até 30% nos
    pacotes completos, que incluem passagens, hospedagens e passeios
    emocionantes. Garanta seu lugar no paraíso e desfrute de momentos
    relaxantes e revigorantes.`,
    img: "images/card1.jpg"
  },
  {
    title: "Oferta Imperdível - Pacotes de Praia com Descontos Incríveis.",
    description: `Aproveite a temporada de sol e mar com nossas ofertas especiais para
    destinos de praia deslumbrantes. Reserve agora e economize até 30% nos
    pacotes completos, que incluem passagens, hospedagens e passeios
    emocionantes. Garanta seu lugar no paraíso e desfrute de momentos
    relaxantes e revigorantes.`,
    img: "images/card2.jpg"
  },
  {
    title: "Oferta Imperdível - Pacotes de Praia com Descontos Incríveis.",
    description: `Aproveite a temporada de sol e mar com nossas ofertas especiais para
      destinos de praia deslumbrantes. Reserve agora e economize até 30% nos
      pacotes completos, que incluem passagens, hospedagens e passeios
      emocionantes. Garanta seu lugar no paraíso e desfrute de momentos
      relaxantes e revigorantes.`,
    img: "images/card3.jpg"
  },
  {
    title: "Oferta Imperdível - Pacotes de Praia com Descontos Incríveis.",
    description: `Aproveite a temporada de sol e mar com nossas ofertas especiais para
        destinos de praia deslumbrantes. Reserve agora e economize até 30% nos
        pacotes completos, que incluem passagens, hospedagens e passeios
        emocionantes. Garanta seu lugar no paraíso e desfrute de momentos
        relaxantes e revigorantes.`,
    img: "images/card4.jpg"
  },]


  return (
    <section className="container d-flex flex-column gap-5 my-5">
      {cardSession.map(card => (
        <div className={style.card_info_trip}>
          <img src={card.img} alt="Foto de praia paradisiaca" />
          <div>
            <h2>{card.title}</h2>
            <p>
              {card.description}
            </p>
            <button className="btn btn-primary" type="button">
              Reserve Já
            </button>
          </div>
        </div>
      ))
      }
    </section>


  )
}
