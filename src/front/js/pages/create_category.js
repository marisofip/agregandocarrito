import React from 'react';

export const Categoria = () => {
    return (
        <div className='container'>
            <div className='row'>
                <hr />
                <div className='col' style={{ textAlign: 'center' }}>
                    <h1>Creacion de Categorias</h1>
                </div>
                <hr />
                <div className='row'>
                    <div className='col'>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        Categoria 1{" "}
                                        <button className="border border-0 bg-transparent float-md-end">
                                            {" "}
                                            <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Categoria 2{" "}
                                        <button className="border border-0 bg-transparent float-md-end">
                                            <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Categoria 3{" "}
                                        <button className="border border-0 bg-transparent float-md-end">
                                            <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Categoria 4{" "}
                                        <button className="border border-0 bg-transparent float-md-end">
                                            <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Categoria 5{" "}
                                        <button className="border border-0 bg-transparent float-md-end">
                                            <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Categoria 6{" "}
                                        <button className="border border-0 bg-transparent float-md-end">
                                            <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}