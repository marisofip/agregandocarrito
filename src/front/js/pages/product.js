import React, { useContext } from "react";

export const Product = () => {
  return (
    <>
      <div className="container  justify-content-center mt-5  mb-5">
        <h1
          className="fw-normal p-0 shadow-none p-5 mb-5 bg-light rounded-4 border border-dark"
          style={{ textAlign: "center", boxShadow: "0.2" }}
        >
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar Productos"
              aria-label="Search"
            ></input>{" "}
            <img src="https://img.icons8.com/material-outlined/2x/search.png" />{" "}
          </form>
        </h1>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>
                Producto 1{" "}
                <button className="border border-0 bg-transparent float-md-end">
                  {" "}
                  <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Produto 2{" "}
                <button className="border border-0 bg-transparent float-md-end">
                  <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Produto 3{" "}
                <button className="border border-0 bg-transparent float-md-end">
                  <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="d-grid gap-4 d-md-flex justify-content-md-center pt-5">
          <button className="btn btn-success mt-5 " type="button">
            Crear Producto
          </button>
          <button className="btn btn-secondary mt-5 " type="button">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};
