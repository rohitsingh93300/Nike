import { ChevronRight } from 'lucide-react';
import React from 'react'
// import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center md:gap-2 gap-1 px-6 md:px-0 text-[#5e5e5e] font-semibold md:text-lg capitalize mt-4 text-sm'>
      HOME <ChevronRight/> SHOP <ChevronRight/> {product.category} <ChevronRight/> {product.name}
    </div>
  )
}

export default Breadcrum