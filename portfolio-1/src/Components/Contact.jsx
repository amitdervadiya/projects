import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Header from './Header'

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
          <Header/>

            <div className="container c1 bg-black" data-aos="fade-up">
                <div className="row contact-row">
                    <div className="col-lg-6 c2" data-aos="fade-right">
                        <h1 className='font-semibold heading-3 '>Let's work together</h1>
                        <p className='text-white'>Lorem ipsum dolor, sit amet  Incidunt architecto offic
                                      quaerat reprehenderit rem excepturi?</p>
                        <div className="col-lg-12 data" data-aos="zoom-in">
                            <div className="row input-row">  <input type="text" className='inputs focus1 ' placeholder='first name' />
                            <input type="text" className='inputs focus1' placeholder='last name' /></div>
                          <div className="row input-row">
                          <input type="email" className='inputs focus1' placeholder='email address' />
                          <input type="number" className='inputs focus1' placeholder='phone number' />
                          </div>
                           
                            {/* <select name="" id="service" className='focus1'>
                                <option value="" selected>select service</option>
                                <option value="">frontend development</option>
                                <option value="">backend development</option>
                                <option value="">fullstack development</option>
                            </select> */}
                            <textarea name="" id="message" className='focus1' alt="message" placeholder='message' data-aos="fade-up">
                          
                            </textarea>
                            <button className='send' data-aos="zoom-in">send</button>
                        </div>

                    </div>
                    <div className="col-lg-5 c3 md-12" data-aos="fade-left">
                        <div className="contact-details">
                            <div className="info-c" data-aos="zoom-in">
                                <div className="square">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="info-value">
                                    <span className='in-1'>Phone</span>
                                    <br />
                                    <span className='in-2'>(+91) 6356366560</span>
                                </div>
                            </div>
                            <div className="info-c" data-aos="zoom-in">
                                <div className="square">
                                <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div className="info-value">
                                    <span className='in-1'>email</span>
                                    <br />
                                    <span className='in-2'>amitdervadiya@gmail.com</span>
                                </div>
                            </div>
                            <div className="info-c" data-aos="zoom-in">
                                <div className="square">
                                <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="info-value">
                                    <span className='in-1'>Address</span>
                                    <br />
                                    <span className='in-2'>virpur,gujarat 360380</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
