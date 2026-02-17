import React, { useState } from 'react'

const StepOne = ({validate, step, setStep, formData, setFormData, error}) => {
  
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNext = () => {
    if(validate(step)){
      setStep(step + 1)
    }
    console.log(step)
  }
  
  return (
    <div className='text-black py-5 mr-20'>
          <h1 className='text-3xl font-bold'>Personal Info</h1>
          <h3 className='text-md font-semibold opacity-30'>Please provide your name, email address, and phone number.</h3>
          <form>
            <div className='flex flex-col gap-2 mt-6'>
            <label>Name</label>
            <input className='border py-2 px-2 rounded-md text-[16px]'
             type="text" 
             name='name' 
             placeholder='e.g Stephen King'
             value={formData.name}
             onChange={handleChange}/>
            <p className={error.phoneNumber ? "text-[hsl(354_84%_57%)] font-semibold text-[14px] text-right" : "opacity-0"}>Enter a name</p>

          </div>
          <div className='flex flex-col gap-2 mt-1'>
            <label>Email Address</label>
            <input className='border py-2 px-2 rounded-md text-[16px]' 
            type="text" 
            name='email' 
            placeholder='e.g stephenking@lorem.com'
            value={formData.email}
            onChange={handleChange}/>
            <p className={error.phoneNumber ? "text-[hsl(354_84%_57%)] font-semibold text-[14px] text-right" : "opacity-0"}>Enter a valid email</p>
          </div>
          <div className='flex flex-col gap-2 mt-1'>
            <label>Phone Number</label>
            <input className='border py-2 px-2 rounded-md text-[16px]' 
            type="tel" 
            name='phoneNumber' 
            placeholder='e.g +1 234 567 890'
            value={formData.phoneNumber}
            onChange={handleChange}/>
            <p className={error.phoneNumber ? "text-[hsl(354_84%_57%)] font-semibold text-[14px] text-right" : "opacity-0"}>Enter a valid phone number</p>
          </div>
          <div className=''>
            <button className=' cursor-pointer bg-[hsl(213_96%_18%)] text-white font-semibold py-3 px-8 rounded-md text-[16px] mt-10'
              type='button' onClick={handleNext} >
              Next Step
          </button>
          </div>
          
          </form>
          
      </div>
  )
}

export default StepOne