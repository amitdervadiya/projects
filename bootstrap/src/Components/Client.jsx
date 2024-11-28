import React, { useEffect } from 'react';
import './Main.css';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
import client1 from './photos/clients/client-1.png';
import client2 from './photos/clients/client-2.png';
import client3 from './photos/clients/client-3.png';
import client4 from './photos/clients/client-4.png';
import client5 from './photos/clients/client-5.png';
import client6 from './photos/clients/client-6.png';
import client7 from './photos/clients/client-7.png';
import client8 from './photos/clients/client-8.png';

export default function Client() {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 600,
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 80,
                },
                992: {
                    slidesPerView: 6,
                    spaceBetween: 120,
                },
            },
        });

        return () => {
            if (swiper) swiper.destroy();
        };
    }, []);

    return (
        <section id="clients" className="clients section">
            <div className="container section-title">
                <h2>Clients</h2>
                <p>We work with the best clients<br /></p>
            </div>

            <div className="container">
                <div className="swiper init-swiper swiper-config">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide"><img src={client1} className="img-fluid" alt="Client 1" /></div>
                        <div className="swiper-slide"><img src={client2} className="img-fluid" alt="Client 2" /></div>
                        <div className="swiper-slide"><img src={client3} className="img-fluid" alt="Client 3" /></div>
                        <div className="swiper-slide"><img src={client4} className="img-fluid" alt="Client 4" /></div>
                        <div className="swiper-slide"><img src={client5} className="img-fluid" alt="Client 5" /></div>
                        <div className="swiper-slide"><img src={client6} className="img-fluid" alt="Client 6" /></div>
                        <div className="swiper-slide"><img src={client7} className="img-fluid" alt="Client 7" /></div>
                        <div className="swiper-slide"><img src={client8} className="img-fluid" alt="Client 8" /></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}
