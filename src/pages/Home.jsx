import React from 'react'

import Gallery from '../components/gallery'

import aboutUsImg from '../assets/imgAboutUs.jpg'
import paw from '../assets/paw.jpg'

import heroImg from '../assets/bgHero.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ourTeam, services } from '../helper/helper';


const Home = () => {
  return (
    <section>
      {/* =====HeroSection===== */}
      <section
        style={{ backgroundImage: `url(${heroImg})` }}
        className='min-h-[100vh] bg-fixed bg-center bg-cover flex flex-col justify-center max-sm:bg-scroll' id='home'>

        <div className='text-white ml-20 flex flex-col gap-2'>
          <h3 className='text-5xl'>Bem Vindo ao <span className='text-red-400 font-bold'>Clean</span><span className='text-sky-500 font-bold'>Dog</span></h3>
          <p className='text-2xl'>Cuidando do seu pet com amor e carinho</p>
          <a href='https://wa.me/'>
            <button className='btn w-52'>
              <WhatsAppIcon />Fale Conosco
            </button>
          </a>

        </div>
      </section>

      {/* =====AboutUsSection===== */}
      <section className='py-16 px-20 bg-slate-900 text-white flex flex-col justify-center items-center gap-10 max-sm:px-4' id='about'>

        <div className='flex items-center gap-4 max-lg:flex-col'>
          <div className='flex flex-col'>
            <h3 className='title'>Sobre Nós</h3>
            <div className='separator w-20 my-4'></div>
            <p className='text-[1.2rem]'>Empresa fundada em 2014 com objetivo de proporcionar serviços de qualidade, com segurança e amor, garantindo o bem-estar e a felicidade dos pets.
              <br /><br />
              Temos a Missão de oferecer serviços de qualidade, com segurança e amor, garantindo o bem-estar e a felicidade dos pets
              <br /><br />
              Nosso objetivo é ser referência em serviços de banho e tosa, promovendo saúde e conforto para os animais e confiança para seus donos."
              <br /><br />
              Fazemos isso pelo amor pelos animais, qualidade no atendimento, profissionalismo, segurança e higiene.
            </p>
          </div>

          <img className='w-[30rem]' src={aboutUsImg} alt='cat' />

        </div>


      </section>

      {/* =====ServicesSection===== */}
      <section className='flex flex-col items-center py-16 bg-sky-900 text-white' id='services'>
        <h3 className='title'>Nossos Serviços</h3>
        <div className='separator w-40 my-4'></div>
        <div className='mt-16 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 justify-center'>
          {services.map((service, index) => {
            return (
              <div className='flex flex-col items-center p-4 w-80 bg-slate-900 gap-2 hover:scale-110 duration-300' key={index}>
                <i className={service.image} />
                <h3 className='text-[1.2rem] font-semibold'>{service.name}</h3>
                <p>{service.desc}</p>
              </div>
            )
          })}
        </div>

      </section>

      {/* =====Gallery===== */}
      <section className='px-20 py-16 flex flex-col ' id='gallery'>
        <div className='flex flex-col items-center'>
          <h3 className='title'>Galeria de Fotos</h3>
          <div className='separator w-40 my-4'></div>
        </div>

        <Gallery />
      </section>

      {/* =====Team===== */}
      <section className='bg-slate-900 text-white py-12 flex flex-col items-center' id='team'>
        <h3 className='title'>Nosso Time</h3>
        <div className='separator w-40 my-4'></div>
        <div className='flex gap-12 max-[500px]:flex-col'>
          {ourTeam.map((team, index) => {
            return (
              <div key={index}>
                <img className='w-60 h-80' src={team.img} alt='team' />
                <h3 className='text-center text-2xl mt-4'>{team.name}</h3>
              </div>
            )
          })}
        </div>
      </section>

      {/* =====Contact===== */}
      <section className='flex flex-col items-center py-16'>

        <h3 className='title'>Entre em Contato</h3>
        <div className='separator w-40 my-4'></div>
        <form method='POST' className='flex  flex-col gap-4 items-center'>

          <div className='flex gap-4 max-sm:flex-col'>
            <div className='flex flex-col gap-4'>
              <input className='border-[1px] border-black w-80' type='name' placeholder='Nome Completo*' required></input>
              <input className='border-[1px] border-black w-80' type='email' placeholder='Email*' required></input>
              <input className='border-[1px] border-black w-80' type='number' placeholder='Telefone*' required></input>
              <input className='border-[1px] border-black w-80' type='text' placeholder='Assunto*' required></input>
            </div>
            <textarea className='w-80 border-[1px] border-black' rows={6} placeholder='Digite sua Dúvida*' name='message' required></textarea>
          </div>

          <button className='btn mt-4' type='submit'>Enviar Menssagem</button>
        </form>
      </section>


    </section>
  )
}

export default Home