import React from 'react';
import { Wifi, Clock, MapPin, Phone } from 'lucide-react';

function Heading() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center relative'>
        <img
          src='https://picsum.photos/seed/nigga/800/400'
          alt='Restaurant-bg'
          className='w-full max-w-3xl h-44 md:h-64 object-cover '
        />

        <div className='absolute inset-0 flex justify-start items-end'>
          <img
            src='https://picsum.photos/seed/nigger/800/400'
            alt='Restaurant Logo'
            className='w-20 h-20 md:w-24 md:h-24 rounded-lg border-2 mb-4 mx-6 border-white'
          />
        </div>
      </div>

      <h1 className='text-2xl md:text-4xl font-bold pt-3 px-6 '>
        Restaurant Name
      </h1>

      <div className='rounded-lg px-6 py-3'>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
          <p className='text-md md:text-lg flex items-center gap-2'>
            <Wifi className='text-blue-500' size={20} />
            WiFi: <span className='font-bold'>212125</span>
          </p>
          <p className='text-md md:text-lg flex items-center gap-2'>
            <Clock className='text-yellow-500' size={20} />
            Hours: <span className='font-bold'>24/7</span>
          </p>
          <p className='text-md md:text-lg flex items-center gap-2'>
            <Phone className='text-green-500' size={20} />
            Phone: <span className='font-bold'>+1 234 567 890</span>
          </p>
          <p className='text-md md:text-lg flex items-center gap-2'>
            <MapPin className='text-red-500' size={20} />
            Address: <span className='font-bold'>123 Main St, City</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
