import React from 'react'
import thanks  from '../assets/images/icon-thank-you.svg'

const StepThree = ({formData}) => {
    
  return (
    <div className='w-125 h-screen flex justify-center items-center '>
        <div className='text-center flex flex-col items-center'>
            <img className='w-25 text-center' src={thanks} alt="" />
        <h1 className='text-2xl font-bold text-[hsl(213_96%_18%)]'>Thank you!</h1>
        <p className='text-[14px] font-medium opacity-80 mt-5'>
        Thanks for confirming your subscription!
        </p>
        <div className='text-center font-semibold opacity-25 mt-2'>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone Number: {formData.phoneNumber}</p>
        <p>Address: {formData.address}</p>
        <p>Age: {formData.age}</p>
        <p>Account: {formData.account}</p>
        </div>

        </div>
        
    </div>
  )
}

export default StepThree