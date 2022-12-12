import React from 'react'
import { Stepper, Button, Group, Card } from '@mantine/core';
import { useState } from 'react';

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
          </div>
      <div className="col-md-6">
      <div className="mt-5">
       <form className='py-5'>
     <h3 className='mt-5 text-light text-center'>Select Country and City</h3> 

     <div className='offset-md-3 mt-5 '>
     <label id="exampleSelect1" className='text-center text-white' >Select Country</label>    
   <select className="form-select mt-1  border--sharp height--50 width--400 bg-transparent" aria-label="Default select example">
  <option selected></option>
  <option value="1">Tanzania</option>
  <option value="2">Ghana</option>
</select>
     </div>
     
 
     <div className='offset-md-3 mt-5'>
     <label id="exampleSelect1" className='text-center text-white' >Select City</label>    
   <select className="form-select mt-1  border--sharp height--50 width--400 bg-transparent" aria-label="Default select example">
  <option selected></option>
  <option value="1">Accra</option>
  <option value="2">Tanz</option>
</select>
     </div>




<div className="d-grid gap-2">
<button className="btn btn-primary width--400  border--sharp height--50 offset-md-3 mt-5" type="button" onClick={handleRender}>Proceed</button>
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



export function Step() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      
      <div className="row">
      <div className='col-md-6 offset-3 mt-5'>
        <Stepper active={active} onStepClick={setActive} color="teal">
        <Stepper.Step allowStepSelect={active < 0}>
        <p className='text-center mt-4 text-white'>What would you like to insure? </p>
         <>
         <div className='row'>
          <div className="col-md-4">
          <Card onClick={nextStep}>
          asdksd
         </Card>
          </div>

          <div className="col-md-4">
          <Card onClick={nextStep}>
          asdksd
         </Card>
          </div>

          <div className="col-md-4">
          <Card onClick={nextStep}>
          asdksd
         </Card>
          </div>
       
         </div>



         <div className='row mt-4'>

         <div className="col-md-2">
        
          </div>

          <div className="col-md-4">
          <Card onClick={nextStep}>
          asdksd
         </Card>
          </div>

          <div className="col-md-4">
          <Card onClick={nextStep}>
          asdksd
         </Card>
          </div>

         </div>
         
         </>
        </Stepper.Step>
        <Stepper.Step allowStepSelect={active > 1}>
          Step 1 KYC
          <div className="d-grid">
<button className="btn btn-primary width--400  border--sharp height--50 offset-md-3 mt-5" type="button" onClick={nextStep}>Proceed</button>
</div>
        </Stepper.Step>
        <Stepper.Step allowStepSelect={active > 2}>
          Step 2 content: Your Details
          <div className="d-grid">
<button className="btn btn-primary width--400  border--sharp height--50 offset-md-3 mt-5" type="button" onClick={nextStep}>Proceed</button>
</div>
        </Stepper.Step>
        <Stepper.Completed>
          3, new page for package type
        </Stepper.Completed>
      </Stepper>

      {/* <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group> */}
        </div>
      </div>

     
     
     
    </>
  );
}