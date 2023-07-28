import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ACTUALIZARPARTIDO_PUT_ENDPOINT, PARTIDODETALLE_GET_ENDPOINT } from '../connections/helpers/endpoints';
import { CrearPartidoFormulario } from '../components/CrearPartidoFormulario';
import { Alert, Container, Card, Col, Row } from "react-bootstrap";
import Swal from 'sweetalert2';

function EditarPartido() {

    const {id} = useParams();
    const [errores, setErrores] = useState({});
    const [partido, setPartido] = useState(null);
    const navegar= useNavigate();

    useEffect(()=> {
        axios.get(`${PARTIDODETALLE_GET_ENDPOINT}/${id}`
        ).then(respuesta => {
            setPartido(respuesta.data);
        }).catch(error=> {
            navegar("/");
        })
    }, [id, navegar]);

    const editar= async({golesLocal, golesVisitante})=> {

        const error={};
        setErrores(error);

        axios.put(`${ACTUALIZARPARTIDO_PUT_ENDPOINT}/${partido.idPartido}`, {golesLocal, golesVisitante})
        .then(respuesta=> {
            navegar("/");
            Swal.fire({
                title: 'Partido actualizado.',
                text: 'Actualizaste el marcador final del partido.',
                imageUrl: 'https://media.giphy.com/media/SSWDmOtwTQ3X5nNBRN/giphy.gif',
                imageWidth: 400,
                imageHeight: 350,
                imageAlt: 'Custom image',
                customClass: {
                    container: 'dark-alert-container',
                    popup: 'dark-alert-popup',
                    header: 'dark-alert-header',
                    title: 'dark-alert-title',
                    content: 'dark-alert-content',
                },
            })
        })
        .catch(err=> {
            setErrores({update: err.respuesta.data.message});
        })

    }

    return (

        <Container className="mt-5 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center fw-bold fs-2 text-white mt-5 animate__animated animate__lightSpeedInRight">Editar <span>partido</span></h3>
                    <Card bg="dark" className="tarjeta mt-4 animate__animated animate__zoomInDown">
                        <Card.Body className="text-white">
                            {errores.update && <Alert variant="danger">{errores.update}</Alert>}

                            {partido &&
                                <CrearPartidoFormulario
                                    errores={errores}
                                    callback={editar}
                                    pFecha={partido.creado}
                                    pNombreLocal={partido.equipoEntityLocal.nombre}
                                    pnombreVisitante={partido.equipoEntityVisitante.nombre}
                                    pIdLocal={partido.equipoEntityLocal.id}
                                    pIdVisitante={partido.equipoEntityVisitante.id}
                                    pGolesLocal={partido.golesLocal}
                                    pGolesVisitante={partido.golesVisitante}
                                    editable={true}
                                ></CrearPartidoFormulario>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export {EditarPartido}