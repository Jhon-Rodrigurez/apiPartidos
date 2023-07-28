import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SigninFormulario } from '../components/SigninFormulario';
import { autenticacion } from '../connections/usuarioAcciones';
import "../css/App.css"
import Swal from 'sweetalert2';

function Signin() {

    const [errores, setErrores] = useState({});
    const conectado= useSelector(estado=>estado.conectado);
    const navegar= useNavigate();
    const enviarAccion= useDispatch();

    useEffect(() => {
        if(conectado) {
            navegar("/");
        }
    });

    const login= ({username, password}) => {
        
        const error={};
        setErrores(error);

        enviarAccion(autenticacion({username, password}))
        .then(respuesta => {
            navegar("/");
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Bienvenido, ' + username
              })
        })
        .catch(err => {
            setErrores({ ingresar: "No se puede iniciar sesión con esas credenciales."});
        });

    }

    return (
        <Container className="mt-5 mb-5">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center mt-5 mb-5 text-white fs-2 fw-bold animate__animated animate__bounceInUp">Iniciar <span>sesión</span></h3>
                    <Card.Body>
                        {errores.ingresar && <Alert variant="danger">{errores.ingresar}</Alert>}
                        <SigninFormulario errores={errores} callback={login}></SigninFormulario>
                        <div className="mt-3 text-center animate__animated animate__wobble">
                            <Link to={'/signup'} className="link-page">¿No tienes una cuenta? Registrate aquí.</Link>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {Signin}