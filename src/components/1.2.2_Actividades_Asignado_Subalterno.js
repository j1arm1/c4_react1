import { Fragment } from "react";
import ActividadesList from "./ActividadesList";
import Paginator from "./Paginator";

const AsignadasSubalterno = function (props) {
        const vActividades = props.Actividades;
        const listaActividades = vActividades.map ( p => 
            <ActividadesList 
                idA= { p.id }
                nombreA = { p.nombreA }
                descripcionA = { p.descripcionA }
                fechaA = { p.fecha }
                           />
        );

    return (
        <div className="container">
        <div className="card mt-lg-5">
        
            <div className="card-body">
                 <h3>Actividades de un Proyecto Asignado al Usuario Subalterno</h3>
                <h5 className="text-muted"></h5>
            </div>
                   </div>
        <div className="list-group mt-lg-5">
          {listaActividades}                   
        </div>
        <Paginator />
      </div>
    );
}

export default AsignadasSubalterno;