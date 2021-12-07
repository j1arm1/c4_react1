import { useState } from "react";

function ProyectListItem({...props}) {
    let datos = "";

    switch(props.layout) {
        case 'ProyIniciados':
            datos = 'Fecha de Inicio: ' + props.fechaInicio;
            break;
        case "ProyTerminados":
            datos = "Fecha de Finalización: " + props.fechaFinal;
            break;
        case "HorasProyectos":
            datos = "Horas Definidas: " + props.horasDefinidas + " Horas Reportadas: " + props.horasReportadas;
            break;
        case "HorasEmpleado":
            datos = "Empleado: " + props.empleado + " Horas Reportadas: " + props.horasReportadas;
            break;
    }

    return (
        <a href="none" className="list-group-item list-group-item-action" aria-current="true">
                <div className="mt-3 d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{ props.nombre }</h5>
                    <small>{ datos }</small>
                </div>
                <p className="mb-3">{ props.descripcion }</p>
            </a>
    );
}

export default ProyectListItem;