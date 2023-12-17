import useDestiny from '@/hooks/useDestiny';
import style from '@/styles/destiny/destiny.module.css';
import Head from 'next/head';
import Link from 'next/link';


export default function BannerDestiny({ nationality, leftDestiny, leftDestinyImg }) {


    const { destinys, setPage, page } = useDestiny();



    return (
        <>
            <Head>
                <title>Vá longe - destinos</title>
            </Head>
            <div className="text-center flex-column align-items-center d-flex" >
                <h2 className="text-warning m-3">{nationality}</h2>
                {/* <div className="d-flex justify-content-center gap-3 flex-column align-items-center flex-lg-row"> */}
                {/* <div div className={style.img_left} >
                    <img
                    className="w-100 rounded"
                    src={leftDestinyImg}
                    alt="foto maceió"
                    />
                    <h4 className="text-warning">{leftDestiny}</h4>
                </div> */}
                <div className={`d-flex justify-content-center flex-wrap gap-3 ${style.container_img_right}`}>
                    {destinys.map((destiny, index) => (
                        <div className={style.img_right} >
                            <Link href={"destinys/" + destiny.id}>
                                <img
                                    className="w-100 rounded"
                                    src={destiny.img}
                                    alt={"foto " + destiny.cidade}
                                />
                                <h4 className="text-warning">{destiny.cidade}</h4>
                            </Link>
                        </div>
                    ))}
                </div>
                {/* </div> */}
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {page > 0 ? (<li class="page-item"><span class="page-link" href="#" onClick={() => setPage(prev => prev - 1)}>Previous</span></li>) : (null)}
                        <li class="page-item"><span class="page-link" onClick={() => setPage(0)}>1</span></li>
                        <li class="page-item"><span class="page-link" onClick={() => setPage(1)}>2</span></li>
                        <li class="page-item"><span class="page-link" onClick={() => setPage(2)}>3</span></li>
                        {page < destinys.length / 5 ? (<li class="page-item"><span class="page-link" onClick={() => setPage(prev => prev + 1)}>Next</span></li>) : (null)}
                    </ul>
                </nav>
            </div >

        </>
    )
}
