import React from 'react';

function App() {
  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://html-templates.evonicmedia.com/deskmates/assets/images/logo.svg"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-around"
            id="navbarScroll"
          >
            <ul
              className="navbar-nav my-2 my-lg-0 navbar-nav-scroll"
              style={{ '--bs-scroll-height': '100px' }}
            >
              {['Home', 'Spaces', 'Pricing', 'About', 'Pages'].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link px-3" href="#" style={{ fontWeight: 500 }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <form className="d-flex" role="search">
            <button className="btn bg-warning">
              <b>Join Now</b>
            </button>
          </form>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero container-fluid d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-around">
          <div className="col-6">
            <h1 className="h11 mb-3">
              Find perfect <span className="active-color">working space</span> near you!
            </h1>
            <p className="hero-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="col-5">
            <img
              src="https://html-templates.evonicmedia.com/deskmates/assets/images/index/hero-girl1.webp"
              alt="Hero Girl"
            />
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="logo py-5">
        <div
          className="container d-flex justify-content-center align-items-center flex-column"
          style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}
        >
          <h4 className="mb-4 mt-2">Member of our community</h4>
          <div className="imgslider d-flex justify-content-around row col-gap-1 row-gap-4">
            {['logoipsum5', 'logoipsum1', 'logoipsum2', 'logoipsum4'].map((logo, index) => (
              <img
                key={index}
                src={`https://html-templates.evonicmedia.com/deskmates/assets/images/slider/${logo}.svg`}
                alt={`Logo ${index + 1}`}
                className="col-xxl-3 col-md-6 col-sm-12"
                style={{ height: '45px', width: '304px' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="s1 container-fluid py-5">
        <div className="container text-center">
          <h2 className="work">
            Workspace <span className="active-color">Flexibility</span> At Its Best: <br /> Explore
            Our Features
          </h2>
          <p className="mt-2" style={{ fontSize: '16px', color: '#212529' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="row">
            {['amenities1', 'amenities2', 'amenities3', 'amenities4'].map((amenity, index) => (
              <div
                key={index}
                className="card col-xxl-3 col-lg-3 col-md-6 col-sm-12 py-4 text-center"
              >
                <img
                  src={`https://html-templates.evonicmedia.com/deskmates/assets/images/icon/${amenity}.svg`}
                  alt="Amenity Icon"
                />
                <h5 className="mt-2 mb-4 color-1">Event Access</h5>
                <p className="p1">
                  Lorem Ipsum is simply dummy text of the printing and huh typesetting industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="s2 container-fluid mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img src="" alt="Flexible Office Solutions" />
            </div>
            <div className="col-lg-6">
              <h2 className="flex">Flexible Office Solutions for Large Companies</h2>
              <p className="s2-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button className="btn-1 py-2 px-3">
                <a href="#">Book Now</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-fluid p-5" style={{ backgroundColor: '#22b0fc' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5>Opening Hours</h5>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <span>Monday - Friday</span>
                  <span>08.00 am - 10.00 pm</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Saturday</span>
                  <span>08.00 am - 10.00 pm</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Sunday</span>
                  <span>08.00 am - 10.00 pm</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h5>Contact Us</h5>
              <address>
                56/8, Los Angeles, Rochy Beach, Santa Monica, United States of America - 1205
              </address>
              <strong>Phone:</strong>
              <p>012-6532-568-9746</p>
              <p>012-6532-569-9748</p>
            </div>
            <div className="col-lg-4">
              <h5>Newsletter</h5>
              <p>You can trust us. We only send promo offers, not a single spam.</p>
              <div>
                <input type="email" placeholder="Your Email Address" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
