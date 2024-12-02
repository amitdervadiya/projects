import React from "react";

export default function Hero() {
    return (
        <div className="container hero overflow-hidden">
            <div className="row">
                <div className="col-md-12 col-lg-6 part-1 gap-7 col-sm-12">
                    <span className="white">Web developer</span>
                    <h1 className="size">Hello I'm</h1>
                    <h2 className="size1">Amit Dervadiya</h2>
                    <p className="white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse,
                        tenetur quia repellendus in iusto laudantium impedit eligendi, eaque nam
                        veritatis molestiae facilis asperiores suscipit ea sint, earum libero at!
                    </p>
                    <div className="links">
                        <div className="link1">
                            <a href="#" className="link-d">
                                Download cv <i className="fa-solid fa-download"></i>
                            </a>
                        </div>
                        <div className="link2">
                            <div className="round">
                                <a href="https://github.com/amitdervadiya">  <i className="fa-brands fa-github"></i></a>

                            </div>
                            <div className="round">
                                <a href="https://www.linkedin.com/in/dervadiya-amit-12353332b/">  <i className="fa-brands fa-linkedin-in"></i></a>

                            </div>
                            <div className="round">
                                <a href="https://www.youtube.com/">  <i className="fa-brands fa-youtube"></i></a>

                            </div>
                            <div className="round">
                                <a href="https://x.com/?lang=en">  <i className="fa-brands fa-twitter"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 part-2 sm:order-1 lg:order-none col-sm-12 ">
                    <svg width="400" height="400" className="keycircle">
                        <circle cx="200" cy="200" r="180" className="circle"></circle>
                    </svg>
                </div>
            </div>
        </div>
    );
}
