import React, { useContext } from "react";
import ImageUrl from "../../img/fondo.png";

export const Modify = () => {
  return (
    <>
      <div className="container  justify-content-center mt-5  mb-5">
        <h1
          className="fw-normal p-0 shadow-none p-3 mb-5 bg-light rounded-4 border border-dark"
          style={{ textAlign: "center", boxShadow: "0.2" }}
        >
          Editar Productos
        </h1>

        <div class="container d-flex justify-content-center align-items-center pb-5">
          <img
            src={ImageUrl}
            className="ms-1"
            alt="..."
            style={{ width: "200px", height: "200px" }}
          />
          <img
            src={ImageUrl}
            className="ms-1"
            alt="..."
            style={{ width: "200px", height: "200px" }}
          />
          <img
            src={ImageUrl}
            className="ms-1"
            alt="..."
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre Producto</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Producto 1</td>
              <td>
                20{" "}
                <button className="border border-0 bg-transparent float-md-end">
                  {" "}
                  <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Producto 2</td>
              <td>
                100{" "}
                <button className="border border-0 bg-transparent float-md-end">
                  <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Producto 3</td>
              <td>
                50{" "}
                <button className="border border-0 bg-transparent float-md-end">
                  <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-grid gap-4 d-md-flex justify-content-md-center pt-5">
        <button className="btn btn-success mt-5 " type="button">
          Editar Producto
        </button>
        <button className="btn btn-secondary mt-5 " type="button">
          Cancelar
        </button>
      </div>
    </>
  );
};
