import React from 'react'

import footer from '../assets/footer.jpg'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';



const Footer = () => {
  return (
    <footer>
      <div style={{ backgroundImage: `url(${footer})` }}
        className='py-16 bg-center bg-cover flex flex-wrap justify-center '
      >
        <div className='w-80 flex flex-col gap-4'>
          <h3 className='text-2xl'><span className='text-red-400 font-bold'>Clean</span><span className='text-sky-500 font-bold'>Dog</span></h3>
          <p className='text-white'>Cuidando do seu pet com carinho e profissionalismo</p>
          <div className='social flex gap-2'>
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
          </div>
        </div>
        <div className='w-80 flex flex-col gap-4 text-white'>
          <h3 className=' font-bold text-2xl'>Horário de Funcionamento</h3>
          <div className='separator w-20 '></div>
          <p>
            <b>SEGUNDA-SEXTA</b>
            <br />
            09:00~18:00
          </p>
          <p>
            <b>SÁBADO</b>
            <br />
            09:00~14:00
          </p>

        </div>
        <div className='w-80 flex flex-col gap-4 text-white'>
          <h3 className='font-bold text-2xl'>Info Contato</h3>
          <div className='separator w-20 '></div>
          <p><b>Telefone 01:</b> 21 99058-XXXX</p>
          <p><b>Telefone 02:</b> 21 2167-XXXX</p>
          <p><b>Email:</b>cleandog@cleandog.com</p>
        </div>
      </div>
      <div className='bg-slate-800 text-white py-8 text-center'>
        <p>&copy; Copyright 2024. All Rights Reserved.</p>
        <p>A site made by Fihr with <span className='text-red-700'>❤</span></p>
      </div>
    </footer>
  )
}

export default Footer