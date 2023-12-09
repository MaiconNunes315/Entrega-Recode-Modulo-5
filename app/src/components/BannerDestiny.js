import style from '@/styles/destiny/destiny.module.css';


export default function BannerDestiny({ nationality, leftDestiny, leftDestinyImg }) {


    const destinys = [{
        destiny: "Bauneário",
        img: "images/bauneario.jpg"
    }, {
        destiny: "Búzios",
        img: "images/buzios.jpg"
    }, {
        destiny: "Caldas Novas",
        img: "images/caldas-novas.jpg"
    }, {
        destiny: "João Pessoa",
        img: "images/joao-pessoa.jpg"
    }]


    return (
        <div className="text-center">
            <h2 className="text-warning m-3">{nationality}</h2>
            <div className="d-flex justify-content-center gap-3 flex-column align-items-center flex-lg-row">
                <div div className={style.img_left} >
                    <img
                        className="w-100 rounded"
                        src={leftDestinyImg}
                        alt="foto maceió"
                    />
                    <h4 className="text-warning">{leftDestiny}</h4>
                </div>
                <div className={`d-flex justify-content-center flex-wrap gap-3 ${style.container_img_right}`}>
                    {destinys.map((destiny, index) => (
                        <div div className={style.img_right} >
                            <img
                                className="w-100 rounded"
                                src={destiny.img}
                                alt={"foto " + destiny.destiny}
                            />
                            <h4 className="text-warning">{destiny.destiny}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
