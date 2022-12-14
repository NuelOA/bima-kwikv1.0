import React from 'react'
import { useState } from 'react';
import { Stepper, Card, Button, Group } from '@mantine/core';
import { Checkbox } from '@mantine/core'; 
import HealthInsuranceIcon from '../assets/icons/main-products-icon/health-insurance.svg'
import LifeInsuranceIcon from '../assets/icons/main-products-icon/life-insurance.svg'
import HomeInsuranceIcon from '../assets/icons/main-products-icon/home-insurance.svg'
import TravelInsuranceIcon from '../assets/icons/main-products-icon/travel-insurance.svg'
import MotorInsuranceIcon from '../assets/icons/main-products-icon/motor-insurance.svg'


 function Step() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  return (
          <>
            <div className="row">
              <div className='col-md-4'>
              {/**Spacer */}
              </div>
            <div className='col-md-8 mt-4 offset-md-2'>
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
                <div className='row mt-2'>
                <div className="col-md-6">
               <Checkbox className='custom--card p-3' label="Self" />
                </div>
      
                <div className="col-md-6">
                <Checkbox className='custom--card p-3' label="Spouse"/>
                </div>
               </div>
      
               <div className='row mt-5'>
                <div className="col-md-6">
               <Checkbox className='custom--card p-3' label="Son" />
                </div>
      
                <div className="col-md-6">
                <Checkbox className='custom--card p-3' label="Daughter"/>
                </div>
               </div>
      
      
               <div className='row mt-5'>
                <div className="col-md-6">
               <Checkbox className='custom--card p-3' label="Mother"/>
                </div>
      
                <div className="col-md-6">
                <Checkbox className='custom--card p-3' label="Father"/>
                </div>
               </div>
      
      
               <div className='row mt-5'>
                <div className="col-md-6 ">
               <div  className='custom--card p-3'>
                More Members
               </div>
                </div>
               </div>
      
      
      
            <Group position="center" mt={25}>
              <Button  onClick={prevStep} className="height--50 custom--btn-secondary border--sharp">Back</Button>
              <Button onClick={nextStep} className="height--50 custom--btn-primary border--sharp ">Proceed</Button>
            </Group>
              </Stepper.Step>
      
              <Stepper.Step allowStepSelect={active > 2}>
                Step 2 content: Your Details
      
      
            <Group position="center" mt={25}>
              <Button  onClick={prevStep} className="height--50 custom--btn-secondary border--sharp">Back</Button>
              <Button onClick={nextStep} className="height--50 custom--btn-primary border--sharp ">Proceed</Button>
            </Group>
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
      export default Step()
