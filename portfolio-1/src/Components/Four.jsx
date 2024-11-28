import React from 'react'

export default function Four() {
  return (
    <div>
      <div className="col-lg-12 col-md-12 rr-4 col-sm-12">
        <h1 className='heading-2'>About Me</h1>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicie
          autem  <br />impedit, asperiores, eumo illum possimus!
        </p>
        <div className="row r-2">
          <div className=" col-lg-6 col-md-6 col-sm-6">
            <div className="details">
              <label htmlFor="" className='info-detail'>Name :  <span className='info-color'> Amit Dervadiya</span></label>
              <label htmlFor="" className='info-detail'>Experince :  <span className='info-color'> Fresher</span></label>
              <label htmlFor="" className='info-detail'>Freelance :  <span className='info-color'>Available</span></label>
            </div>
          </div>
          <div className="  col-lg-6 col-md-6 col-sm-6">
            <div className="details">
              <label htmlFor="" className='info-detail'>Phone :     <span className='info-color'>(+91) 6356366560</span></label>
              <label htmlFor="" className='info-detail'>Nationatly :  <span className='info-color'>Indian</span></label>
              <label htmlFor="" className='info-detail'>language :  <span className='info-color'>english,hindi</span></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
