import React from 'react';
import { GiPositionMarker } from 'react-icons/gi';
import { IoIosMail } from 'react-icons/io';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xldlbawd");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white to-blue-200">
        <div className="bg-white p-8 rounded-xl shadow-xl text-center">
          <p className="text-green-600 font-semibold text-lg">
            ✅ Merci pour votre message !
          </p>
          <p className="text-gray-600 mt-2">
            Thank you for reaching out. I will get back to you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-slate-100 flex flex-col p-10'>
      
      <div className='flex justify-start mb-8'>
        <h1 className='font-extrabold text-3xl text-gray-800'>
          Contact / Get in Touch
        </h1>
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-8'>
        
        {/* INFOS */}
        <div className='w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6 text-gray-700'>
          <p className='text-2xl font-bold text-gray-800'>
            Informations de Contact / Contact Information
          </p>

          <p className='text-sm mt-6 leading-6'>
            Je suis disponible pour des opportunités en entreprise, 
            des collaborations freelance ou des projets innovants.
            <br />
            I am available for job opportunities, freelance collaborations 
            and innovative projects.
          </p>

          <div className='mt-6'>
            <p className='text-sm font-medium flex items-center'>
              <IoIosMail className='mr-2 text-red-500 text-2xl' />
              mamadoukabadiagne@gmail.com
            </p>

            <p className='text-sm font-medium flex items-center mt-3'>
              <GiPositionMarker className='mr-2 text-black text-2xl' />
              Dakar, Sénégal
            </p>
          </div>
        </div>

        {/* FORMULAIRE */}
        <div className='w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6'>
          <form onSubmit={handleSubmit}>

            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Nom / Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className='w-full py-2 mt-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Votre nom / Your name'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full py-2 mt-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Votre email / Your email'
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className='mb-4'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                required
                rows='4'
                className='w-full py-2 mt-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Votre message / Your message'
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type='submit'
              disabled={state.submitting}
              className='w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'
            >
              {state.submitting 
                ? 'Envoi en cours... / Sending...' 
                : 'Envoyer le message / Send Message'}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;