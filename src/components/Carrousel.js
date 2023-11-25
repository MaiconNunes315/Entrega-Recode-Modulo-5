import React from 'react'

export default function Carrousel() {
    return (
        <section className="container mx-auto" >
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="images/print.png"
                            className="d-block w-100"
                            alt="..."

                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="images/print2.png"
                            className="d-block w-100"
                            alt="..."

                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="images/print3.png"
                            className="d-block w-100"
                            alt="..."

                        />
                    </div>
                </div>
            </div>
        </section>

    )
}
