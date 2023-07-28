import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ELIMINARPARTIDO_DELETE_ENDPOINT } from '../connections/helpers/endpoints';
import Swal from 'sweetalert2';

function EliminarPartidoBoton({id, local, visitante}) {

    const navegar= useNavigate()

    const eliminar= async()=> {

        axios.delete(`${ELIMINARPARTIDO_DELETE_ENDPOINT}/${id}`)
        .then(respuesta => {
            navegar("/")
            Swal.fire({
                title: 'Partido eliminado.',
                text: 'Eliminaste el partido.',
                imageUrl: 'https://media.giphy.com/media/f2otJkmMUDPa0/giphy.gif',
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
            console.error(err);
        })

    }

    const crearAlerta= ()=> {

        const titulo= `Eliminar partido \n ¿Desea eliminar el partido ${local} vs ${visitante}?`

        return (window.confirm(titulo) === true) ? eliminar() : ()=> {}
    }

    return (
        <Button variant="danger" size="sm" onClick={crearAlerta}>
            Eliminar
        </Button>
    )
}

export {EliminarPartidoBoton}