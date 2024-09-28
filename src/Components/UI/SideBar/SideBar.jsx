import React from 'react';
import Images from '../../../assets/Images/download (7).jfif';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
const SideBar = () => {
    return (
        <div className='shadow-2xl w-[100%] h-[100%] bg-white rounded-xl py-2 px-5'>
            <div className='w-[100%]'>
                <img src={Images} alt="" />
            </div>
            <div className='text-center my-4'>
                <h2 className='text-black text-2xl font-semibold'>Hi I'M <span className='text-green-500'>Developer</span></h2>
                <p className='text-black text-xl'>Web Developer</p>
                <div className='mt-2'>
                    <p className='py-1 text-black'> example@gmail.com</p>
                    <p className='text-black'>+88 018****</p>
                </div>

                <div className='flex items-center gap-3 justify-center my-4'>
                    <button className='btn btn-success text-white'><FaFacebook /></button>
                    <button className='btn btn-success text-white'><FaLinkedin /></button>
                    <button className='btn btn-success text-white'><FaGithub/></button>
                </div>
              <div className='flex flex-col items-center'>
              
                    <button className='bg-green-500 my-2  py-3 px-10 text-white rounded-2xl'>Hire Me</button>
             
              
                    <button className='bg-black  py-3 px-7 text-white rounded-2xl'>Download Cv</button>
               
              </div>
            </div>
        </div>
    );
};

export default SideBar;