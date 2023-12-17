
import BannerDestiny from '@/components/BannerDestiny';
import BannerInfo from '@/components/BannerInfo';
import CardDestiny from '@/components/CardDestiny';

export default function index() {
    return (
        <main className="container">
            <BannerInfo />
            <BannerDestiny nationality="Destinos Nacionais" leftDestiny="Maceió" leftDestinyImg="images/maceio.jpeg" />

        </main >

    )
}
