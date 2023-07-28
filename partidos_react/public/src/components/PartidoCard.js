import { Badge, Button, Card } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import moment from 'moment'
import { EliminarPartidoBoton } from './EliminarPartidoBoton'
import "../css/App.css"

const PartidoCard= ({partido, editable})=> {
    
    return (
        <Card className='tarjeta mt-3 mb-3' bg="dark">
            <Card.Header className='tarjeta mi-card'>
                    {partido.jugado ?
                        <Badge className="mi-badge-jugado">Jugado</Badge>:
                        <Badge className="mi-badge-pendiente">Pendiente</Badge>
                }
                { editable ?
                    <div>
                        <Button variant='primary' size='sm' className="me-2"
                                as={NavLink} to={`/editarpartido/${partido.idPartido}`}
                        >
                            Editar
                        </Button>
                        <EliminarPartidoBoton id={partido.idPartido}
                                                local={partido.equipoEntityLocal.nombre}
                                                visitante={partido.equipoEntityVisitante.nombre} />
                    </div>
                    :""
                }
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Link to={`/partido/${partido.idPartido}`} className='nombres-equipo fw-bold'>
                        {partido.equipoEntityLocal.nombre} vs {partido.equipoEntityVisitante.nombre}
                    </Link>
                </Card.Title>
                <Card.Text className='text-white'>
                    Fecha: {moment(partido.fecha).format('D[/]MM[/]YYYY')}
                </Card.Text>
                <Card.Text className='text-white'>
                    Creado por {partido.usuarioEntity.nombre}, {moment(partido.creado).fromNow()}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export {PartidoCard}