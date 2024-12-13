import React from 'react';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
        <div className="container">
            <a className="navbar-brand" href="#">
              <img              src="https://html-templates.evonicmedia.com/deskmates/assets/images/logo.svg" alt=""/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse d-flex justify-content-center align-items-center justify-content-around">
                <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li className="nav-item">
                        <a className="nav-link px-3" href="#" style="color: #ff6a58;font-weight: 500;">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3" href="#" style="font-weight: 500;">Spaces</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3" href="#" style="font-weight: 500;">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3" href="#" style="font-weight: 500;">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3" href="#" style="font-weight: 500;">Pages</a>
                    </li>

                    </li>

                </ul>

            </div>
            <form className="d-flex" role="search">

                <button className="btn bt-0 bg-warning"><b>Join Now</b></button>
            </form>
        </div>
    </nav>

    <div className="hero container-fluid d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center justify-content-around ">
            <div className="col-6 ">
                <h1 className="h11 mb-3">Find perfect <span className="active-color">working space</span> near by you!</h1>
                <p className="hero-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>
            </div>
            <div className="col-5">
                <img src="https://html-templates.evonicmedia.com/deskmates/assets/images/index/hero-girl1.webp" alt="" />
            </div>


        </div>
    </div>
    <div className="logo py-5">
        <div className="container d-flex justify-content-center align-items-center flex-column"
            style="border-top: 1px solid black;border-bottom: 1px solid black; ">
            <h4 className="mb-4 mt-2">Member of our community</h4>

            <div className="imgslider d-flex justify-content-around align-items-center my-4 row col-gap-1 row-gap-4">
                <img src="https://html-templates.evonicmedia.com/deskmates/assets/images/slider/logoipsum5.svg" alt=""
                    className="col-xxl-3 col-md-3 col-md-6 col-sm-12" style="height: 45px;width: 304px;">

                <img src="https://html-templates.evonicmedia.com/deskmates/assets/images/slider/logoipsum1.svg" alt=""
                    className="col-xxl-3 col-md-3 col-md-6 col-sm-12" style="height: 44px;width: 304px;">
                <img src="https://html-templates.evonicmedia.com/deskmates/assets/images/slider/logoipsum2.svg" alt=""
                    className="col-xxl-3 col-md-3 col-md-6 col-sm-12" style="height: 31px;width: 304px;">
                <img src="https://html-templates.evonicmedia.com/deskmates/assets/images/slider/logoipsum4.svg" alt=""
                    className="col-xxl-3 col-md-3 col-md-6 col-sm-12" style="height: 44px;width: 304px;">

            </div>
        </div>
    </div>

    <section className="s1 container-fluid  py-5">
        <div className="container d-flex justify-content-center align-items-center text-center flex-column">
            <h2 className="work">Workspace <span className="active-color">Flexibility</span> At Its Best: <br> Explore Our
                Features </h2>

            <p style="font-size: 16px;color: #212529;" className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard <br> dummy text.
            </p>


            <div className="slick-track-1 d-flex justify-content-center align-items-center row">

                <div className="card d-flex justify-content-center align-items-center col-xxl-3 col-lg-3 col-md-6 col-sm-12 
                     py-4">
                    <img src="https://html-templates.evonicmedia.com/deskmates/assets/images/icon/amenities1.svg"
                        alt="">
                    <h5 className="mt-2 mb-4 color-1">Event access</h5>

                    <p className="p1">Lorem Ipsum is simply dummy text of the printing and huh typesetting
                        industry.</p>

                </div>
                <div
                    className="card d-flex justify-content-center align-items-center col-xxl-3 col-lg-3 col-md-6 col-sm-12 py-4">
                    <img src="https://html-templates.evonicmedia.com/deskmates/assets/images/icon/amenities2.svg"
                        alt="">
                    <h5 className="mt-2 mb-4 color-1">Event access</h5>

                    <p className="p1">Lorem Ipsum is simply dummy text of the printing and huh typesetting
                        industry.</p>

                </div>
                <div
                    className="card d-flex justify-content-center align-items-center col-xxl-3 col-lg-3 col-md-6 col-sm-12 py-4">
                    <img src="https://html-templates.evonicmedia.com/deskmates/assets/images/icon/amenities3.svg"
                        alt="">
                    <h5 className="mt-2 mb-4 color-1">Event access</h5>

                    <p className="p1">Lorem Ipsum is simply dummy text of the printing and huh typesetting
                        industry.</p>

                </div>
                <div
                    className="card d-flex justify-content-center align-items-center col-xxl-3 col-lg-3 col-md-6 col-sm-12 py-4">
                    <img src="https://html-templates.evonicmedia.com/deskmates/assets/images/icon/amenities4.svg"
                        alt="">
                    <h5 className="mt-2 mb-4 color-1">Event access</h5>

                    <p className="p1">Lorem Ipsum is simply dummy text of the printing and huh typesetting
                        industry.</p>
                </div>
            </div>
        </div>

    </section>

    <div className="container">
        <div className="row">
            <div className="col-12 col-md-4">
                <center>
                    <div className="fruit">

                    </div>
                    <div className="vegetable">

                    </div>
                </center>
            </div>

            <div className="col-12 col-md-4">
                <div className="sec2">
                    <center>

                    </center>
                </div>
            </div>

            <div className="col-12 col-md-4">
                <center>
                    <div className="juise">

                    </div>
                    <div className="dried">

                    </div>
                </center>
            </div>
        </div>
    </div>

    <section className="s2 container-fluid d-flex justify-content-center align-items-center mt-5">
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-xxl-6 col-lg-6 col-md-8 col-sm-12  d-flex justify-content-center align-items-center">
                    <div className="im">

                    </div>
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12 ">
                    <h2 className="flex">Flexible Office Solutions for Large Companies</h2>
                    <p className="s2-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been
                        the industry's standard dummy text. </p>


                    <button className="btn-1 py-2 px-3" attr="Book Now">
                        <a href="">Book Now</a>
                    </button>
                </div>

            </div>
        </div>
    </section>

    <section className="s3 container-fluid d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="container">


            <div className="row">
                <div className="col-xxl-6 d-flex justify-content-center  flex-column col-lg-6 col-md-6 col-sm-12">
                    <h2 className="h21 mb-2">Come & Find Your Favourite<span>Place</span></h2>
                    <p className="find-p mb-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text.
                    </p>

                    <button className="bt12">
                        <a href="">Find More Features</a>
                    </button>
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact-email">
                        <h4 className="mb-3">BOOK YOUR TRIAL, IT'S FREE.</h4>

                        <form action="" className="">
                            <div className="row justify-content-center gap-3">
                                <input className="col-md-5 col-sm-12 col-12 border-none" placeholder="First Name">
                                <input type="text" name="L-Name" autocomplete="on" id="email"
                                    className="col-md-5 col-sm-12 col-12" placeholder="Last Name" required="">
                                <input type="email" name="email" autocomplete="on" id="number"
                                    className="col-md-5 col-sm-12 col-12" placeholder="Email Address" required="">
                                <input type="number" name="number" autocomplete="on" id="subject"
                                    className="col-md-5 col-sm-12 col-12" placeholder="Phone Number" required="">
                                <textarea className="col-md-11 col-10" name="massage" id="massage" cols="" rows="8"
                                    placeholder="Write here message"></textarea>

                                <div className="btn-2 d-flex justify-content-center fw-bold mx-3">
                                    <a href="" className="align-self-center">Book A Tour</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div className="container-fluid p-5 d-flex justify-content-center align-items-center"
        style="background-color:#22b0fc;margin-top: 250px;">
        <div className="container p-5">
            <div className="row">
                <div className="col col-12 col-lg-4 col-sm-12 d-flex justify-content-start flex-column ">
                    <label for="" style="color: white;font-size: 18px;"><b>Opening Hours </b></label>
                    <div className="col col-12 d-flex mt-3">

                        <div className="col col-12 d-flex justify-content-between white "
                            style="border-bottom: 1px solid white;">
                            <span className="mb-2">Monday - Friday</span>
                            <span>08.00 am - 10.00 pm</span>
                        </div>



                    </div>
                    <div className="col col-12 d-flex mt-3">





                        <div className="col col-12 d-flex justify-content-between white"
                            style="border-bottom: 1px solid white;">
                            <span className="mb-2">Saturday</span>

                            <span>08.00 am - 10.00 pm</span>
                        </div>



                    </div>
                    <div className="col col-12 d-flex mt-3 mb-3">






                        <div className="col col-12 d-flex justify-content-between white"
                            style="border-bottom: 1px solid white;">
                            <span className="mb-2">Sunday</span>

                            <span>08.00 am - 10.00 pm</span>
                        </div>



                    </div>

                </div>







                <div className="col col-12 col-lg-4 col-sm-12 d-flex flex-column justify-content-evenly">

                    <label for="" style="color: white;font-size: 18px;"><b>Contact us</b></label>

                    <div className="col col-12 d-flex mt-2">


                        <div className="col col-12 d-flex justify-content-between white">
                            <p style="color: white;"> 56/8, los angeles, rochy beach, Santa monica, United states of
                                america - 1205 </p>


                        </div>


                    </div>

                    <div className="col col-12 d-flex mt-2">


                        <div className="col col-12  white" style="font-size: 24px;font-weight: bold;">
                            <span> 012-6532-568-9746 </span>
                            <br><span> 012-6532-569-9748 </span>
                        </div>


                    </div>


                </div>

                <div className="col col-12 col-lg-4 col-sm-12 pt-1 pb-3 ">
                    <label for="" style="color: white;font-size: 18px;"><b>News sellter</b></label>
                    <p style="color: white;">You can trust us. we only send promo offers, not a single spam.</p>


                    <div className="in1">
                        <span>your Email address</span>
                        <div className="sidearrow">
                            <i className="fa-solid fa-arrow-right" id="sidearrow"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  );
}

export default App;
