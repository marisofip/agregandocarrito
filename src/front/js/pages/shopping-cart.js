import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { TotalCompra } from "../component/totalcompra";
import { Card } from "../component/cards";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5 mb-5">
			<div className="row">
				<div className="col-8">
					<Card/> 
					<p className="my-3"></p>
					<Card/> 
				</div>
				<div className="col border-start border-info border-2">
					<TotalCompra/>
				</div>
			</div>
			<div className="d-grid gap-3 d-md-flex justify-content-md-end">
				<button className="btn btn-success mt-2" type="button">
				Siguiente
				</button>
				<button className="btn btn-secondary mt-2" type="button">
				Cancelar
				</button>
          	</div>
		</div>
		
	);
};
