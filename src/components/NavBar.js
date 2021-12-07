import { Navbar, NavDropdown, Container, Nav, Form, Button } from 'react-bootstrap';

const menu = [
    {
        id: "1", item: "Proyectos", subitems:
        {
            id: "1.1", item: "Agregar"
        }
    }
]

const NavBar = function ({ onOptionClicked }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="none">AppProject</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="none">Home</a>
                        </li>
                      
                        <Container fluid>
                            <Navbar.Collapse >
                                <Nav className="me-auto">
                                </Nav>
                                <Nav>
                                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                                        <NavDropdown className="bg-dark" title="Proyectos" align="end" id="basic-nav-dropdown"  >
                                            <NavDropdown.Item href="#AgregarProyectos" name="AgregarP" onClick={onOptionClicked}>Agregar </NavDropdown.Item>
                                            <NavDropdown.Item href="#ModificarProyectos" name="ModificarP" onClick={onOptionClicked}>Modificar</NavDropdown.Item>
                                        </NavDropdown>
                                                                          
                                
                                        <NavDropdown className="bg-dark" title="Actividades" align="end" id="basic-nav-dropdown"  >
                                            <NavDropdown.Item href="#AgregarProyectos" name="AgregarPro" onClick={onOptionClicked}>Agregar</NavDropdown.Item>
                                            <NavDropdown.Item href="#ModificarProyectos" name="ModificarPro" onClick={onOptionClicked}>Modificar</NavDropdown.Item>
                                        </NavDropdown>

                                        <NavDropdown className="bg-primary" title="Informes" align="end" id="basic-nav-dropdown"  >
                                            <NavDropdown.Item href="#ProyectosTerminados" name="Terminados" onClick={onOptionClicked}>Proyectos Terminados</NavDropdown.Item>
                                            <NavDropdown.Item href="#ProyectosIniciados" name="Iniciados" onClick={onOptionClicked}>Proyectos Iniciados</NavDropdown.Item>
                                            <NavDropdown.Item href="#HorasProyecto" name="HorasP" onClick={onOptionClicked}>Horas Por Proyecto</NavDropdown.Item>
                                            <NavDropdown.Item href="#HorasEmpleado" name="HorasE" onClick={onOptionClicked}>Horas Por Empleado y Proyecto</NavDropdown.Item>
                                        </NavDropdown>

                                        <NavDropdown.Divider />

                                        <NavDropdown className="bg-primary" title="Usuario Administrador" align="end" id="basic-nav-dropdown"  >
                                            <NavDropdown.Item href="#CrudUsuarios" name="CrudUsuarios" onClick={onOptionClicked}>Crud Usuarios</NavDropdown.Item>
                                            <NavDropdown.Item href="#AgregarUsuarios" name="AgregarU" onClick={onOptionClicked}>Agregar Usuarios</NavDropdown.Item>
                                            <NavDropdown.Item href="#ModificarUsuarios" name="ModificarU" onClick={onOptionClicked}>Modificar Usuarios</NavDropdown.Item>

                                        </NavDropdown>

                                        <NavDropdown className="bg-primary" title="Usuario Subalterno" align="end" id="basic-nav-dropdown"  >
                                            <NavDropdown.Item href="#ProyectosAsignados" name="Asignados" onClick={onOptionClicked}>Proyectos Asigandos</NavDropdown.Item>
                                            <NavDropdown.Item href="#ActividadesAsignadas" name="AAsignadas" onClick={onOptionClicked}>Actividades de un Proyecto Asignadas</NavDropdown.Item>
                                            <NavDropdown.Item href="#CargarHoras" name="CHoras" onClick={onOptionClicked}>Cargar Horas Actividad</NavDropdown.Item>
                                            <NavDropdown.Item href="#CargarEstado" name="CEstado" onClick={onOptionClicked}>Cargar Estado Actividad</NavDropdown.Item>
                                        </NavDropdown>

                                        <NavDropdown.Divider />

<<<<<<< HEAD
                                        <NavDropdown.Item className="bg-primary text-secondary" href="#ModificarDatos" name="MDatos" onClick={onOptionClicked}>Modificar Datos</NavDropdown.Item>
                                    </NavDropdown>
=======
                                        <NavDropdown.Item className="bg-dark text-secondary" href="#ModificarDatos" name="MDatos" onClick={onOptionClicked}>Modificar Datos</NavDropdown.Item>
                                        </div>
                                        </nav>
>>>>>>> 7ff1d76206a8a6ec8326674d41283d84e82076e0
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </ul>
                    <Nav.Link href="#Anterior">Anterior</Nav.Link>
                                  <Nav.Link href="#Inicio">Inicio</Nav.Link>
                    <form className="d-flex">
                        <button className="btn btn-outline-light" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;