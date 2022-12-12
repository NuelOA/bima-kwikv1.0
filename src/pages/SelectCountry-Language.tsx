import React from 'react'
import { Stepper, Card, Button, Group } from '@mantine/core';
import { useState } from 'react';
import { ArrowLeftCircle } from 'react-feather';
import HealthInsuranceIcon from '../assets/icons/main-products-icon/health-insurance.svg'
import LifeInsuranceIcon from '../assets/icons/main-products-icon/life-insurance.svg'
import HomeInsuranceIcon from '../assets/icons/main-products-icon/home-insurance.svg'
import TravelInsuranceIcon from '../assets/icons/main-products-icon/travel-insurance.svg'
import MotorInsuranceIcon from '../assets/icons/main-products-icon/motor-insurance.svg'





export default function ProductsStep1() {
  const [state, setState] = React.useState(false);


  function handleRender(){
    setState(true)
  }

   if(!state){
    return(
      <div className='allpagesbackground--container container-fluid'>
      <div className="row">
          <div className="col-md-6 ProductImage">
         <div className='mt-5 py-5 m-5'>
         <p className='mt-5 text-white back--button' onClick={()=> window.location.pathname ="/" }><ArrowLeftCircle/> back</p>
         </div>
          </div>

          <div className="col-md-2">
            {/*spacer */}
          </div>
      <div className="col-md-4 width--400">
      <div className="mt-5">
       <form className='py-5'>
     <h3 className='mt-5 text-light text-center'>Select Country and City</h3> 

     <div className='mt-5 '>
     <label id="exampleSelect1" className='text-center text-white' >Select Country</label>    
   <select className="form-select mt-1  border--sharp height--50  bg-transparent" aria-label="Default select example">
  <option selected></option>
  <option value="1">Tanzania</option>
  <option value="2">Ghana</option>
</select>
     </div>
     
 
     <div className='mt-5'>
     <label id="exampleSelect1" className='text-center text-white' >Select City</label>    
   <select className="form-select mt-1  border--sharp height--50 bg-transparent" aria-label="Default select example">
  <option selected></option>
  <option value="1">Accra</option>
  <option value="2">Tanz</option>
</select>
     </div>




<div className="d-grid gap-2">
<button className="btn btn-primary   border--sharp height--50 mt-5" type="button" onClick={handleRender}>Proceed</button>
</div>
    </form>
      </div>
        </div>
        </div>
        </div>
    )
   }else{
    return (
      <div className='allpagesbackground--container container-fluid'>
       {/**Content */}
        <div className="row">
          <div className="col-md-6 ProductImage">
         <div className='mt-5 py-5 m-5'>
         <p className='mt-5 text-white back--button' onClick={()=> setState(false)}><ArrowLeftCircle /> back</p>
         <h2 className='text-white'>Packages</h2>
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
   }
 

 
}











  <>
      {/* Inbuilt Stepper compoent */}
  </>

export function Step() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <div className="row">
        <div className='col-md-4'>
        {/**Spacer */}
        </div>
      <div className='col-md-8 mt-5 offset-md-2'>
        <Stepper active={active} onStepClick={setActive} color="teal" iconSize={35}>
        <Stepper.Step allowStepSelect={active < 0}>
        <p className='text-center mt-4 text-white'>What would you like to insure? </p>
         <>
         <div className='row'>
          <div className="col-md-4">
          <Card onClick={nextStep} className="text-center border--sharp cardSelector">
          <img src={HealthInsuranceIcon} alt="health"/>
         </Card>
         <div className="custom-bg">
            <p className='text-white text-center p-2'>Health Insurance</p>
            </div>
          </div>

          <div className="col-md-4">
          <Card onClick={nextStep} className="text-center border--sharp cardSelector">
          <img src={LifeInsuranceIcon} alt="health"/>
         </Card>
         <div className="custom-bg">
            <p className='text-white text-center p-2'>Life Insurance</p>
            </div>
          </div>

          <div className="col-md-4">
          <Card onClick={nextStep} className="text-center border--sharp cardSelector">
          <img src={HomeInsuranceIcon} alt="health"/>
         </Card>
         <div className="custom-bg">
            <p className='text-white text-center p-2'>Home Insurance</p>
            </div>
          </div>
       
         </div>

        {/*Next Package Row */}
         <div className='row mt-4'>
         <div className="col-md-2">
        {/*Spacer */}
          </div>
          <div className="col-md-4">
          <Card onClick={nextStep} className="text-center border--sharp cardSelector">
          <img src={MotorInsuranceIcon} alt="health"/>
         </Card>
         <div className="custom-bg">
            <p className='text-white text-center p-2'>Motor Insurance</p>
            </div>
          </div>

          <div className="col-md-4">
          <Card onClick={nextStep} className="text-center border--sharp cardSelector">
          <img src={TravelInsuranceIcon} alt="health"/>
         </Card>
         <div className="custom-bg">
            <p className='text-white text-center p-2'>Travel Insurance</p>
            </div>
          </div>
         </div>
         </>

         
        </Stepper.Step>
        <Stepper.Step allowStepSelect={active > 1}>
          Step 1 KYC



      <Group position="center" mt={50}>
        <Button  onClick={prevStep} className="height--50 custom--btn-secondary border--sharp">Back</Button>
        <Button onClick={nextStep} className="height--50 custom--btn-primary border--sharp ">Proceed</Button>
      </Group>
        </Stepper.Step>

        <Stepper.Step allowStepSelect={active > 2}>
          Step 2 content: Your Details
        </Stepper.Step>

        <Stepper.Completed>
          3, new page for package type
        </Stepper.Completed>
      </Stepper>



        </div>
      </div>

     
     
     
    </>
  );
}