import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PARTIDODETALLE_GET_ENDPOINT } from "../connections/helpers/endpoints"
import { Card, Badge, Container, Row, Col } from "react-bootstrap";
import moment from "moment";


const PartidoDetalle= ()=> {

    const [partido, setPartido] = useState(null);
    const {id} = useParams();
    const navegar = useNavigate();

    useEffect(()=> {
        axios.get(`${PARTIDODETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta => {
            setPartido(respuesta.data);
        }).catch(e => {
            navegar(-1);
        })
    }, [id, navegar]);


    return(
        <Container className="mt-5 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center text-white mt-5 fw-bold fs-2 animate__animated animate__fadeInTopRight">Detalle <span>partido</span></h3>
                    {partido && (
                        <Card bg="dark" className="tarjeta mt-3 mb-3 animate__animated animate__zoomInDown">
                            <Card.Header className="mi-card tarjeta text-white">
                            {partido.equipoEntityLocal.nombre} vs {partido.equipoEntityVisitante.nombre}
                            {partido.jugado ?
                                <Badge className="mi-badge-jugado">Jugado</Badge> :
                                <Badge className="mi-badge-pendiente">Pendiente</Badge>
                            }
                            </Card.Header>
                            <Card.Body className="text-white">
                                <p>
                                    Local
                                    <Badge className="mi-badge-marcador">
                                        {partido.golesLocal}
                                    </Badge>
                                    vs
                                    <Badge className="mi-badge-marcador">
                                        {partido.golesVisitante}
                                    </Badge>
                                    Visitante
                                </p>
                                Fecha: {moment(partido.fecha).format('D[/]MM[/]YYYY')}
                            </Card.Body>
                            <Card.Footer className="text-white tarjeta">
                                Creado por {partido.usuarioEntity.nombre}, {moment(partido.creado).fromNow()}
                            </Card.Footer>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export {PartidoDetalle}