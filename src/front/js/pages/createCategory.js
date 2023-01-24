import React from 'react';

export const NewCategory = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 p-5'>
                    <h1 className='titleCategory' style={{ textAlign: 'center' }}>Crear Categoria</h1>
                </div>
                <div className='col-12 p-5 ml-50' style={{ width: '500px', height: '500px', backgroundColor: 'gray' }}>
                </div>
                <div className='col-12 p-5'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Nombre de Categoria</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Escribe aqui" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput2" className="form-label">Tipo de Categoria</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Escribe aqui" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Descripcion</label>
                        <textarea className="form-control" id="Descripcion" rows="3"></textarea>
                    </div>
                    <div className='paymentButtom2 col-12'>

                        <button type="button" class="btn btn-success m-2">Guardar</button>
                        <button type="button" class="btn btn-danger">Cancelar</button>
                    </div>

                </div>
            </div>
        </div >
    )
}