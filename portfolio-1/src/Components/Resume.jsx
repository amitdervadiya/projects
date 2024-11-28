import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Two from './Two';
import { useNavigate } from 'react-router-dom';
import Three from './Three';
import Four from './Four';
import Header from './Header';

export default function Resume() {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState('Two');

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const navigateToEducation = () => {
    setSelectedComponent('Two');
  };

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <Header />
      <div className="container r-1" data-aos="fade-up" data-aos-once="true">
        <div className="row menu" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="0" data-aos-anchor-placement="top-center" data-aos-once="true">

          <div className="col-lg-4 col-md-12  rr-1" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="500" data-aos-anchor-placement="top-center" data-aos-once="true">
            <h1 className="heading-1" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0" data-aos-anchor-placement="top-center" data-aos-once="true">Why hire me?</h1>
            <p className="text-white" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="500" data-aos-anchor-placement="top-center" data-aos-once="true">
              Lorem ipsum dolor sit amet  consectetur <br />adipisicing elit.
            </p>
            <div className="boxes" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="500" data-aos-anchor-placement="top-center" data-aos-once="true">

              <div
                className="box-2"
                style={{ backgroundColor: selectedComponent === 'Two' ? '#00ff7f' : '#27272c' }}
                onClick={() => handleComponentChange('Two')}
                data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0" data-aos-anchor-placement="top-center" data-aos-once="true"
              >
                Education
              </div>
              <div
                className="box-3"
                style={{ backgroundColor: selectedComponent === 'Three' ? '#00ff7f' : '#27272c' }}
                onClick={() => handleComponentChange('Three')}
                data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-anchor-placement="top-center" data-aos-once="true"
              >
                Skills
              </div>
              <div
                className="box-4"
                style={{ backgroundColor: selectedComponent === 'Four' ? '#00ff7f' : '#27272c' }}
                onClick={() => handleComponentChange('Four')}
                data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400" data-aos-anchor-placement="top-center" data-aos-once="true"
              >
                About me
              </div>
            </div>
          </div>


          <div className="col-lg-8 col-md-12 rr-2"  data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="500" data-aos-anchor-placement="top-center" data-aos-once="true">

            {selectedComponent === 'Two' && <Two />}
            {selectedComponent === 'Three' && <Three />}
            {selectedComponent === 'Four' && <Four />}
          </div>
        </div>
      </div>
    </>
  );
}
