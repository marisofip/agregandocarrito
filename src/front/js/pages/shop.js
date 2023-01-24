import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Card } from "../component/cards";
import { Detail } from "../component/detail-prod";
import { Context } from "../store/appContext";

export const Shop = () => {
  return (
    <>
      <h1 className="mt-5 pt-5" style={{ textAlign: "center" }}>
        {" "}
        CATEGORIAS
      </h1>
      <div className="container d-flex justify-content-center mt-5  mb-5">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="container d-flex justify-content-center ">
        <Detail />
        <Detail />
        <Detail />
        <Detail />
      </div>
      <div className="container d-flex justify-content-center">
        <Detail />
        <Detail />
        <Detail />
        <Detail />
      </div>
    </>
  );
};
