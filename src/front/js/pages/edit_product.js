import React, { useContext } from "react";


export const Modify = () => {
	

	return ( 
        <>
        <div className="container  justify-content-center p-5 mt-5">
        <h1 className="fw-normal p-0 shadow-none p-3 mb-5 bg-light rounded-4 border border-dark" style={{textAlign: "center" , boxShadow: "0.2"}}>Editar Productos</h1> 
        <div class="container d-flex justify-content-center align-items-center">
 <div class="row mb-5">
    <div class="col">
      <svg className="bd-placeholder-img rounded float-start" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">imagen</text></svg>
        
    </div>
    <div class="col">
     <svg className="bd-placeholder-img rounded float-start" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">imagen</text></svg>
        
    </div>
    <div class="col">
     <svg className="bd-placeholder-img rounded float-start" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">imagen</text></svg>
        
    </div>
  </div>
</div>
<table className="table table-bordered">
  
  <tbody>
    <tr>
  
      <td >Producto 1 <button className="border border-0 bg-transparent float-md-end"> <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png"/> </button></td>
     
    </tr>
    <tr>
    
      <td>Produto 2 <button className="border border-0 bg-transparent float-md-end"><img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png"/> </button></td>
     
    </tr>
    <tr>
    
    <td>Produto 3 <button className="border border-0 bg-transparent float-md-end"><img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png"/> </button></td>
   
  </tr>
    
  </tbody>
</table>


<div className="d-grid gap-4 d-md-flex justify-content-md-center pt-5">
  <button className="btn btn-success mt-5 " type="button">Editar Producto</button>
  <button className="btn btn-secondary mt-5 " type="button">Cancelar</button>
</div>
    
</div>
</>
    );
    }