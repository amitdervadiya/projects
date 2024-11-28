import React from 'react'

export default function Main() {
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">

                    <a href="index.html" className="logo d-flex align-items-center me-auto">
                        <img src="assets/img/logo.png" alt="" />
                        <h1 className="sitename">FlexStart</h1>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="#hero" className="active">Home<br /></a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li>
                            <li className="listing-dropdown"><a href="#"><span>Listing Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">Column 1 link 1</a>
                                        <a href="#">Column 1 link 2</a>
                                        <a href="#">Column 1 link 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Column 2 link 1</a>
                                        <a href="#">Column 2 link 2</a>
                                        <a href="#">Column 3 link 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Column 3 link 1</a>
                                        <a href="#">Column 3 link 2</a>
                                        <a href="#">Column 3 link 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Column 4 link 1</a>
                                        <a href="#">Column 4 link 2</a>
                                        <a href="#">Column 4 link 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Column 5 link 1</a>
                                        <a href="#">Column 5 link 2</a>
                                        <a href="#">Column 5 link 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <a className="btn-getstarted flex-md-shrink-0" href="index.html#about">Get Started</a>

                </div>
            </header>

            <main className="main">

                <section id="hero" className="hero section">

                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
                                <p data-aos="fade-up" data-aos-delay="100">We are team of talented designers making websites with Bootstrap</p>
                                <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                                    <a href="#about" className="btn-get-started">Get Started <i className="bi bi-arrow-right"></i></a>
                                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                                <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                            </div>
                        </div>
                    </div>

                </section>


                <section id="about" className="about section">

                    <div className="container" data-aos="fade-up">
                        <div className="row gx-0">

                            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
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

                            <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            </div>

                        </div>
                    </div>

                </section>


                <section id="values" className="values section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Our Values</h2>
                        <p>What we value most<br /></p>
                    </div>

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="card">
                                    <img src="assets/img/values-1.png" className="img-fluid" alt="" />
                                    <h3>Ad cupiditate sed est odio</h3>
                                    <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                                </div>
                            </div>

                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="card">
                                    <img src="assets/img/values-2.png" className="img-fluid" alt="" />
                                    <h3>Voluptatem voluptatum alias</h3>
                                    <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                                </div>
                            </div>

                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="card">
                                    <img src="assets/img/values-3.png" className="img-fluid" alt="" />
                                    <h3>Fugit cupiditate alias nobis.</h3>
                                    <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                <section id="stats" className="stats section">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="bi bi-journal-richtext color-orange flex-shrink-0" style="color: #ee6c20;"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Projects</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="bi bi-headset color-green flex-shrink-0" style="color: #15be56;"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Hours Of Support</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="bi bi-people color-pink flex-shrink-0" style="color: #bb0852;"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Hard Workers</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                <section id="features" className="features section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Features</h2>
                        <p>Our Advacedd Features<br /></p>
                    </div>

                    <div className="container">

                        <div className="row gy-5">

                            <div className="col-xl-6" data-aos="zoom-out" data-aos-delay="100">
                                <img src="assets/img/features.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-6 d-flex">
                                <div className="row align-self-center gy-4">

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Eos aspernatur rem</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Facilis neque ipsa</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Volup amet volupt</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Rerum omnis sint</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Alias possimus</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
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

                <section id="alt-features" className="alt-features section">

                    <div className="container">

                        <div className="row gy-5">

                            <div className="col-xl-7 d-flex order-2 order-xl-1" data-aos="fade-up" data-aos-delay="200">

                                <div className="row align-self-center gy-5">

                                    <div className="col-md-6 icon-box">
                                        <i className="bi bi-award"></i>
                                        <div>
                                            <h4>Corporis voluptates sit</h4>
                                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 icon-box">
                                        <i className="bi bi-card-checklist"></i>
                                        <div>
                                            <h4>Ullamco laboris nisi</h4>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 icon-box">
                                        <i className="bi bi-dribbble"></i>
                                        <div>
                                            <h4>Labore consequatur</h4>
                                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                        </div>
                                    </div>


                                    <div className="col-md-6 icon-box">
                                        <i className="bi bi-filter-circle"></i>
                                        <div>
                                            <h4>Beatae veritatis</h4>
                                            <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 icon-box">
                                        <i className="bi bi-lightning-charge"></i>
                                        <div>
                                            <h4>Molestiae dolor</h4>
                                            <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 icon-box">
                                        <i className="bi bi-patch-check"></i>
                                        <div>
                                            <h4>Explicabo consectetur</h4>
                                            <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="col-xl-5 d-flex align-items-center order-1 order-xl-2" data-aos="fade-up" data-aos-delay="100">
                                <img src="assets/img/alt-features.png" className="img-fluid" alt="" />
                            </div>

                        </div>

                    </div>

                </section>


                <section id="services" className="services section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Services</h2>
                        <p>Check Our Services<br /></p>
                    </div>

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="service-item item-cyan position-relative">
                                    <i className="bi bi-activity icon"></i>
                                    <h3>Nesciunt Mete</h3>
                                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                                    <a href="#" className="read-more stretched-link"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-item item-orange position-relative">
                                    <i className="bi bi-br/oadcast icon"></i>
                                    <h3>Eosle Commodi</h3>
                                    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                                    <a href="#" className="read-more stretched-link"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item item-teal position-relative">
                                    <i className="bi bi-easel icon"></i>
                                    <h3>Ledo Markt</h3>
                                    <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                                    <a href="#" className="read-more stretched-link"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-item item-red position-relative">
                                    <i className="bi bi-bounding-box-circles icon"></i>
                                    <h3>Asperiores Commodi</h3>
                                    <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                                    <a href="#" className="read-more stretched-link"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="service-item item-indigo position-relative">
                                    <i className="bi bi-calendar4-week icon"></i>
                                    <h3>Velit Doloremque.</h3>
                                    <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                                    <a href="#" className="read-more stretched-link"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="service-item item-pink position-relative">
                                    <i className="bi bi-chat-square-text icon"></i>
                                    <h3>Dolori Architecto</h3>
                                    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                                    <a href="#" className="read-more stretched-link"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                <section id="pricing" className="pricing section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Pricing</h2>
                        <p>Check Our Affordable Pricing<br /></p>
                    </div>

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                                <div className="pricing-tem">
                                    <h3 style="color: #20c997;">Free Plan</h3>
                                    <div className="price"><sup>$</sup>0<span> / mo</span></div>
                                    <div className="icon">
                                        <i className="bi bi-box" style="color: #20c997;"></i>
                                    </div>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li className="na">Pharetra massa</li>
                                        <li className="na">Massa ultricies mi</li>
                                    </ul>
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                                <div className="pricing-tem">
                                    <span className="featured">Featured</span>
                                    <h3 style="color: #0dcaf0;">Starter Plan</h3>
                                    <div className="price"><sup>$</sup>19<span> / mo</span></div>
                                    <div className="icon">
                                        <i className="bi bi-send" style="color: #0dcaf0;"></i>
                                    </div>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li>Pharetra massa</li>
                                        <li className="na">Massa ultricies mi</li>
                                    </ul>
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                                <div className="pricing-tem">
                                    <h3 style="color: #fd7e14;">Business Plan</h3>
                                    <div className="price"><sup>$</sup>29<span> / mo</span></div>
                                    <div className="icon">
                                        <i className="bi bi-airplane" style="color: #fd7e14;"></i>
                                    </div>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li>Pharetra massa</li>
                                        <li>Massa ultricies mi</li>
                                    </ul>
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                                <div className="pricing-tem">
                                    <h3 style="color: #0d6efd;">Ultimate Plan</h3>
                                    <div className="price"><sup>$</sup>49<span> / mo</span></div>
                                    <div className="icon">
                                        <i className="bi bi-rocket" style="color: #0d6efd;"></i>
                                    </div>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li>Pharetra massa</li>
                                        <li>Massa ultricies mi</li>
                                    </ul>
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                <section id="faq" className="faq section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>F.A.Q</h2>
                        <p>Frequently Asked Questions</p>
                    </div>

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                                <div className="faq-container">

                                    <div className="faq-item faq-active">
                                        <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                                        <div className="faq-content">
                                            <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                                        </div>
                                        <i className="faq-toggle bi bi-chevron-right"></i>
                                    </div>

                                    <div className="faq-item">
                                        <h3>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3>
                                        <div className="faq-content">
                                            <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                                        </div>
                                        <i className="faq-toggle bi bi-chevron-right"></i>
                                    </div>

                                    <div className="faq-item">
                                        <h3>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                                        <div className="faq-content">
                                            <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                                        </div>
                                        <i className="faq-toggle bi bi-chevron-right"></i>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">

                                <div className="faq-container">

                                    <div className="faq-item">
                                        <h3>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h3>
                                        <div className="faq-content">
                                            <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                                        </div>
                                        <i className="faq-toggle bi bi-chevron-right"></i>
                                    </div>

                                    <div className="faq-item">
                                        <h3>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h3>
                                        <div className="faq-content">
                                            <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                                        </div>
                                        <i className="faq-toggle bi bi-chevron-right"></i>
                                    </div>

                                    <div className="faq-item">
                                        <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                                        <div className="faq-content">
                                            <p>Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.</p>
                                        </div>
                                        <i className="faq-toggle bi bi-chevron-right"></i>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                <section id="portfolio" className="portfolio section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Portfolio</h2>
                        <p>Check our latest work</p>
                    </div>

                    <div className="container">

                        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-product">Product</li>
                                <li data-filter=".filter-br/anding">br/anding</li>
                                <li data-filter=".filter-books">Books</li>
                            </ul>

                            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Product 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-br/anding">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/br/anding-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>br/anding 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/br/anding-1.jpg" title="br/anding 1" data-gallery="portfolio-gallery-br/anding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Books 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/books-1.jpg" title="br/anding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Product 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-br/anding">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/br/anding-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>br/anding 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/br/anding-2.jpg" title="br/anding 2" data-gallery="portfolio-gallery-br/anding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Books 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/books-2.jpg" title="br/anding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Product 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-br/anding">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/br/anding-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>br/anding 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/br/anding-3.jpg" title="br/anding 2" data-gallery="portfolio-gallery-br/anding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Books 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/portfolio/books-3.jpg" title="br/anding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* <section id="testimonials" className="testimonials section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Testimonials</h2>
                        <p>What they are saying about us<br /></p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="swiper init-swiper">
                            <script type="application/json" className="swiper-config">
                                {
                                    "loop": true,
                                "speed": 600,
                                "autoplay": {
                                    "delay": 5000
              },
                                "slidesPerView": "auto",
                                "pagination": {
                                    "el": ".swiper-pagination",
                                "type": "bullets",
                                "clickable": true
              },
                                "br/eakpoints": {
                                    "320": {
                                    "slidesPerView": 1,
                                "spaceBetween": 40
                },
                                "1200": {
                                    "slidesPerView": 3,
                                "spaceBetween": 1
                }
              }
            }
                            </script>
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                            <h3>Matt br/andon</h3>
                                            <h4>Freelancer</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>

                </section> */}


                <section id="team" className="team section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Team</h2>
                        <p>Our hard working team</p>
                    </div>

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                        <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                        <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                        <p>Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                {/* <section id="clients" className="clients section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Clients</h2>
                        <p>We work with best clients<br /></p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="swiper init-swiper">
                            <script type="application/json" className="swiper-config">
                                {
                                    "loop": true,
                                "speed": 600,
                                "autoplay": {
                                    "delay": 5000
              },
                                "slidesPerView": "auto",
                                "pagination": {
                                    "el": ".swiper-pagination",
                                "type": "bullets",
                                "clickable": true
              },
                                "br/eakpoints": {
                                    "320": {
                                    "slidesPerView": 2,
                                "spaceBetween": 40
                },
                                "480": {
                                    "slidesPerView": 3,
                                "spaceBetween": 60
                },
                                "640": {
                                    "slidesPerView": 4,
                                "spaceBetween": 80
                },
                                "992": {
                                    "slidesPerView": 6,
                                "spaceBetween": 120
                }
              }
            }
                            </script>
                            <div className="swiper-wrapper align-items-center">
                                <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>

                </section>  */}


                <section id="recent-posts" className="recent-posts section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Recent Posts</h2>
                        <p>Recent posts form our Blog</p>
                    </div>

                    <div className="container">

                        <div className="row gy-5">

                            <div className="col-xl-4 col-md-6">
                                <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="100">

                                    <div className="post-img position-relative overflow-hidden">
                                        <img src="assets/img/blog/blog-1.jpg" className="img-fluid" alt="" />
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
                                <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="200">

                                    <div className="post-img position-relative overflow-hidden">
                                        <img src="assets/img/blog/blog-2.jpg" className="img-fluid" alt="" />
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
                            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="post-item position-relative h-100">

                                    <div className="post-img position-relative overflow-hidden">
                                        <img src="assets/img/blog/blog-3.jpg" className="img-fluid" alt="" />
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

                <section id="contact" className="contact section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">

                            <div className="col-lg-6">

                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay="200">
                                            <i className="bi bi-geo-alt"></i>
                                            <h3>Address</h3>
                                            <p>A108 Adam Street</p>
                                            <p>New York, NY 535022</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay="300">
                                            <i className="bi bi-telephone"></i>
                                            <h3>Call Us</h3>
                                            <p>+1 5589 55488 55</p>
                                            <p>+1 6678 254445 41</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay="400">
                                            <i className="bi bi-envelope"></i>
                                            <h3>Email Us</h3>
                                            <p>info@example.com</p>
                                            <p>contact@example.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-item" data-aos="fade" data-aos-delay="500">
                                            <i className="bi bi-clock"></i>
                                            <h3>Open Hours</h3>
                                            <p>Monday - Friday</p>
                                            <p>9:00AM - 05:00PM</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                    <div className="row gy-4">

                                        <div className="col-md-6">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                                        </div>

                                        <div className="col-md-6 ">
                                            <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                                        </div>

                                        <div className="col-12">
                                            <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                                        </div>

                                        <div className="col-12">
                                            <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                        </div>

                                        <div className="col-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>

                                            <button type="submit">Send Message</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </section>

            </main>

            <footer id="footer" className="footer">

                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                                <form action="forms/newsletter.php" method="post" className="php-email-form">
                                    <div className="newsletter-form"><input type="email" name="email" /><input type="submit" value="Subscribe" /></div>
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a href="index.html" className="d-flex align-items-center">
                                <span className="sitename">FlexStart</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>A108 Adam Street</p>
                                <p>New York, NY 535022</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                                <p><strong>Email:</strong> <span>info@example.com</span></p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <h4>Follow Us</h4>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                            <div className="social-links d-flex">
                                <a href=""><i className="bi bi-twitter-x"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">FlexStart</strong> <span>All Rights Reserved</span></p>
                    <div className="credits">

                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>

            </footer>
        </>
    )
}
