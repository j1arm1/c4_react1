/* eslint-disable jsx-a11y/heading-has-content */
import { Fragment } from "react";
import mision from "./static/img/mision.png";

const EstadoActividad = function (props) {
    return (
        <div class="container" >
            <div class="card mt-5">
                <div class="card-body">
                    <h3>Cargar Estado de la Actividad de un Proyecto Asignado</h3>
                    <h5 class="text-muted"></h5>
                </div>
            </div>
            <div class="card mt-5">
                <div class="row g-1">
                <div class="col-md-15 mt-4">
                    <div class="text-center">
                        <img src={mision} class="rounded mx-auto d-block" alt="Slide" />
                    </div>
                </div>
                    <div class="col-md-10">
                        <div class="card-body">
                            <form>
                                <div class="mb-2 row">
                                    <label for="Proyecto Asignado" class="col-4 col-form-label">Escoja Proyecto asignado</label>
                                    <div class="col-sm-4">
                                        <select class="form-select mb-4" aria-label="Default select example" >
                                            <option selected>Proyecto Asignado</option>
                                            <option value="1">Proyecto 1</option>
                                            <option value="2">Proyecto 2</option>
                                            <option value="3">Proyecto N</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="Actividad Proyecto Asignado" class="col-4 col-form-label">Escoja Actividad</label>
                                    <div class="col-sm-4">
                                        <select class="form-select mb-4 " aria-label="Default select example">
                                            <option selected>Actividad Proyecto Asignado</option>
                                            <option value="1">Actividad 1</option>
                                            <option value="2">Actividad 2</option>
                                            <option value="3">Actividad N</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-2 mb-4">
                                    <label for="Proyecto Asignado" class="col-4 col-form-label">Escoja Estado de la actividad</label>
                                    <div class="col-sm-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Iniciada
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Completada
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-12 text-center">
                                        <button type="button" onclick="validarLogin();" class="btn btn-lg btn-primary">Cargar Actividad</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );

}

export default EstadoActividad;