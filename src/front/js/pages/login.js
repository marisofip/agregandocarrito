import React, { useContext } from "react";

export const Login = () => {
	

	return ( 
        <>
<div className="container  justify-content-center mt-5  mb-5">
<h1 className="fw-normal p-0 shadow-none p-3 mb-5 bg-light rounded-4 border border-dark" style={{textAlign: "center" , boxShadow: "0.2"}}>Inicia Sesion</h1> 
<form>
       <div className="form-floating mt-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Correo</label>
    </div>
    <div className="form-floating mt-3">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Contraseña</label>
    </div>
  
   <div className="d-grid gap-4 d-md-flex justify-content-md-start pt-5">
  <button className="btn btn-success mt-5 " type="button">Siguiente</button>
  <button className="btn btn-secondary mt-5 " type="button">Cancelar</button>
</div>
    
  </form>
</div>
</>
    );
    }