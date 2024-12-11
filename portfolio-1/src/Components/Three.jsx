import React from 'react'
import { FaBootstrap, FaCss3, FaFigma, FaHtml5, FaJava, FaNodeJs, FaReact, } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { useLocation } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export default function Three() {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <div className="col-lg-12 col-md-12 rr-3 col-sm-12">
        <h1 className='heading-2 py-2'>My Skills</h1>
        <p className='text-white mb-3'>
        Experienced with front-end frameworks like React, Vue.js, and Angular to create interactive user interfaces.Strong knowledge of back-end technologies such as Node.js, Express, and PHP for server-side development.
        </p>
        <div className="row r-2">
          <div className="box mediabox col-lg-12 col-md-12 col-sm-12 ">
            <div className="div flex flex-col justify-center items-center gap-2">
              <div className="icon-boxes ">
                <FaHtml5
                  data-tooltip-id="html-tooltip"
                  className="icon-hover"
                />

                <Tooltip id="html-tooltip" content="HTML5" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
              </div>
              <span className='text-2xl text-[#00ff7f]' >html5</span>
            </div>
            <div className="div flex flex-col justify-center items-center gap-2">
              <div className="icon-boxes">
                <FaCss3
                  data-tooltip-id="css-tooltip"
                  className="icon-hover"
                />

                <Tooltip id="css-tooltip" content="CSS3" place="top" animation="" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
              </div>
              <span className='text-2xl text-[#00ff7f]' >css3</span>
            </div>
            <div className="div flex flex-col justify-center items-center gap-2">
              <div className="icon-boxes">
                <FaJava
                  data-tooltip-id="java-tooltip"
                  className="icon-hover"
                />
                <Tooltip id="java-tooltip" content="Java" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
              </div>
              <span className='text-2xl text-[#00ff7f]' >Java</span>
            </div>
            <div className="div flex flex-col justify-center items-center gap-2">
              <div className="icon-boxes">
                <FaReact
                  data-tooltip-id="react-tooltip"
                  className="icon-hover"
                />

                <Tooltip id="react-tooltip" content="React" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
              </div>

              <span className='text-2xl text-[#00ff7f]' >React</span>
            </div>



          </div>

          <div className="box col-lg-12 col-md-12">
            <div className="div flex flex-col justify-center items-center gap-2">
              <div className="icon-boxes">
                <SiTailwindcss
                  data-tooltip-id="tailwind-tooltip"
                  className="icon-hover"
                />
                <Tooltip id="tailwind-tooltip" content="Tailwind CSS" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
              </div>
              <span className='text-2xl text-[#00ff7f]' >Tailwind</span>
            </div>
            <div className="div flex flex-col justify-center items-center gap-2">
              <div className="icon-boxes">
                <FaBootstrap
                  data-tooltip-id="bootstrap-tooltip"
                  className="icon-hover"
                />
                <Tooltip id="bootstrap-tooltip" content="Bootstrap" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
              </div>
              <span className='text-2xl text-[#00ff7f]' >Bootstrap</span>
            </div>
            <div className="div flex flex-col justify-center items-center gap-2">
              <div className="icon-boxes">
                <FaNodeJs
                  data-tooltip-id="node-tooltip"
                  className="icon-hover"
                />
                <Tooltip id="node-tooltip" content="Node.js" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
              </div>
              <span className='text-2xl text-[#00ff7f]' >Node.js</span>
            </div>
            <div className="div flex flex-col justify-center items-center gap-2">
              <div className="icon-boxes">
                <FaFigma
                  data-tooltip-id="figma-tooltip"
                  className="icon-hover"
                />
                <Tooltip id="figma-tooltip" content="Figma" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
              </div>
              <span className='text-2xl text-[#00ff7f]' >Figma</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
