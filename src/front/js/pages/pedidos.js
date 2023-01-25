import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Pedidos = () => {
  return (
    <>
      <div className="container w-50 justify-content-center mt-5  mb-5">
          <h1 className="p-3 mb-5 bg-secondary rounded-4 text-white text-center">
            Pedidos
          </h1>
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre Cliente</th>
              <th scope="col">Monto</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>150.000</td>
              <td>Cancelado</td>
              <td className="text-center">
              <Link className="border border-0 bg-transparent" to="/detalle_pedido">
                  <i class="fa-solid fa-pencil fa-2xl text-body"/>
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>John Doe</td>
              <td>150.000</td>
              <td>En proceso</td>
              <td className="text-center">
              <Link className="border border-0 bg-transparent" to="/detalle_pedido">
                  <i class="fa-solid fa-pencil fa-2xl text-body"/>
                </Link>
              </td>
            </tr>            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>150.000</td>
              <td>Finalizado</td>
              <td className="text-center">
              <Link className="border border-0 bg-transparent" to="/detalle_pedido">
                  <i class="fa-solid fa-pencil fa-2xl text-body"/>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-grid gap-4 d-md-flex justify-content-md-end pt-5">
          <button className="btn btn-secondary mt-5 " type="button">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};
