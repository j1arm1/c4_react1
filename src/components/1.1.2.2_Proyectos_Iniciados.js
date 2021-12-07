import { Fragment, useState } from "react";
import ProyectListItem from "./ProyectListItem";

const ProyectosIniciados= function (props) {

    const [ lista_datos, setListaDatos ] = useState([
        { id:"2", nombre: "Sistema de Control de Inventarios", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", horasDefinidas: "20", horasReportadas: "10", descripcion: "Sistema para controlar inventarios de bodegas con multiples ubicaciones.", director:"MisionTIC 2022", completado: false },
        { id:"4", nombre: "Sistema de Control de Riego de Cultivos", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", horasDefinidas: "20", horasReportadas: "10", descripcion: "Servicio RESTful para para dispositivos IoT que activan o desactivan los sistemas de riego de cultivos.", director:"MisionTIC 2022", completado: false },
        { id:"5", nombre: "Sistema de Control de Temperatura", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", horasDefinidas: "20", horasReportadas: "10", descripcion: "Servicio RESTful para para dispositivos IoT que emite alertas cuando la temperatura de los contenedores sale de los umbrales permitidos.", director:"MisionTIC 2022", completado: false }
      ]);
      
    const listaProyectos = lista_datos.map ( p => 
        <ProyectListItem 
            key={ p.id }
            layout='ProyIniciados'
            {...p}
        />
    );

    return (
        <Fragment>
             <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">Informe Proyectos Iniciados</h5>
                    <p class="card-text">Proyectos que se encuentran en etapa de ejecución.</p>
                </div>
            </div>
            <div className="container">
                <div className="list-group mt-lg-5">{listaProyectos}</div>
                {/* <Paginator /> */}
            </div>
    </Fragment>
    );
}

export default ProyectosIniciados;




// { id:"1", nombre: "Sistema de Control de Reservas", fecha: "11/12/2021", fechaFinal: "31/12/2021", descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", director:"MisionTIC 2022", completado: true },
//         { id:"2", nombre: "Sistema de Control de Inventarios", fecha: "11/12/2021", fechaFinal: "31/12/2021", descripcion: "Sistema para controlar inventarios de bodegas con multiples ubicaciones.", director:"MisionTIC 2022", completado: false },
//         { id:"3", nombre: "Sistema de Reconocimiento Facial de Mascarillas", fecha: "11/12/2021", fechaFinal: "31/12/2021", descripcion: "Sistema para reconocer si las personas traen o no puesta la mascarilla.", director:"MisionTIC 2022", completado: true },
//         { id:"4", nombre: "Sistema de Control de Riego de Cultivos", fecha: "11/12/2021", fechaFinal: "31/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que activan o desactivan los sistemas de riego de cultivos.", director:"MisionTIC 2022", completado: false },
//         { id:"5", nombre: "Sistema de Control de Temperatura", fecha: "11/12/2021", fechaFinal: "31/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que emite alertas cuando la temperatura de los contenedores sale de los umbrales permitidos.", director:"MisionTIC 2022", completado: false }