import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*----- left section----*/}
            <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi magni officia quidem rerum dolor libero optio vitae nostrum temporibus maiores nulla, accusamus laboriosam consequatur iusto, totam assumenda expedita iste?</p>
        </div>

        <div>
            {/*----- center section----*/}
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Pricacy policy</li>
            </ul>
        </div>

        <div>
            {/*----- right section----*/}
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>9353249933</li>
                <li>yadavji@gmail.com</li>
            </ul>
        </div>
        <div>
             {/*-----copywright section----*/}
             <hr />
             <p className='py-5 text-sm text-center'>Copyright 2024@Prescipto-All Right Reserved</p>
        </div>
     </div>
    </div>
  )
}

export default Footer