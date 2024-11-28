import React from 'react'
import './Main.css'
import blog from './photos/blog/blog-1.jpg'
import blog1 from './photos/blog/blog-2.jpg'
import blog2 from './photos/blog/blog-3.jpg'
export default function Post() {
    return (
        <>  <section id="recent-posts" className="recent-posts section">


            <div className="container section-title" >
                <h2>Recent Posts</h2>
                <p>Recent posts form our Blog</p>
            </div>

            <div className="container">

                <div className="row gy-5">

                    <div className="col-xl-4 col-md-6">
                        <div className="post-item position-relative h-100" >

                            <div className="post-img position-relative overflow-hidden">
                                <img src={blog} className="img-fluid" alt="" />
                                <span className="post-date">December 12</span>
                            </div>

                            <div className="post-content d-flex flex-column">

                                <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>

                                <div className="meta d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                                    </div>
                                </div>

                                <hr />

                                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="post-item position-relative h-100" >

                            <div className="post-img position-relative overflow-hidden">
                                <img src={blog1} className="img-fluid" alt="" />
                                <span className="post-date">July 17</span>
                            </div>

                            <div className="post-content d-flex flex-column">

                                <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>

                                <div className="meta d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">Mario Douglas</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                                    </div>
                                </div>

                                <hr />

                                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6" >
                        <div className="post-item position-relative h-100">

                            <div className="post-img position-relative overflow-hidden">
                                <img src={blog2} className="img-fluid" alt="" />
                                <span className="post-date">September 05</span>
                            </div>

                            <div className="post-content d-flex flex-column">

                                <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>

                                <div className="meta d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">Lisa Hunter</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                                    </div>
                                </div>

                                <hr />

                                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
        </>
    )
}
