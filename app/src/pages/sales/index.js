import CardSales from '@/components/CardSales';
import Carrousel from '@/components/Carrousel'
import Head from 'next/head'



export default function index() {



    return (
        <div>
            <Head>
                <title>Válonge - Promoções, pacotes, ofertas, etc.</title>
            </Head>
            <div className='mt-5'>

                <Carrousel />
            </div>

            <CardSales />

        </div>
    )
}
