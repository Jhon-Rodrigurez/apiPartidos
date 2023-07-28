import { useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CREARPARTIDO_POST_ENDPOINT } from '../connections/helpers/endpoints';
import { CrearPartidoFormulario } from '../components/CrearPartidoFormulario';
import Swal from 'sweetalert2';

function CrearPartido() {

    const [errores, setErrores] = useState({});
    const navegar= useNavigate();

    const crear= async({fecha, equipoLocal, equipoVisitante}) => {

        const errores={};
        setErrores(errores);

        axios.post(CREARPARTIDO_POST_ENDPOINT, {fecha, equipoLocal, equipoVisitante}
            ).then(response => {
                navegar(`/partido/${response.data.idPartido}`);
                Swal.fire({
                    title: 'Partido creado con éxito.',
                    imageUrl: 'https://media.giphy.com/media/oD51MfKxUwRbPuvQ0Q/giphy.gif',
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
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error 404',
                text: 'Algo salió mal con el envío de formularios. Por favor vuelve a intentarlo.',
                customClass: {
                    container: 'dark-alert-container',
                    popup: 'dark-alert-popup',
                    header: 'dark-alert-header',
                    title: 'dark-alert-title',
                    content: 'dark-alert-content',
                },
            })
        })
    }

    return (
        <Container className="mt-5 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center text-white mt-5 fs-2 fw-bold animate__animated animate__heartBeat">Crear <span>partido</span></h3>
                    <Card.Body>
                        {errores.new && <Alert variant="danger">{errores.new}</Alert>}

                        <CrearPartidoFormulario errores={errores} callback={crear} editable={false}/>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {CrearPartido}