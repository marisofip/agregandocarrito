import React, { useContext } from "react";
import ImageUrl from "../../img/fondo.png";
import { Link } from "react-router-dom";
import { Detail } from "../pages/detail_product";

export const DetailCard = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ImageUrl}
              class="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Producto 1</h5>
              <p className="card-text">30.000$</p>
              <Link to="/detail_product" className="btn btn-primary">
                Ver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
