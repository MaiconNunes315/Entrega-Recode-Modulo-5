import React from 'react'

export default function Accordion({ title, content, collapsed, collapseNumber, expandBol, show }) {
    return (

        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={"accordion-button " + collapsed}//o primeiro não recebe collapse
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + collapseNumber}//collapseOne
                    aria-expanded={expandBol}//o primeiro recebe true e os outros false
                    aria-controls={collapseNumber}//collapseOne valor do collapseNumber
                >
                    {title}
                </button>
            </h2>
            <div
                id={collapseNumber}//id do collapse ex collapseOne
                className={"accordion-collapse collapse " + show}//apenas o primeiro recebe
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    {content}
                </div>
            </div>
        </div>




    )
}
