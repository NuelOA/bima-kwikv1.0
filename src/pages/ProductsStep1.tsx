import React from 'react'



export default function ProductsStep1() {
 

  return (
  <div className='AllPagesBackground--container container-fluid'>
   {/**Content */}
    <div className="row">
      <div className="col-md-6 ProductImage">
      </div>

      


      <div className="col-md-6">
        <div className="mt-5 ">
         <form className='py-5'>
       <h3 className='mt-5 text-light text-center'>Select Country and Language to Continue</h3>
      
     <select className="form-select mt-5 offset-md-3  width--400 bg-transparent" aria-label="Default select example">
    <option selected>Select Country</option>
    <option value="1">Tanzania</option>
    <option value="2">Ghana</option>
</select>


<select className="form-select mt-5 offset-md-3 width--400 bg-transparent" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>

</select>

<div className="d-grid gap-2">
  <button className="btn btn-primary width--400 offset-md-3 mt-5" type="button">Proceed</button>
  </div>
      </form>
        </div>
          </div>


        </div>
    
        </div>
  )
}
