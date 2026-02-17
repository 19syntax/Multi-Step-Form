import React from 'react'

const StepTwo = ({validate, step, setStep, formData, setFormData, error}) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBack = () => {
      setStep(step - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(validate(step)){
      setStep(step + 1)
      console.log(formData)
    }
  }
  return (
      <div className='text-black py-5 mr-20'>
          <h1 className='text-3xl font-bold'>Select your plan</h1>
          <h3 className='text-md font-semibold opacity-30'>You have the option of monthly or yearly billing.</h3>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2 mt-6'>
              <label>Enter Address</label>
              <input 
              className='border py-2 px-2 rounded-md text-[16px]' 
              type="text" 
              placeholder='e.g 21, Mojisola Street'
              name='address'
              value={formData.address}
              onChange={handleChange}/>
              <p className={error.phoneNumber ? "text-[hsl(354_84%_57%)] font-semibold text-[14px] text-right" : "opacity-0"}>Enter a valid address</p>
            </div>
            <div className='flex flex-col gap-2 mt-1'>
              <label>Enter Age</label>
              <input 
              className='border py-2 px-2 rounded-md text-[16px]' 
              type="number" name='age' 
              placeholder='e.g 42'
              value={formData.age}
              onChange={handleChange}/>
              <p className={error.age ? "text-[hsl(354_84%_57%)] font-semibold text-[14px] text-right" : "opacity-0"}>Enter valid age</p>
            </div>
            <div className='flex flex-col gap-2 mt-1'>
              <label>Account Number</label>
              <input className='border py-2 px-2 rounded-md text-[16px]' 
              type="tel" name='account' 
              placeholder='e.g 222 631 536 8' 
              value={formData.account}
              onChange={handleChange}/>
              <p className={error.account ? "text-[hsl(354_84%_57%)] font-semibold text-[14px] text-right" : "opacity-0"}>Enter a valid account number</p>

            </div>
            <div className='flex justify-between items-center mt-16'>
            <button className='border border-[hsl(213_96%_18%)] text-[hsl(213_96%_18%)] font-semibold py-3 px-8 rounded-md text-[16px]' onClick={handleBack}>
              Go Back
            </button>
            <button className=' bg-[hsl(213_96%_18%)] text-white font-semibold py-3 px-8 rounded-md text-[16px]' type='submit'>
              Submit
            </button>
            </div>
          </form>
      </div>
  )
}

export default StepTwo