import React from 'react'
import { FaBootstrap, FaCss3, FaFigma, FaHtml5, FaJava, FaNodeJs, FaReact, } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export default function Three() {
  return (
    <div>
      <div className="col-lg-12 col-md-12 rr-3 col-sm-12">
        <h1 className='heading-2 py-2'>My Skills</h1>
        <p className='text-white mb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicie
          autem  <br />impedit, asperiores, eumo illum possimus!
        </p>
        <div className="row r-2">
          <div className="box mediabox col-lg-12 col-md-12 col-sm-6">
            <div className="icon-boxes">
              <FaHtml5
                data-tooltip-id="html-tooltip"
                className="icon-hover"
              />
              <Tooltip id="html-tooltip" content="HTML5" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
            </div>
            <div className="icon-boxes">
              <FaCss3
                data-tooltip-id="css-tooltip"
                className="icon-hover"
              />
              <Tooltip id="css-tooltip" content="CSS3" place="top" animation="" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
            </div>
            <div className="icon-boxes">
              <FaJava
                data-tooltip-id="java-tooltip"
                className="icon-hover"
              />
              <Tooltip id="java-tooltip" content="Java" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
            </div>
            <div className="icon-boxes">
              <FaReact
                data-tooltip-id="react-tooltip"
                className="icon-hover"
              />
              <Tooltip id="react-tooltip" content="React" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
            </div>
          </div>
          <div className="box col-lg-12 col-md-12">
            <div className="icon-boxes">
              <SiTailwindcss
                data-tooltip-id="tailwind-tooltip"
                className="icon-hover"
              />
              <Tooltip id="tailwind-tooltip" content="Tailwind CSS" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
            </div>
            <div className="icon-boxes">
              <FaBootstrap
                data-tooltip-id="bootstrap-tooltip"
                className="icon-hover"
              />
              <Tooltip id="bootstrap-tooltip" content="Bootstrap" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
            </div>
            <div className="icon-boxes">
              <FaNodeJs
                data-tooltip-id="node-tooltip"
                className="icon-hover"
              />
              <Tooltip id="node-tooltip" content="Node.js" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
            </div>
            <div className="icon-boxes">
              <FaFigma
                data-tooltip-id="figma-tooltip"
                className="icon-hover"
              />
              <Tooltip id="figma-tooltip" content="Figma" place="top" animation="fade" style={{ fontSize: '14px', backgroundColor: 'white', color: 'black', backdropFilter: '100px', zIndex: '5' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
