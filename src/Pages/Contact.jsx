import React from 'react'
import {Mail, MapPin, Phone} from 'lucide-react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='bg-gray-950'>
      <div className='max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen'>
        {/* header */}
        <motion.h2 
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1, delay:0.2}}
        className='text-3xl md:text-4xl font-bold text-[#33CCCC] mb-4 text-center '>Get in touch</motion.h2>
        <motion.p 
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1.5, delay:0.4}}
        className='text-gray-300 text-center max-w-xl mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium maiores aut dolores quo asperiores iste, id consequatur dolorum deleniti quod!</motion.p>
        <div className='grid md:grid-flow-col gap-10'>
            {/* contact form */}
            <motion.div 
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.5, delay:0.4}}
            className='bg-[#c7e9ec] shadow-xl shadow-[#33CCCC] rounded-lg p-8 md:p-12 max-w-xl md:w-[400px]'>
               <form className='flex flex-col space-y-6'>
                <div>
                    <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Full Name</label>
                    <input type="text" id='name' 
                    className='mt-1 p-3 block w-full text-white border-2 border-[#33CCCC] bg-gray-900 rounded-md shadow-sm sm:text-sm' 
                    placeholder='John Doe'
                    />
                </div>
                <div>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-900'>Email Address</label>
                    <input type="email" id='email' 
                    className='mt-1 p-3 block w-full text-white border-2 border-[#33CCCC] bg-gray-900 rounded-md shadow-sm sm:text-sm' 
                    placeholder='John.doe@example.com'
                    />
                </div>
                <div>
                    <label htmlFor="message" className='block text-sm font-medium text-gray-900'>Message</label>
                    <textarea rows='4' id='message' 
                    className='mt-1 p-3 block w-full text-white border-2 border-[#33CCCC] bg-gray-900 rounded-md shadow-sm sm:text-sm' 
                    placeholder='Your message here...'
                    />
                </div>
                <button className='bg-[#33CCCC] text-white py-2 px-4 rounded-md shadow-md hover:bg-black'>Send Message</button>
               </form>
            </motion.div>
            {/* location and map */}
            <motion.div 
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.5, delay:0.4}}
            className='bg-[#c7e9ec] shadow-xl shadow-[#33CCCC] rounded-lg p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8'>
                <div className='flex-1'>
                    <h3 className='text-2xl font-semibold mb-4'>Our Location</h3>
                    <div className='text-gray-950 flex gap-2 items-center'>
                        <MapPin fill='#33CCCC' className='text-gray-900' />
                        <p>
                            123 Business Avenue, <br />
                            Nike City, Marketing State 12345
                        </p>
                    </div>
                    <div className='text-gray-950 flex gap-2 items-center'>
                        <Phone fill='#33CCCC' className='text-gray-900' />
                        <p className='text-gray-950 mt-4'>
                          Phone: (123) 456-7890
                        </p>
                    </div>
                    <div className='text-gray-950 flex gap-2 items-center'>
                        <Mail fill='#33CCCC' className='text-gray-900' />
                        <p className='text-gray-950 '>
                          Email: contact@Nike.com
                        </p>
                    </div>
                </div>
                <div>
                    {/* placeholder for google map */}
                    <div className='w-full h-64 bg-gray-300 rounded-lg'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35031.487437686286!2d88.32278348635597!3d22.6451547723465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d552f1bcc7d6f4f%3A0xd255053387b8dc4a!2sWebelite%20Builders!5e0!3m2!1sen!2sin!4v1730717014021!5m2!1sen!2sin" 
                    className='w-full h-full rounded-lg'
                    width="600" 
                    height="450" 
                    allowfullscreen="" 
                    aria-hidden="false"
                    tabIndex='0'
                    loading="lazy" 
                    ></iframe>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact