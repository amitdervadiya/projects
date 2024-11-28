import React from 'react'
import './Main.css';
import img3 from './photos/values-1.png'
import img4 from './photos/values-2.png'
import img5 from './photos/values-3.png'

export default function Values() {
    return (
        <>
            <section id="values" className="values section">


                <div className="container section-title" >
                    <h2>Our Values</h2>
                    <p>What we value most<br /></p>
                </div>

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-4">
                            <div className="card">
                                <img src={img3} className="img-fluid" alt="" />
                                <h3>Ad cupiditate sed est odio</h3>
                                <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card">
                                <img src={img4} className="img-fluid" alt="" />
                                <h3>Voluptatem voluptatum alias</h3>
                                <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                            </div>
                        </div>

                        <div className="col-lg-4" >
                            <div className="card">
                                <img src={img5} className="img-fluid" alt="" />
                                <h3>Fugit cupiditate alias nobis.</h3>
                                <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section></>
    )
}
