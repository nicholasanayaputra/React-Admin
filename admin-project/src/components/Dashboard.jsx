/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {FaSearch, FaRegBell, FaEnvelope} from 'react-icons/fa'

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const showDropdown = () => {
    setOpen(!open)
  }
  return (
    <div className='flex items-center justify-between top-0 right-0 h-[70px] shadow-lg px-[25px] w-full '>
        <div className='flex items-center rounded-[5px]'>
            <input type="text" className='bg-[F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal ' placeholder="Search here"/>        
        <div className='bg-[#388e3c] h-[40px] px-[14px] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer'>
            <FaSearch color='white'/>
            </div>
        </div>
        <div className='flex items-center gap-[15px] relative'>
          <div className='flex items-center gap-[25px]'>
            <FaRegBell />
            <FaEnvelope />
          </div>
          <div className='flex items-center gap-[15px] relative'>
            <p>Nicholas</p>
          </div>
              <img src="https://images.unsplash.com/photo-1696335935648-8cdcd1bd30e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Account" className='h-[50px] w-[50px] rounded-full object-cover border-2 border-[#388e3c] cursor-pointer' onClick={showDropdown}/>
        </div>
        {
          open &&
          <div className='bg-white border h-[120px] w-[150px] absolute bottom-[455px] z-20 right-6 pt-[15px] pl-[15px] space-y-[10px]'>
            <p className='cursor-pointer hover:text-blue-800 font-semibold'>Profile</p>
            <p className='cursor-pointer hover:text-blue-800 font-semibold'>Settings</p>
            <p className='cursor-pointer hover:text-blue-800 font-semibold'>Log out</p>
          </div>
        }
    </div>
  )
}

export default Dashboard