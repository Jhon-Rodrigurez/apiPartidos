import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "../css/App.css"

const SignupFormulario= ({errores,callback})=> {

    const [nombre ,setNombre] = useState("");
    const [email ,setEmail] = useState("");
    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        callback({username, password, nombre, email});
    }

    return(
        <Form onSubmit={enviarFormulario}>
            <InputGroup className="mt-3 mb-3 animate__animated animate__rotateInUpRight" controlId="nombre">
                <InputGroup.Text className="fw-semibold">Nombres</InputGroup.Text>
                <Form.Control
                className="rounded-1"
                type="text"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={e=>setNombre(e.target.value)}
                isInvalid={errores.nombre}
                pattern="[A-Z a-z]+"
                required />

                <Form.Control.Feedback type="invalid">
                    {errores.nombre}
                </Form.Control.Feedback>
            </InputGroup>
            
            <InputGroup className="mb-3 animate__animated animate__rotateInUpRight" controlId="correo">
                <InputGroup.Text className="fw-semibold">Correo</InputGroup.Text>
                <Form.Control
                className="rounded-1"
                type="email"
                placeholder="Ingrese su correo"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                isInvalid={errores.email}
                // pattern="[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/]"
                required />

                <Form.Control.Feedback type="invalid">
                    {errores.email}
                </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3 animate__animated animate__rotateInUpRight" controlId="userName">
                <InputGroup.Text className="fw-semibold">Usuario</InputGroup.Text>
                <Form.Control
                className="rounded-1"
                type="text"
                placeholder="Ingrese su usuario"
                value={username}
                onChange={e=>setUsername(e.target.value)}
                isInvalid={errores.username}
                required />

                <Form.Control.Feedback type="invalid">
                    {errores.username}
                </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3 animate__animated animate__rotateInUpRight" controlId="password">
                <InputGroup.Text className="fw-semibold">Contraseña</InputGroup.Text>
                <Form.Control
                className="rounded-1"
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                isInvalid={errores.password}
                minLength={5}
                required />

                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback>
            </InputGroup>

            <div className="text-center">
                <Button type="submit" variant="dark" className="button-page fw-bold fs-5 mt-4 animate__animated animate__rotateIn">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                    Crear usuario
                </Button>
            </div>
        </Form>
    )
}

export {SignupFormulario}