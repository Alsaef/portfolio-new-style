import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/navbar/NavBar';
import SideBar from '../Components/UI/SideBar/SideBar';
import Footer from '../Components/footer/Footer';

const Layout = () => {
    return (
        <div className='mx-auto w-[95%]'>
            <NavBar></NavBar>
          <div className='min-h-screen flex lg:flex-row flex-col lg:items-start items-center gap-4 my-7'>
            <div>
                <SideBar/>
            </div>
             <div>
            <Outlet></Outlet>
            </div>
          </div>
           <Footer></Footer>
        </div>
    );
};

export default Layout;