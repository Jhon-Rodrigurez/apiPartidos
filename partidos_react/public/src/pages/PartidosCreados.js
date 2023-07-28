import { useState, useEffect } from "react"
import axios from "axios"
import { PARTIDOSCREADOS_GET_ENDPOINT } from "../connections/helpers/endpoints"
import { PartidoCard } from '../components/PartidoCard'
import { Col, Row, Container, Card, Carousel } from "react-bootstrap"
import '../css/App.css'
import 'animate.css';
import imagenCarrusel1 from '../assets/images/imagenCarrusel1.jpg'
import imagenCarrusel2 from '../assets/images/imagenCarrusel2.jpg'
import imagenCarrusel3 from '../assets/images/imagenCarrusel3.jpg'
import imagen12 from '../assets/images/Imagen12.jpg'


const PartidosCreados = ()=> {

    const [partidos, setPartidos] = useState([]);
    const [buscando, setBuscando] = useState(true);

    useEffect(()=> {
        axios.get(PARTIDOSCREADOS_GET_ENDPOINT)
        .then(respuesta => {
            setPartidos(respuesta.data);
            setBuscando(false);
        }).catch(e => {
            console.error(e);
            setBuscando(false);
        })
    }, []);

    return (
        <Container className="mt-5 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center fw-bold fs-2 text-white mt-5 animate__animated animate__rotateIn">Partidos <span>creados</span></h3>
                    <Card.Body className="mt-4 text-center text-white animate__animated animate__zoomIn">
                        {buscando ? "Cargando..." : (partidos.length === 0 && "No hay partidos disponibles.")}
                        {partidos.map(partido => <PartidoCard key={partido.idPartido} partido={partido} editable={false} />)}
                    </Card.Body>
                </Col>
            </Row>

            <div className="bg-dark rounded-5 mt-4">
                <Row className="justify-content-center animate__animated animate__rollIn" bg="dark">
                    <Col md="6">
                        <h3 className="fw-bold fs-3 text-center text-white m-4">Api para partidos de <span>fútbol</span></h3>
                        <p className="text-white m-3">
                            Nuestra misión es brindarte una plataforma fácil de usar, aplicando las peticiones HTTP CRUD para que puedas hacer un millar de cosas relacionadas con el fútbol.
                        </p>
                    </Col>

                    <Col md="6">
                        <Carousel className="m-4 animate__animated animate__fadeInLeftBig animate__delay-2s	">
                            <Carousel.Item>
                                <img
                                className="d-block img-fluid img-thumbnail"
                                src={imagenCarrusel1}
                                alt={imagenCarrusel1}
                                />
                                <Carousel.Caption>
                                <h3 className="fw-bold">Te doy la bienvenida</h3>
                                <p className="fw-semibold">Espero que aquí puedas probar esta aplicación para crear partidos de fútbol.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block img-fluid img-thumbnail"
                                src={imagenCarrusel2}
                                alt={imagenCarrusel2}
                                />

                                <Carousel.Caption>
                                <h3 className="fw-bold">¿Qué puedes hacer?</h3>
                                <p className="fw-semibold">Aquí en la página de inicio podrás ver los partidos que creaste y ver su estado.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block img-fluid img-thumbnail"
                                src={imagenCarrusel3}
                                alt={imagenCarrusel3}
                                />

                                <Carousel.Caption>
                                <h3 className="fw-bold">Interactuar con la página</h3>
                                <p className="fw-semibold">
                                    Puedes editar, borrar, leer y crear diversos partidos cuantos tu quieras.
                                </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </Container>
        
    )
}

export {PartidosCreados}