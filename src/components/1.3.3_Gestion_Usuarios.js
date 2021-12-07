import { Fragment } from "react";
import React, {useState} from 'react';
import dataUsuarios from './Data/dataUsuarios';


const GestionUsuarios = function (props) {
    const [data, setData] = useState(dataUsuarios);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);
  
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
      id: '',
      usuario: '',
      nombres: '',
      contrasena: '',
      rol: ''
    });
    return (
        
        <div className="App">
        <h2>Información de Usuarios</h2>
        <br />
      <button className="btn btn-success" >Insertar</button>  {"   "} 
      <br /><br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Nombres</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.usuario}</td>
              <td>{elemento.nombres}</td>
              <td>{elemento.rol}</td>
              <td><button className="btn btn-primary" >Editar</button> {"   "} 
              <button className="btn btn-danger" >Eliminar</button>{"   "} 
              </td>
            </tr>
          ))
          }
          </tbody>
        </table>
        </div>
  
       
    );

}

export default GestionUsuarios;
