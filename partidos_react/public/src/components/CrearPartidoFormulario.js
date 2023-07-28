import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import "../css/App.css"

function CrearPartidoFormulario({errores, callback,
    pFecha="", pNombreLocal="", pnombreVisitante="", pEquipoLocal="0", pEquipoVisitante="0",
    pGolesLocal="0", pGolesVisitante="0", editable}) {

    const [fecha ,setFecha] = useState(pFecha);
    const [nombreEquipoLocal] = useState(pNombreLocal);
    const [nombreEquipoVisitante] = useState(pnombreVisitante);
    const [equipoLocal ,setEquipoLocal] = useState(pEquipoLocal);
    const [equipoVisitante ,setEquipoVisitante] = useState(pEquipoVisitante);
    const [golesLocal ,setGolesLocal] = useState(pGolesLocal);
    const [golesVisitante ,setGolesVisitante] = useState(pGolesVisitante);

    const enviar = (e) => {
        e.preventDefault();
        (!editable) ? callback({fecha, equipoLocal, equipoVisitante}) : callback({golesLocal, golesVisitante})
    }

    return (
        <Form onSubmit={enviar}>
            {!editable && 
                <Row>
                    <Col md="6" xs="12" className='animate__animated animate__rotateInUpRight'>
                        <Form.Group className='mt-3 mb-3' controlId='fecha'>
                            <Form.Label className='fw-semibold fs-5 text-white'>Fecha</Form.Label>
                            <Form.Control
                                type='date'
                                value={moment(fecha).format('yyyy-MM-DD')}
                                min={moment().format('yyyy-MM-DD')}
                                onChange={e=>setFecha(e.target.value)}
                                isInvalid={errores.fecha}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback type='invalid'>
                                {errores.fecha}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {!editable && 
                <Row>
                    <Col md="6" xs="12" className='animate__animated animate__rotateInUpRight'>
                        <Form.Group controlId='idEquipoLocal'>
                            <Form.Label className='fw-semibold fs-5 text-white'>Equipo local</Form.Label>
                            <Form.Select
                                as='select'
                                type='select'
                                value={equipoLocal}
                                onChange={e=>setEquipoLocal(e.target.value)}
                                required
                            >
                                <option value="">Seleccione</option>
                                <option value="1">Cucuta</option>
                                <option value="2">Bogota</option>
                                <option value="3">Medellin</option>
                                <option value="4">Bucaramanga</option>
                                <option value="5">Cali</option>
                            </Form.Select>

                            <Form.Control.Feedback type='invalid'>
                                {errores.equipoLocal}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md="6" xs="12" className='animate__animated animate__rotateInUpRight'>
                        <Form.Group controlId='idEquipoVisitante'>
                            <Form.Label className='fw-semibold fs-5 text-white'>Equipo visitante</Form.Label>
                            <Form.Select
                                as='select'
                                type='select'
                                value={equipoVisitante}
                                onChange={e=>setEquipoVisitante(e.target.value)}
                                required
                            >
                                <option value="">Seleccione</option>
                                <option value="1">Cucuta</option>
                                <option value="2">Bogota</option>
                                <option value="3">Medellin</option>
                                <option value="4">Bucaramanga</option>
                                <option value="5">Cali</option>
                            </Form.Select>

                            <Form.Control.Feedback type='invalid'>
                                {errores.equipoVisitante}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {editable && 
                <div className='mt-3 mb-3'>
                    <p className='fw-semibold text-center fs-5 mt-5 animate__animated animate__rotateInUpRight'> {nombreEquipoLocal} vs {nombreEquipoVisitante} </p>
                </div>
            }
            {editable &&
                <Row>
                    <Col md="6" xs="12" className='animate__animated animate__rotateInUpRight'>
                        <Form.Group controlId='golesLocal'>
                            <Form.Label className='fw-semibold text-white'>Goles equipo local</Form.Label>
                            <Form.Control
                            type='number'
                            min="0"
                            max="20"
                            value={golesLocal}
                            onChange={e=>setGolesLocal(e.target.value)}
                            isInvalid={errores.golesLocal} />

                            <Form.Control.Feedback type='invalid'>
                                {errores.golesLocal}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md="6" xs="12" className='animate__animated animate__rotateInUpRight'>
                        <Form.Group controlId='golesVisitante'>
                            <Form.Label className='fw-semibold text-white'>Goles equipo visitante</Form.Label>
                            <Form.Control
                            type='number'
                            min="0"
                            max="20"
                            value={golesVisitante}
                            onChange={e=>setGolesVisitante(e.target.value)}
                            isInvalid={errores.golesVisitante} />

                            <Form.Control.Feedback type='invalid'>
                                {errores.golesVisitante}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                </Row>
            }
            
            <div className='text-center'>
                <Button variant='dark' type='submit' className='button-page fw-bold fs-5 mt-5 animate__animated animate__rotateIn'>
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                    {!editable ? "Crear " : "Editar "}
                    partido
                </Button>
            </div>
        </Form>
    )
}

export {CrearPartidoFormulario}