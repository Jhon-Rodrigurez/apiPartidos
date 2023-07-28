import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer= ()=> {

    return (

        <footer className='mt-5 animate__animated animate__flipInY'>
            <div className='d-flex justify-content-center text-white fs-4 fw-bold text-uppercase'>
                <p className='mt-4 animate__animated animate__rubberBand animate__delay-1s'>Desarrollado <span>por:</span></p>
            </div>
            <div className='d-flex justify-content-center text-white fw-bold fs-5'>
                <p className='animate__animated animate__heartBeat animate__delay-2s'>Jhon Rodríguez</p>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <a href="https://github.com/Jhon-Rodrigurez" className='icono btn btn-floating btn-lg mx-3 mb-4 animate__animated animate__backInDown animate__delay-3s'>
                    <FaGithub size={30} />
                </a>
                <a href="https://mail.google.com/mail/u/1/#inbox" className='icono btn btn-floating btn-lg mx-3 mb-4 animate__animated animate__backInDown animate__delay-4s'>
                    <MdEmail size={30} />
                </a>
                <a href="https://www.linkedin.com/in/jhon-rodr%C3%ADguez-974a9b259/" className='icono btn btn-floating btn-lg mx-3 mb-4 animate__animated animate__backInDown animate__delay-5s'>
                    <FaLinkedin size={30} />
                </a>
            </div>
            <div>
                <p className='d-flex justify-content-center fs-5 fw-semibold text-white animate__animated animate__bounceInUp animate__delay-5s'>© 2023: Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export {Footer}