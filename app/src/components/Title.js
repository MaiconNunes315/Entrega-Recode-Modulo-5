import React from 'react'

export default function Title({ title, link }) {
    return (
        <div className="d-flex justify-content-between mx-5">
            <h4>{title}</h4>
            <a
                className="link icon icon-link-hover text-decoration-none"
                href={link}
            >
                Ver mais
                <img
                    className="img_link bi"
                    aria-hidden="true"
                    src="images/seta.png"
                    alt=""
                />
            </a>
        </div>
    )
}
