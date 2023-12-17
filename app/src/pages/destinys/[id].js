import useDestiny from '@/hooks/useDestiny';
import { useRouter } from 'next/router'
import style from "@/styles/destiny/destinyId.module.css";
import { useEffect, useState } from 'react';
import Head from 'next/head';


export default function index() {


    const route = useRouter();
    const { id } = route.query;
    const { destiny } = useDestiny(id);
    const cidade = destiny.cidade ? destiny.cidade.replace(/ /g, "+") : null;

    return (
        <>
            <Head>
                <title>Vá Longe - Destino {destiny.cidade}</title>
            </Head>
            {destiny &&
                <div className={style.container}>
                    <div>
                        <img src={destiny.img} alt={"foto " + destiny.cidade} />
                    </div>
                    <div>
                        <h4>{destiny.cidade}</h4>
                        <p>{destiny.detalhes}</p>
                        <div className={style.button_container}>
                            <button className='btn btn-warning'><a href={'/carrinho?destino=' + id + "&cidade=" + cidade}>
                                Comprar
                            </a>
                            </button>
                        </div>
                    </div>

                </div >
            }
        </>
    )
}
