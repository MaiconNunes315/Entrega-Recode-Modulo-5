import axios from 'axios';
import { useEffect, useState } from 'react'
import style from '@/styles/control-panel/list-users.module.css';

import Link from 'next/link';
import Users from '@/components/Tabs/Users';
import Destinys from '@/components/Tabs/Destinys';
import Contato from '@/components/Tabs/Contato';
import Hospedagem from '@/components/Tabs/Hospedagem';


export default function index() {


    const [userId, setUserId] = useState(0);

    //console.log(userId)



    // function editUser(id) {

    // }



    return (
        <div className='container my-5'>
            <>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active"
                            id="nav-usuario-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-usuario"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                        >
                            Usuários
                        </button>
                        <button
                            className="nav-link"
                            id="nav-destino-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-destino"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                        >
                            Destinos
                        </button>
                        <button
                            className="nav-link"
                            id="nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-contact"
                            type="button"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                        >
                            Contatos
                        </button>
                        <button
                            className="nav-link"
                            id="nav-hospedagem-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-hospedagem"
                            type="button"
                            role="tab"
                            aria-controls="nav-hospedagem"
                            aria-selected="false"

                        >
                            Hospedagem
                        </button>
                        <button
                            className="nav-link"
                            id="nav-sales-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-sales"
                            type="button"
                            role="tab"
                            aria-controls="nav-sales"
                            aria-selected="false"

                        >
                            Promoções
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-usuario"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex={0}
                    >
                        <Users />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-destino"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex={0}
                    >
                        <Destinys />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                        tabIndex={0}
                    >
                        <Contato />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-hospedagem"
                        role="tabpanel"
                        aria-labelledby="nav-hospedagem-tab"
                        tabIndex={0}
                    >
                        <Hospedagem />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-sales"
                        role="tabpanel"
                        aria-labelledby="nav-sales-tab"
                        tabIndex={0}
                    >
                        promoç~eos
                    </div>
                </div>
            </>

        </div>
    )
}
