import React from 'react';
import { GiPositionMarker } from 'react-icons/gi';
import { IoIosMail } from 'react-icons/io';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xldlbawd") // Remplace par ton ID Formspree

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white to-blue-200">
        <p className="text-green-600 font-semibold text-lg">✅ Merci pour votre message !</p>
      </div>
    )
  }
  return (
    <div className='min-h-screen bg-slate-100 flex flex-col p-10'>
      <div className='flex justify-start mb-8'>
        <h1 className='font-extrabold text-3xl text-gray-800'>Get in Touch</h1>
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-6'>
        <div className='w-full h-40 lg:w-1/2 bg-white rounded-xl shadow-lg p-6 text-gray-700'>
          <p className='text-2xl font-bold text-gray-800'>Contact Information</p>
          <p className='text-sm font-medium mt-5 flex items-center'>
          <IoIosMail className='mr-2 text-red-500 text-2xl' />
          mamadoukabadiagne@gmail.com
        </p>
        <p className='text-sm font-medium flex items-center'>
          <GiPositionMarker className='mr-2 text-black text-2xl' />
          Dakar, Yoff, Sénégal
        </p>
        </div>

        <div className='w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full py-2 mt-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your name'
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
                className='w-full py-2 mt-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your email'
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
                className='w-full py-2 mt-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your message'
                rows='4'
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type='submit'
              disabled={state.submitting}
              className='w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
