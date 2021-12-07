//import lorem from './img/lorem-ipsum.png';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

import './bootstrap.css';

import Proyectlist from './components/Proyectlist';
import ProyectText from './components/ProyectText';
import Footer from './components/Footer';
import './App.css';
import AgregarActividades from './components/Actividades';
import Agregarproyecto from './components/1.1.1.1_Agregar_Proyectos';
import Modificarproyecto from './components/1.1.1.2_Modificar_Proyectos';
import Modificardatos from './components/1.1.3_Modificar_Datos';
import ModificarActividades from './components/1.1.1.3.2_Modificar_Actividades_Proyecto';
import ProyectosTerminados from './components/1.1.2.1_Proyectos_Terminados';
import ProyectosIniciados from './components/1.1.2.2_Proyectos_Iniciados';
import HorasProyecto from './components/1.1.2.3_Horas_Proyecto';
import HorasEmpleado from './components/1.1.2.4_Horas_Empleado';
import GestionUsuarios from './components/1.3.3_Gestion_Usuarios';
import AgregarUsuarios from './components/1.3.3.1_Agregar_Usuarios';
import ModificarUsuarios from './components/1.3.3.2_Modificar_Usuarios';
import ProyectosSubalterno from './components/1.2.1_Proyectos_Asigandos_Subalterno';
import ActividadesSubalterno from './components/1.2.2_Actividades_Asignado_Subalterno';
import HorasActividad from './components/1.2.3_Cargar_Horas';
import EstadoActividad from './components/1.2.4_Cargar_Estado';
import menu_informe from './components/1.1.2_Menu_Informes';
import UsuarioSubalterno from './components/1.2_Opciones_Usuario_Subalterno';


function App() {

  const [compDinamico, setCompDinamico] = useState(<crud_proyecto />);

  const onOptionClicked = function (evt) {
    evt.preventDefault();
    if (evt.target.name === "AgregarP") {
      setCompDinamico(< Agregarproyecto />);
    } else {
      if (evt.target.name === "ModificarP") { setCompDinamico(<Modificarproyecto />); }
      else {
        if (evt.target.name === "AgregarPro") { setCompDinamico(<AgregarActividades />); }
        else {
          if (evt.target.name === "ModificarPro") { setCompDinamico(<ModificarActividades />); }
        else {
          if (evt.target.name === "Terminados") { setCompDinamico(<ProyectosTerminados />); }
          else {
            if (evt.target.name === "Iniciados") { setCompDinamico(<ProyectosIniciados />); }
            else {
              if (evt.target.name === "HorasP") { setCompDinamico(<HorasProyecto />); }
              else {
                if (evt.target.name === "HorasE") { setCompDinamico(<HorasEmpleado/>); }
                else {
                  if (evt.target.name === "CrudUsuarios") { setCompDinamico(<GestionUsuarios/>); }
                else {
                  if (evt.target.name === "AgregarU") { setCompDinamico(<AgregarUsuarios/>); }
                else {
                  if (evt.target.name === "ModificarU") { setCompDinamico(<ModificarUsuarios/>); }
                else {
                  if (evt.target.name === "Asignados") { setCompDinamico(<ProyectosSubalterno/>); }
                  else {
                    if (evt.target.name === "AAsignadas") { setCompDinamico(<ActividadesSubalterno/>); }
                    else {
                      if (evt.target.name === "CHoras") { setCompDinamico(<HorasActividad/>); }
                      else {
                        if (evt.target.name === "CEstado") { setCompDinamico(<EstadoActividad/>); }
                        else {
                          if (evt.target.name === "MDatos") {setCompDinamico(<Modificardatos />);}
                          else {
                            setCompDinamico (<menu_informe />);
                          }
        }
      }
    }
  }
  }}}}}}}}}}}}



  return (

    <div>

      
          <NavBar onOptionClicked={onOptionClicked} />
          <Proyectlist />
          <Container>
          <div className="card mt-5">
            <div className="card-body">
              {compDinamico}
            </div>
          </div>
          </Container>
          {/* <ProyectText /> */}
          <UsuarioSubalterno/>
          <Footer />
        
     



    </div>

  );
}

export default App;
