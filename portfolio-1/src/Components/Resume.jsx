import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Header from './Header';

export default function Resume() {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState('Two');

  useEffect(() => {
    // AOS.init({ duration: 2000 });
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
      <div className="container r-1 ">
        <div className="row menu">

          <div className="col-lg-4 col-md-12  rr-1">
            <h1 className="heading-1">Why hire me?</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet  consectetur <br />adipisicing elit.
            </p>
            <div className="boxes">

              <div
                className="box-2 cursor-pointer"
                style={{ backgroundColor: selectedComponent === 'Two' ? '#00ff7f' : '#27272c' }}
                onClick={() => handleComponentChange('Two')}
              >
                Education
              </div>
              <div
                className="box-3 cursor-pointer"
                style={{ backgroundColor: selectedComponent === 'Three' ? '#00ff7f' : '#27272c' }}
                onClick={() => handleComponentChange('Three')}
              >
                Skills
              </div>
              <div
                className="box-4 cursor-pointer"
                style={{ backgroundColor: selectedComponent === 'Four' ? '#00ff7f' : '#27272c' }}
                onClick={() => handleComponentChange('Four')}
              >
                About me
              </div>
            </div>
          </div>


          <div className="col-lg-8 col-md-12 rr-2 ">

            {selectedComponent === 'Two' && <Two />}
            {selectedComponent === 'Three' && <Three />}
            {selectedComponent === 'Four' && <Four />}
          </div>
        </div>
      </div>
    </>
  );
}
