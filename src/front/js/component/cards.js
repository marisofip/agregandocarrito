import React from "react";
import ImageUrl from "../../img/fondo.png";

export const Card = () => {
    return (
            <div className="card mx-auto my-1" style={{ width: '33rem' }}>
                <img src={ImageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    );
}