import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SIGNUP_POST_ENDPOINT } from '../connections/helpers/endpoints'
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { SignupFormulario } from '../components/SignupFormulario'
import Swal from 'sweetalert2';

const Signup= ()=> {
    
    const [errores, setErrores] = useState({});
    const navegar= useNavigate();

    const registro= async ({username, password, nombre, email}) => {

        const error={};
        setErrores(error);

        axios.post(SIGNUP_POST_ENDPOINT, {username, password, nombre, email},
                {headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}}
            ).then(respuesta => {
                console.log(respuesta)
                navegar("/signin")
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Usuario creado con éxito.'
                  })
            }).catch(err => {
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


    return(
        <Container className="mt-5 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center mt-5 mb-4 text-white fs-2 fw-bold animate__animated animate__bounceInUp">Registro <span>usuario</span></h3>
                    <Card.Body>
                        {errores.crear && <Alert variant="danger">{errores.crear}</Alert>}
                        <SignupFormulario errores={errores} callback={registro} />
                        <div className="mt-4 mb-5 text-center animate__animated animate__wobble">
                            <Link to={'/signin'} className="link-page">¿Ya tienes una cuenta? Iniciar sesión aquí</Link>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {Signup}