import { useState, useEffect } from "react";
import { PartidoCard } from "../components/PartidoCard";
import axios from "axios";
import { MISPARTIDOS_GET_ENDPOINT } from '../connections/helpers/endpoints';
import {Card, Col, Container, Row, Carousel } from 'react-bootstrap'
import imagenCarrusel6 from '../assets/images/imagenCarrusel6.jpg'
import imagenCarrusel7 from '../assets/images/imagenCarrusel7.jpg'
import imagenCarrusel8 from '../assets/images/imagenCarrusel8.jpg'
import imagenCarrusel9 from '../assets/images/imagenCarrusel9.jpeg'
import imagenCarrusel10 from '../assets/images/imagenCarrusel10.jpg'
import imagenCarrusel11 from '../assets/images/imagenCarrusel11.jpg'

function MisPartidos() {

    const [partidos , setPartidos] = useState([]);
    const [buscando , setBuscando] = useState(false);

    useEffect(()=> {
        axios.get(MISPARTIDOS_GET_ENDPOINT)
        .then(respuesta => {
            setPartidos(respuesta.data);
            setBuscando(false);
        }).catch(e=> {
            console.error(e);
            setBuscando(false);
        })
    }, []);


    return(
        <Container className="mt-5 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center text-white mt-5 fs-2 fw-bold animate__animated animate__lightSpeedInRight">Mis <span>partidos</span></h3>
                    <Card.Body className="mt-4 text-center text-white animate__animated animate__zoomInDown">
                        {buscando ? "Cargando..." : (partidos.length ===0 && "No se encontraron partidos disponibles.")}
                        {partidos.map(partido => <PartidoCard key={partido.idPartido} partido={partido} editable={true} />)}
                    </Card.Body>
                </Col>
            </Row>

            <div className="ms-3 mx-3 mt-5 bg-dark rounded-5 animate__animated animate__bounceInLeft">
                <Row className="justify-content-center">
                    <Col md="6" sm="6" className="mt-5 mb-4 animate__animated animate__bounceInUp">
                        <Carousel className="m-3 animate__animated animate__fadeInLeftBig animate__delay-3s">
                            <Carousel.Item>
                                <img
                                className="d-block img-fluid img-thumbnail"
                                src={imagenCarrusel6}
                                alt={imagenCarrusel6}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block img-fluid img-thumbnail"
                                src={imagenCarrusel7}
                                alt={imagenCarrusel7}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block img-fluid img-thumbnail"
                                src={imagenCarrusel8}
                                alt={imagenCarrusel8}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block img-fluid img-thumbnail"
                                src={imagenCarrusel9}
                                alt={imagenCarrusel9}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block img-fluid img-thumbnail"
                                src={imagenCarrusel10}
                                alt={imagenCarrusel10}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block img-fluid img-thumbnail"
                                src={imagenCarrusel11}
                                alt={imagenCarrusel11}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md="6" className="animate__animated animate__bounceInUp">
                        <div className="text-white">
                            <h3 className="fw-bold mt-5 text-center">¡Empecemos <span>a jugar!</span></h3>
                            <p className="text-center">Edita o elimina tus partidos que tienes creados para cambiar su estado, y poder visualizarlo en la página principal.</p>
                        </div>
                        <div className="d-flex justify-content-center mb-5 mx-5">
                            <iframe className="rounded-4 animate__animated animate__zoomInDown animate__delay-2s" width="560" height="315" src="https://www.youtube.com/embed/cSQiMVnn8fU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>
            </div>

                <div className="text-white bg-dark rounded-5">
                    <h3 className="fw-bold mt-5 mb-4 text-center animate__animated animate__slideInRight">GO<span>AT</span></h3>
                    <div className="d-flex justify-content-md-center">
                        <iframe className="mb-5 rounded-4 ms-3 mx-3 animate__animated animate__zoomInDown animate__delay-3s" width="60%" height="350" src="https://www.youtube.com/embed/MM-uRlUttU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </Container>
    )
}

export {MisPartidos}