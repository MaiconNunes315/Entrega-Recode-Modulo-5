import CardInfo from '@/components/CardInfo'
import Head from 'next/head'
import style from '@/styles/main/main.module.css';
import CardDestiny from '@/components/CardDestiny';
import CardSales from '@/components/CardSales';
import Title from '@/components/Title';
import BannerInfo from '@/components/BannerInfo';
import useDestiny from '@/hooks/useDestiny';



export default function Home() {

  const { destinys } = useDestiny();

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


        <BannerInfo />
        <CardInfo />
        <Title title="Promoções" link="/sales" />
        <CardSales />
        <Title title="Destinos" link="/destinys" />
        <section className='d-flex justify-content-center gap-3 flex-wrap'>

          {destinys && destinys.map(destiny => (
            <CardDestiny img={destiny.img} cidade={destiny.cidade} id={destiny.id} />
          ))}
        </section>
      </main>
    </>
  )
}
