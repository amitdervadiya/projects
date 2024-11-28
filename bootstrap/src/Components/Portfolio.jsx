import React from 'react'
import './Main.css'
import img8 from './photos/portfolio/app-1.jpg'
import img9 from './photos/portfolio/product-1.jpg'
import img10 from './photos/portfolio/branding-1.jpg'
import img11 from './photos/portfolio/books-1.jpg'
import img12 from './photos/portfolio/app-2.jpg'
import img13 from './photos/portfolio/branding-1.jpg'
import img14 from './photos/portfolio/branding-2.jpg'
import img15 from './photos/portfolio/books-2.jpg'
import img16 from './photos/portfolio/app-3.jpg'
import img17 from './photos/portfolio/product-3.jpg'
import img18 from './photos/portfolio/branding-3.jpg'
import img19 from './photos/portfolio/books-3.jpg'

export default function Portfolio() {
    return (
        <>


            <section id="portfolio" className="portfolio section">


                <div className="container section-title" >
                    <h2>Portfolio</h2>
                    <p>Check our latest work</p>
                </div>

                <div className="container">

                    <div className="isotope-layout" >

                        <ul className="portfolio-filters isotope-filters" >
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-product">Product</li>
                            <li data-filter=".filter-branding">branding</li>
                            <li data-filter=".filter-books">Books</li>
                        </ul>

                        <div className="row gy-4 isotope-container" >

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <div className="portfolio-content h-100">
                                    <img src={img8} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img8} title="App 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <div className="portfolio-content h-100">
                                    <img src={img9} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Product 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img9} title="Product 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <div className="portfolio-content h-100">
                                    <img src={img10} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>branding 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img10} title="branding 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                <div className="portfolio-content h-100">
                                    <img src={img11} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Books 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img11} title="branding 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <div className="portfolio-content h-100">
                                    <img src={img12} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img12} title="App 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <div className="portfolio-content h-100">
                                    <img src={img13} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Product 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img13} title="Product 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <div className="portfolio-content h-100">
                                    <img src={img14} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>branding 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img14} title="branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                <div className="portfolio-content h-100">
                                    <img src={img15} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Books 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img15} title="branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <div className="portfolio-content h-100">
                                    <img src={img16} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img16} title="App 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <div className="portfolio-content h-100">
                                    <img src={img17} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Product 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img17} title="Product 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <div className="portfolio-content h-100">
                                    <img src={img18} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>branding 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img18} title="branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                <div className="portfolio-content h-100">
                                    <img src={img19} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Books 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href={img19} title="branding 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
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
