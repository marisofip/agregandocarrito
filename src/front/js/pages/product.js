import React, { useContext } from "react";
import { Link } from "react-router-dom";

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
                {" "}
                20{" "}
                <Link
                  className="border border-0 bg-transparent float-md-end"
                  to="/edit_product"
                >
                  {" "}
                  <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Produto 2</td>
              <td>
                {" "}
                100{" "}
                <Link
                  className="border border-0 bg-transparent float-md-end"
                  to="/edit_product"
                >
                  {" "}
                  <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Produto 3</td>
              <td>
                {" "}
                50{" "}
                <Link
                  className="border border-0 bg-transparent float-md-end"
                  to="/edit_product"
                >
                  {" "}
                  <img src="https://img.icons8.com/material-sharp/2x/pencil--v2.png" />{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="d-grid gap-4 d-md-flex justify-content-md-center pt-5">
          <Link
            className="btn btn-success mt-5 "
            type="button"
            to="/create_product"
          >
            Crear Producto
          </Link>
          <button className="btn btn-secondary mt-5 " type="button">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};
