import React from 'react'

export const Sidebar = ({step}) => {
  return (
    <div className='py-10 px-9 text-white flex flex-col gap-5 bg-[url("./assets/images/bg-sidebar-desktop.svg")] bg-cover bg-no-repeat rounded-2xl w-67.5'>
        <div className='flex gap-3 items-center'>
          <p className={step === 1 ? `bg-[hsl(228_100%_84%)] border-[hsl(228_100%_84%)] text-[hsl(213_96%_18%)] font-extrabold py-3 px-5 rounded-full` : `border font-bold py-3 px-5 rounded-full`}>1</p>
          <span>
            <p className='font-medium'>Step 1</p>
            <p className='font-bold text-xl'>Personal Info</p>
          </span>
        </div>
        <div className='flex gap-3 items-center'>
          <div className={step === 2 ? `bg-[hsl(228_100%_84%)] border-[hsl(228_100%_84%)] text-[hsl(213_96%_18%)] font-extrabold py-3 px-5 rounded-full` : `border font-bold py-3 px-5 rounded-full`}>2</div>
          <span>
            <p>Step 2</p>
            <p className='font-bold text-xl'>Address</p>
          </span>
        </div>
        <div className='flex gap-3 items-center'>
          <div className={step === 3 ? `bg-[hsl(228_100%_84%)] border-[hsl(228_100%_84%)] text-[hsl(213_96%_18%)] font-extrabold py-3 px-5 rounded-full` : `border font-bold py-3 px-5 rounded-full`}>3</div>
          <span>
            <p>Step 3</p>
            <p className='font-bold text-xl'>Confirmation</p>
          </span>
        </div>
      </div>
  )
}
