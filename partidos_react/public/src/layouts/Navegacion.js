import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cerrarSesion } from '../connections/usuarioAcciones';

function Navegacion() {

  const conectado = useSelector(estado=>estado.conectado);
  const usuario = useSelector(estado=>estado.usuario);
  const dispatch= useDispatch();

  return (
    <Navbar bg="dark" variant='dark' expand="lg" className='fixed-top'>
      <Container>
        <Navbar.Brand as={NavLink} to={"/"} className='fw-bold fs-3 animate__animated animate__slideInRight animate__delay-1s'>Goal<span>Leyend</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto animate__animated animate__backInRight">
            {conectado &&
              <Nav.Link as={NavLink} to={"/crearpartido"}>Crear partido</Nav.Link>
            }
          </Nav>
          <Nav className="ms-auto animate__animated animate__backInLeft">
            {!conectado ? (
              <React.Fragment>
                <Nav.Link as={NavLink} to={"/signup"}>Registrarse</Nav.Link>
                <Nav.Link as={NavLink} to={"/signin"}>Iniciar sesión</Nav.Link>
              </React.Fragment>
            ):(
              <NavDropdown title={usuario.sub} id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to={"/mispartidos"} className='text-black'>Mis partidos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => dispatch(cerrarSesion())} className='text-black'>Cerrar sesion</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Navegacion};