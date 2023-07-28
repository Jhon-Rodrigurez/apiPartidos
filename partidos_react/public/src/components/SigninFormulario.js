import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "../css/App.css"
import { FiUser, FiLock } from 'react-icons/fi';

function SigninFormulario({errores, callback}) {

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const enviarFormulario= (e)=> {
        e.preventDefault();
        callback({username, password});
    }

    return(
        <Form onSubmit={enviarFormulario}>
            <InputGroup className="my-3 animate__animated animate__rotateInUpRight" controlId="userName">
                <InputGroup.Text className="fw-semibold"><FiUser size={25}/></InputGroup.Text>
                <Form.Control
                className="form-user rounded-1"
                type="text"
                placeholder="Ingrese su usuario"
                value={username}
                onChange={e=>setUsername(e.target.value)}
                isInvalid={errores.username} />

                <Form.Control.Feedback type="invalid">
                    {errores.username}
                </Form.Control.Feedback>
            </InputGroup>
            
            <InputGroup className="mb-3 animate__animated animate__rotateInUpRight" controlId="password">
                <InputGroup.Text className="fw-semibold"><FiLock size={25}/></InputGroup.Text>
                <Form.Control
                className="rounded-1"
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                isInvalid={errores.password} />

                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback>
            </InputGroup>

            <div className="text-center">
                <Button type="submit" variant="dark" className="button-page fw-bold  fs-5 mt-3 animate__animated animate__rotateIn">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                    Iniciar sesión
                </Button>
            </div>
        </Form>
    )
}

export {SigninFormulario}