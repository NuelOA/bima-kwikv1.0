import React from 'react'

export default function ProductsStep1() {
  const [state, setState] = React.useState(false);

  function handleRender(){
    setState(true)
  }

   if(!state){
    return(
      <div className='AllPagesBackground--container container-fluid'>
      <div className="row">
          <div className="col-md-6 ProductImage">
          </div>
      <div className="col-md-6">
      <div className="mt-5">
       <form className='py-5'>
     <h3 className='mt-5 text-light text-center'>Select Country and City</h3> 

     <div className='offset-md-3 mt-5 '>
     <label id="exampleSelect1" className='text-center text-white' >Select Country</label>    
   <select className="form-select mt-1  border--sharp height--60 width--400 bg-transparent" aria-label="Default select example">
  <option selected></option>
  <option value="1">Tanzania</option>
  <option value="2">Ghana</option>
</select>
     </div>
     
 
     <div className='offset-md-3 mt-5'>
     <label id="exampleSelect1" className='text-center text-white' >Select City</label>    
   <select className="form-select mt-1  border--sharp height--60 width--400 bg-transparent" aria-label="Default select example">
  <option selected></option>
  <option value="1">Accra</option>
  <option value="2">Tanz</option>
</select>
     </div>




<div className="d-grid gap-2">
<button className="btn btn-primary width--400  border--sharp height--60 offset-md-3 mt-5" type="button" onClick={handleRender}>Proceed</button>
</div>
    </form>
      </div>
        </div>
        </div>
        </div>
    )
   }else{
    return (
      <div className='AllPagesBackground--container container-fluid'>
       {/**Content */}
        <div className="row">
          <div className="col-md-6 ProductImage">
          </div>


          <div className="col-md-6 py-5">
          <form className='py-5'>
     <h3 className='mt-5 text-light text-center'>Select Insurance Package</h3> 
     </form>

          </div>
         
    
         
    
    
            </div>
        
            </div>
      )
   }
 

 
}

