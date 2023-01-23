import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Shop = () => {
  return (
    <>
      <h1 className="mt-5 pt-5" style={{ textAlign: "center" }}>
        {" "}
        CATEGORIAS
      </h1>
      <div className="container  justify-content-center mt-5  mb-5">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3">
              <div className="card-header py-3">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595C"></rect>
                  <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                    Imagen Producto
                  </text>
                </svg>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">Categoria 1</h1>

                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-dark"
                >
                  Revisar productos
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595C"></rect>
                  <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                    Imagen Producto
                  </text>
                </svg>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">Categoria 2</h1>

                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-dark"
                >
                  Revisar productos
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 ">
              <div className="card-header py-3 ">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595C"></rect>
                  <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                    Imagen Producto
                  </text>
                </svg>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">Categoria 3</h1>

                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-dark"
                >
                  Revisar productos
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="150"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595C"></rect>
                      <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                        Imagen{" "}
                      </text>
                    </svg>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Producto 1</h5>
                      <p className="card-text">30.000$</p>
                      <a href="#" className="btn btn-dark">
                        Ver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="150"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595C"></rect>
                      <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                        Imagen{" "}
                      </text>
                    </svg>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Producto 2</h5>
                      <p className="card-text">30.000$</p>
                      <a href="#" className="btn btn-dark">
                        Ver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="150"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595C"></rect>
                      <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                        Imagen{" "}
                      </text>
                    </svg>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Producto 3</h5>
                      <p className="card-text">30.000$</p>
                      <a href="#" className="btn btn-dark">
                        Ver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
