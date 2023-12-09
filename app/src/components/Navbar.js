import React from 'react'
import style from '@/styles/Navbar.module.css'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const url = usePathname()

    return (
        <header className={style.header} style={url == "/" ? { background: "transparent" } : { backgroundColor: "#045ccc" }}>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/images/logo.png" alt="logo va longe" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse  justify-content-between text-center"
                        id="navbarSupportedContent"
                    >
                        <form
                            className="d-flex flex-column flex-sm-row gap-2 gap-sm-0"
                            role="search"
                        >
                            <input
                                className="form-control bg-light me-2"
                                type="search"
                                placeholder="Pesquisar"
                                aria-label="Search"
                            />
                            <button className="btn btn-warning" type="submit">
                                Pesquisar
                            </button>
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className={"nav-link " + style.style_link_hover}
                                    aria-current="page"
                                    href="/sales"
                                >
                                    <svg
                                        height="30px"
                                        width="30px"
                                        version="1.1"
                                        id="_x32_"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 512.00 512.00"
                                        xmlSpace="preserve"
                                        fill="#FFC107"
                                        stroke="#FFC107"
                                        strokeWidth="0.00512"
                                        transform="matrix(1, 0, 0, 1, 0, 0)"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <style
                                                type="text/css"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n                                            .st0 {\n                                                fill: #FFC107;\n                                            }\n                                        "
                                                }}
                                            />
                                            <g>
                                                <path
                                                    className="st0"
                                                    d="M512,255.994l-63.305-51.63l29-76.354l-80.636-13.07l-13.063-80.635l-76.364,29.006L255.997,0.014l-7.862,9.64 L204.36,63.312l-76.35-29.006l-13.073,80.635l-80.629,13.07l28.993,76.354L0,255.994l63.302,51.636L34.308,383.99l80.629,13.076 l13.07,80.629l76.354-29l51.636,63.291l51.636-63.291l76.364,29l13.063-80.629l80.642-13.076l-29.006-76.361L512,255.994z M449.885,367.934l-70.52,11.438l-11.423,70.512l-66.783-25.365l-45.161,55.362l-45.161-55.362l-66.774,25.365l-11.43-70.512 l-70.52-11.431l25.359-66.794L32.115,256l55.356-45.154l-25.359-66.781l70.52-11.43l11.43-70.513l66.774,25.359l45.161-55.356 l45.161,55.356l66.783-25.366l11.423,70.52l70.52,11.43l-25.359,66.781L479.882,256l-55.356,45.147L449.885,367.934z"
                                                ></path>
                                                <path
                                                    className="st0"
                                                    d="M224.434,224.523c-0.364-0.641-0.905-1.004-1.698-0.846l-14.271,2.808c-0.793,0.152-1.156,0.687-1.249,1.42 l-11.8,79.955c-0.093,0.727,0.224,1.137,1.018,0.978l14.833-2.914c0.793-0.159,1.176-0.582,1.242-1.428l1.658-14.318l26.958-5.299 l7.064,12.6c0.383,0.76,0.905,1.005,1.698,0.853l14.721-2.901c0.793-0.152,0.925-0.654,0.568-1.288L224.434,224.523z M216.023,275.108l3.416-28.676l0.344-0.066l14.028,25.246L216.023,275.108z"
                                                ></path>
                                                <path
                                                    className="st0"
                                                    d="M156.834,268.514l-4.183,0.232c-9.091,0.495-12.811-1.718-13.676-6.132c-0.958-4.869,1.856-9.072,8.656-10.406 c6.336-1.248,12.402-0.324,19.055,2.365c0.621,0.231,1.169,0.007,1.506-0.648l4.89-11.668c0.409-0.905,0.211-1.328-0.562-1.652 c-7.434-3.707-17.55-4.902-27.738-2.894c-16.651,3.27-25.445,14.767-22.663,28.926c2.676,13.591,12.838,19.227,28.894,18.309 l4.189-0.231c9.408-0.555,12.686,1.738,13.584,6.27c1.064,5.438-2.735,10.063-10.77,11.642c-8.153,1.606-15.824-0.886-21.724-3.965 c-0.648-0.343-1.328-0.211-1.672,0.456l-6.666,11.543c-0.443,0.786-0.053,1.539,0.489,1.903c7.136,4.592,19.736,7.057,31.741,4.691 c19.934-3.918,28.214-16.254,25.478-30.182C182.92,273.146,173.108,267.55,156.834,268.514z"
                                                ></path>
                                                <path
                                                    className="st0"
                                                    d="M325.007,268.151l-33.971,6.68l-0.813-0.549l-11.873-60.364c-0.133-0.688-0.668-1.051-1.348-0.912 l-14.384,2.828c-0.68,0.132-1.05,0.674-0.918,1.36l14.701,74.742c0.139,0.674,0.681,1.044,1.362,0.912l50.165-9.871 c0.688-0.132,1.044-0.674,0.912-1.354l-2.472-12.574C326.236,268.369,325.694,268.012,325.007,268.151z"
                                                ></path>
                                                <path
                                                    className="st0"
                                                    d="M386.62,256.496l-33.189,6.522l-0.812-0.535l-3.138-15.976l0.541-0.814l27.639-5.431 c0.674-0.132,1.044-0.674,0.905-1.354l-2.359-12.006c-0.132-0.674-0.68-1.037-1.354-0.905l-27.632,5.431l-0.819-0.541 l-3.007-15.289l0.549-0.82l33.189-6.528c0.674-0.133,1.037-0.674,0.905-1.354l-2.379-12.112c-0.138-0.687-0.68-1.05-1.354-0.912 l-49.383,9.706c-0.677,0.139-1.04,0.674-0.902,1.362l14.691,74.742c0.132,0.681,0.674,1.051,1.354,0.912l49.383-9.706 c0.674-0.139,1.037-0.681,0.905-1.362l-2.379-12.118C387.836,256.727,387.294,256.357,386.62,256.496z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                    Promoções
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + style.style_link_hover} href="/contact">
                                    <svg
                                        width="30px"
                                        height="30px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        fill="#000000"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <title />
                                            <g
                                                fill="none"
                                                fillRule="evenodd"
                                                id="页面-1"
                                                stroke="none"
                                                strokeWidth={1}
                                            >
                                                <g
                                                    id="导航图标"
                                                    transform="translate(-251.000000, -207.000000)"
                                                >
                                                    <g
                                                        id="编组"
                                                        transform="translate(251.000000, 207.000000)"
                                                    >
                                                        <rect
                                                            fill="#FFFFFF"
                                                            fillOpacity="0.01"
                                                            fillRule="nonzero"
                                                            height={24}
                                                            id="矩形"
                                                            width={24}
                                                            x={0}
                                                            y={0}
                                                        />
                                                        <path
                                                            d="M18,16 C20.20915,16 22,14.20915 22,12 C22,9.79085 20.20915,8 18,8"
                                                            id="路径"
                                                        />
                                                        <path
                                                            d="M18,16 L18,16 C20.20915,16 22,14.20915 22,12 C22,9.79085 20.20915,8 18,8"
                                                            id="路径"
                                                            stroke="#FFC107"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                        />
                                                        <path
                                                            d="M6,8 C3.79086,8 2,9.79085 2,12 C2,14.20915 3.79086,16 6,16"
                                                            id="路径"
                                                        />
                                                        <path
                                                            d="M6,8 C3.79086,8 2,9.79085 2,12 C2,14.20915 3.79086,16 6,16 L6,16"
                                                            id="路径"
                                                            stroke="#FFC107"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                        />
                                                        <path
                                                            d="M6,16 L6,15.75 L6,14.5 L6,12 L6,8 C6,4.68629 8.6863,2 12,2 C15.3137,2 18,4.68629 18,8 L18,16 C18,19.3137 15.3137,22 12,22"
                                                            id="路径"
                                                            stroke="#FFC107"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    Contato
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + style.style_link_hover} href="/destinys">
                                    <svg
                                        fill="#FFC107"
                                        width="30px"
                                        height="30px"
                                        viewBox="0 0 24.00 24.00"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="#FFC107"
                                        strokeWidth="0.00024000000000000003"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <g id="Plane">
                                                <path d="M11.9,20.936H10.85a.911.911,0,0,1-.9-1.023l.693-5.548H7.3l-.513.9a1.329,1.329,0,0,1-.992.657L5.1,16a.9.9,0,0,1-.8-.31.912.912,0,0,1-.185-.839l.774-2.769a.318.318,0,0,0,0-.173L4.114,9.145A.909.909,0,0,1,5.1,8l.695.083a1.331,1.331,0,0,1,.992.656l.513.9h3.34L9.946,4.088a.911.911,0,0,1,.9-1.024H11.9a1.327,1.327,0,0,1,1.236.857l2.144,5.714h1.046a8.5,8.5,0,0,1,1.758.184,2.166,2.166,0,0,1,1.429.9,2.209,2.209,0,0,1,.365,1.7A2.288,2.288,0,0,1,17.95,14.2l-.16.024a10.926,10.926,0,0,1-1.721.137h-.787l-2.144,5.714A1.327,1.327,0,0,1,11.9,20.936Zm-.951-1H11.9a.323.323,0,0,0,.3-.209l2.214-5.905a.71.71,0,0,1,.661-.457h.991a9.946,9.946,0,0,0,1.567-.125l.16-.025a1.3,1.3,0,0,0,1.1-.979,1.227,1.227,0,0,0-.2-.937,1.2,1.2,0,0,0-.793-.5,7.647,7.647,0,0,0-1.577-.167h-1.25a.711.711,0,0,1-.661-.456L12.2,4.273a.323.323,0,0,0-.3-.209h-.951l.722,5.778a.7.7,0,0,1-.7.793H7.127a.7.7,0,0,1-.614-.359l-.6-1.045a.32.32,0,0,0-.241-.16L5.113,9l.738,2.64a1.34,1.34,0,0,1,0,.711L5.113,15l.562-.067a.32.32,0,0,0,.241-.16l.6-1.049a.7.7,0,0,1,.612-.355h3.846a.7.7,0,0,1,.7.794ZM7.386,14.212l0,.005Zm3.295-.179v0Zm0-4.067v0Zm-3.3-.186,0,0Z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    Destinos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + style.style_link_hover} href="/cadastre-se">
                                    Cadastre-se
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + style.style_link_hover} href="/painel-de-controle/users">
                                    Painel de Controle
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}
