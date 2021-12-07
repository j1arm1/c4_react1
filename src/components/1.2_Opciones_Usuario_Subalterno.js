import { Fragment, useState } from "react";
import proyectos1 from "./static/img/proyectos1.png";
import editarperfil from "./static/img/editarperfil.png";

const UsuarioSubalterno = function (props) {
    return (
        <Fragment>
            <div className="container">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Bienvenido : Usuario subalterno</h5>
                        <p className="card-text">Gestiona tus proyectos</p>
                    </div>
                </div>


                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={proyectos1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <button type="button" class="btn btn-outline-primary">Proyectos asignados</button>
                                <p className="card-text">Visualiza y gestiona el desarrollo de los proyectos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={proyectos1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <button type="button" class="btn btn-outline-primary">Actividades</button>
                                <p className="card-text">visualiza las actividades a realizar en los proyectos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={proyectos1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <button type="button" class="btn btn-outline-primary">Cargar horas</button>
                                <p className="card-text">Carga horas al desarrollo de una actividad</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={proyectos1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <button type="button" class="btn btn-outline-primary">Cargar estado</button>
                                <p className="card-text">Carga el estado de las actividades de los proyectos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={editarperfil} className="card-img-top" height="250rem" alt="..."/>
                            <div className="card-body">
                                <button type="button" class="btn btn-primary">Editar  perfil</button>
                                <p className="card-text">Modifica los datos de tu cuenta</p>
                            </div>
                        </div>
                    </div>
                </div>
                

                















        
            </div>
        </Fragment>
        
    );
}

export default UsuarioSubalterno;

