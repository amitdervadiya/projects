import React from 'react'
import './Main.css'
import img6 from './photos/features.png'


export default function Features() {
    return (
        <>
            <section id="features" className="features section">


                <div className="container section-title">
                    <h2>Features</h2>
                    <p>Our Advacedd Features<br /></p>
                </div>

                <div className="container">

                    <div className="row gy-5">

                        <div className="col-xl-6">
                            <img src={img6} className="img-fluid" alt="" />
                        </div>

                        <div className="col-xl-6 d-flex">
                            <div className="row align-self-center gy-4">

                                <div className="col-md-6" >
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Eos aspernatur rem</h3>
                                    </div>
                                </div>

                                <div className="col-md-6" >
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Facilis neque ipsa</h3>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Volup amet volupt</h3>
                                    </div>
                                </div>

                                <div className="col-md-6" >
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Rerum omnis sint</h3>
                                    </div>
                                </div>

                                <div className="col-md-6" >
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Alias possimus</h3>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Repellendus molli</h3>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
