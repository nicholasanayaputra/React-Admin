/* eslint-disable no-unused-vars */
import React from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { FaRegSun, FaWrench,FaRegMap, FaChevronRight, FaChevronLeft,  FaRegChartBar, FaStickyNote} from 'react-icons/fa'
import { ImTable} from 'react-icons/im'
import {  BsPencil} from 'react-icons/bs'
import { IoMdWater} from 'react-icons/io'

const Sidebar = () => {

  return (
    <div className='bg-[#1c2536] h-screen px-[25px] w-[246px] '>
        <div className=' px-[15px] py-[25px] flex items-center justify-center'>
            <h1 className='text-primary text-[18px] leading-[24px] font-extrabold font-sans'>Admin Panel</h1>
            <a href="#" className='text-[10px] block text-white font-semibold border bg-[#388e3c] rounded-md py-1 px-2 border-hidden mb-4 ml-2'>PRO</a>
        </div>
        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-t-[1px] border-[#EDEDED]/[0.3]'>
            <AiFillDashboard color='white' />
            <a href="/dashboard" className='text-[14px] leading-[20px] font-bold text-primary cursor-pointer'>Dashboard</a>
        </div>
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-primary'>THEME</p>
            <div className='flex items-center justify-between gap-[10px] py-[12px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <IoMdWater className='text-primary' />
                    <a href="/colors"  className='text-[14px] leading-[20px] font-normal text-primary'>Colors</a>
                </div>
                <FaChevronRight className='text-primary'/>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[12px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <BsPencil className='text-primary' />
                    <p className='text-[14px] leading-[20px] font-normal text-primary'>Typhography</p>
                </div>
                <FaChevronRight className='text-primary'/>
            </div>
        </div>
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-primary'>INTERFACE</p>
            <div className='flex items-center justify-between gap-[10px] py-[12px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun className='text-primary' />
                    <p className='text-[14px] leading-[20px] font-normal text-primary'>Pages</p>
                </div>
                <FaChevronRight className='text-primary'/>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[12px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegChartBar className='text-primary' />
                    <p className='text-[14px] leading-[20px] font-normal text-primary'>Charts</p>
                </div>
                <FaChevronRight className='text-primary'/>
            </div>
        </div>
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-primary'>ADDONS</p>
            <div className='flex items-center justify-between gap-[10px] py-[12px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaStickyNote className='text-primary' />
                    <p className='text-[14px] leading-[20px] font-normal text-primary'>Components</p>
                </div>
                <FaChevronRight className='text-primary'/>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[12px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaWrench className='text-primary' />
                    <p className='text-[14px] leading-[20px] font-normal text-primary'>Utilities</p>
                </div>
                <FaChevronRight className='text-primary'/>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[12px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegMap className='text-primary' />
                    <p className='text-[14px] leading-[20px] font-normal text-primary'>Maps</p>
                </div>
                <FaChevronRight className='text-primary'/>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[12px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <ImTable className='text-primary' />
                    <p className='text-[14px] leading-[20px] font-normal text-primary'>Tables</p>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center pt-[10px] '>
            <button className='bg-[#388e3c] text-white flex items-center justify-center py-2 px-3 w-full leading-[20px] rounded-md font-bold hover:bg-[#40a545]'>Upgrade to Pro !</button>
        </div>
    </div>
  )
}

export default Sidebar