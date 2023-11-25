import CardInfo from '@/components/CardInfo'
import Head from 'next/head'
import style from '@/styles/main/main.module.css';
import CardDestiny from '@/components/CardDestiny';
import CardSales from '@/components/CardSales';



export default function Home() {

  const containerInfo = [{
    title: " Viagens para qualquer lugar do mundo",
    img: "images/aviao.png"
  }, {
    title: "Parcelamento em até 12x sem juros",
    img: "images/carteira.png"
  }, {
    title: " Sua compra totalmente segura",
    img: "images/seguranca.png"
  },]


  return (
    <>
      <Head>
        <title>Válonge - Página inicial</title>

      </Head>
      <main>
        <section className={style.section_img}>
          <div className={style.folder_container + " d-flex flex-column justify-content-center mb-auto ms-5"}>
            <div className="d-flex flex-column mt-3 justify-content-center">
              <h2>Descubra o Mundo com a Nossa Agência de Viagens!</h2>
              <h4>
                Seja aventureiro(a) ou em busca de relaxamento, nossa agência de viagens
                é sua parceira ideal para desvendar os segredos do mundo. Oferecemos
                roteiros exclusivos, acomodações de luxo e experiências inesquecíveis.
                Viaje com segurança, conforto e uma equipe dedicada ao seu bem-estar.
                Aventure-se em destinos exóticos e viva momentos únicos
              </h4>
              {/* <p class="fs-4">Liberte-se da rotina e embarque em uma jornada única! Descubra paisagens
                  deslumbrantes, culturas
                  fascinantes e momentos inesquecíveis. Aproveite agora a oportunidade de viver aventuras
                  extraordinárias
                  com nossas irresistíveis ofertas de viagens. Seu destino dos sonhos está apenas a um passo de
                  distância.
              </p> */}
            </div>
            <a href="destiny.html" className="btn btn-primary">
              Descubra Agora!
            </a>
          </div>
        </section>

        {/* container das informações */}
        <section className={`d-flex justify-content-around flex-wrap ${style.info_container} p-3`}>
          {containerInfo.map(card => (
            <span class=""><img class="pe-2" src={card.img} alt="icone aviao" />
              {card.title}
            </span>
          ))}



        </section>

        <CardInfo />
        <CardSales />
        <CardDestiny />
      </main>
    </>
  )
}
