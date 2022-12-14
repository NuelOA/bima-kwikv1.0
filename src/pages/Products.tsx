import React from 'react'
import { Step } from './SelectCountry-Language';
import { ArrowLeftCircle } from 'react-feather';
import Step1 from './SelectCountry-Language'

export default function Products() {
  const [showCountry, isCountryShown] =  React.useState(false)


  if(!showCountry){
    return(
      <div className='allpagesbackground--container container-fluid'>
      {/**Content */}
       <div className="row">
         <div className="col-md-6 ProductImage">
        <div className='mt-5 py-5 m-5'>
        <p className='mt-5 text-white back--button' onClick={()=> isCountryShown(true) }><ArrowLeftCircle/> back</p>
        <h1 className='text-white'>Packages</h1>
        </div>
         </div>
  
         <div className="col-md-6 py-5">
         <form className='py-5'>
    <h3 className='mt-5 text-light text-center'>Select Insurance Package</h3> 
  
    <Step/>
    </form>
  
         </div>
           </div>
           </div>
    )
  }else{
    return (
      <Step1/>
      )
  }


}
