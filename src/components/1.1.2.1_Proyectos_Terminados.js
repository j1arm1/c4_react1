import { Fragment, useState } from "react";
import ProyectListItem from "./ProyectListItem";

const ProyectosTerminados = function (props) {


    const [ lista_datos, setListaDatos ] = useState([
        { id:"1", nombre: "Sistema de Control de Reservas", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", director:"MisionTIC 2022", completado: true },
        { id:"3", nombre: "Sistema de Reconocimiento Facial de Mascarillas", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", descripcion: "Sistema para reconocer si las personas traen o no puesta la mascarilla.", director:"MisionTIC 2022", completado: true },
      ]);
      
    const listaProyectos = lista_datos.map ( p => 
        <ProyectListItem 
            key={ p.id }
            layout="ProyTerminados"
            {...p}
        />
    );

    return (
        <Fragment>
             <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">Informe Proyectos Terminados</h5>
                    <p class="card-text">Proyectos que a la fecha han finalizado su ejecución.</p>
                </div>
            </div>
            <div className="container">
                <div className="list-group mt-lg-5">{listaProyectos}</div>
                {/* <Paginator /> */}
            </div>
    </Fragment>
    );
}

export default ProyectosTerminados;