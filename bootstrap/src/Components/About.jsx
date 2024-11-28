import React from 'react'
import './Main.css';
import img2 from './photos/about.jpg'


export default function About() {
    return (
        <>
            <section id="about" className="about section">

                <div className="container" >
                    <div className="row gx-0">

                        <div className="col-lg-6 d-flex flex-column justify-content-center" >
                            <div className="content">
                                <h3>Who We Are</h3>
                                <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                                <p>
                                    Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                                </p>
                                <div className="text-center text-lg-start">
                                    <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex align-items-center">
                            <img src={img2} className="img-fluid" alt="" />
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
