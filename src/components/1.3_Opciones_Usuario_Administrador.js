import { Fragment, useState } from "react";
import proyectos1 from "./static/img/proyectos1.png";
import editarperfil from "./static/img/editarperfil.png";

const UsuarioAdministrador = function (props) {
    return (
        <Fragment>
            <div className="container">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Bienvenido : Administrador</h5>
                        <p className="card-text">Gestiona todos los proyectos y usuarios existentes</p>
                    </div>
                </div>


                <div className="row row-cols-1 row-cols-md-2 g-2">
                    <div className="col">
                        <div className="card">
                            <img src={proyectos1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <button type="button" class="btn btn-outline-primary">Gestión de proyectos</button>
                                <p className="card-text">Visualiza y gestiona el desarrollo de los proyectos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={editarperfil} className="card-img-top" height="300rem" alt="..."/>
                            <div className="card-body">
                                <button type="button" class="btn btn-outline-primary">Gestión de usuarios</button>
                                <p className="card-text">Agrega nuevos usuarios y administra usuarios existentes</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>        

                    
            </div>
        </Fragment>
        
    );
}

export default UsuarioAdministrador;