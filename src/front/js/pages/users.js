import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <>
      <div className="container w-50 justify-content-center mt-5  mb-5">
          <h1 className="p-3 mb-5 bg-secondary rounded-4 text-white text-center">
            Usuarios
          </h1>
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">RUT</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>11.111.111-1</td>
              <td className="text-center">
              <Link className="border border-0 bg-transparent" to="/edit_user">
                  <i class="fa-solid fa-pencil fa-2xl text-body"/>
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>John</td>
              <td>Doe</td>
              <td>11.111.111-1</td>
              <td className="text-center">
              <Link className="border border-0 bg-transparent" to="/edit_user">
                  <i class="fa-solid fa-pencil fa-2xl text-body"/>
                </Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>John</td>
              <td>Doe</td>
              <td>11.111.111-1</td>
              <td className="text-center">
              <Link className="border border-0 bg-transparent" to="/edit_user">
                  <i class="fa-solid fa-pencil fa-2xl text-body"/>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-grid gap-4 d-md-flex justify-content-md-center pt-5">
          <Link className="btn btn-success mt-5" type="button" to="/edit_user">
            Crear Usuario
          </Link>
          <button className="btn btn-secondary mt-5 " type="button">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};
