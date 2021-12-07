import { Fragment } from "react";
import { Card, Button, Col, Row, Container, Stack } from 'react-bootstrap';
import NavBar from "./NavBar";
import Footer from "./Footer";

const ProyectosSubalterno = function (props) {
    return (
        <><>
            <Container>
                <Card className="mt-3 mb-5" >
                    <Card.Body  >
                        <div class="card-header bg-primary text-white">
                            <h1>Opciones Usuario Subalterno</h1>
                        </div>
                        <Card.Text>
                            <p> Jesus  </p>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Row xs={1} md={3} className="g-4 ">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card style={{ height: '9rem' }}>
                                <Card.Img src="..." class="card-img-top" alt="..." />
                                <Card.Body>
                                    <Card.Title>Ver Proyectos Asignados</Card.Title>
                                </Card.Body>
                                <Button variant="primary">Proyectos Asignados</Button>
                            </Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card style={{ height: '9rem' }}>
                                <Card.Img src="..." class="card-img-top" alt="..." />
                                <Card.Body>
                                    <Card.Title>Ver Actividades de un Proyecto Asignado</Card.Title>
                                </Card.Body>
                                <Button variant="primary">Ver Actividades</Button>
                            </Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card style={{ height: '9rem' }}>
                                <Card.Img src="..." class="card-img-top" alt="..." />
                                <Card.Body>
                                    <Card.Title>Cargar Horas al Desarrollo de una Actividad</Card.Title>
                                </Card.Body>
                                <Button variant="primary">Cargar Horas</Button>
                            </Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className="mt-5 mb-3 " >
                            <Card style={{ height: '9rem' }}>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Cargar Estado de la Actividad de un Proyecto</Card.Title>
                                </Card.Body>
                                <Button variant="primary">Cargar Estado</Button>
                            </Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className="mt-5 mb-3 ">
                            <Card style={{ height: '9rem' }}>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Modificar Datos de la Cuenta</Card.Title>
                                </Card.Body>
                                <Button variant="primary">Modificar Datos</Button>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </></>

    );
}

export default ProyectosSubalterno;