import React from "react";

export const TotalCompra = () => {
    return (
            <div className="">
                    <h5 className="card-title">Total de la Compra</h5>
                    <div className="border-top border-bottom border-2 mx-auto my-3" style={{width:'300px'}}>
                        <p className="text-end my-3 me-2">Sub-total   $000.000.-</p>
                        <p className="text-end my-3 me-2">Despacho    $000.000.-</p>
                    </div>
                    <div className="mx-auto my-3" style={{width:'300px'}}>
                        <h6 className="text-end my-3 me-2">Despacho    $000.000.-</h6>
                    </div>
            </div>
    );
}