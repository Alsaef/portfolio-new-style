import React from 'react';
import AboutPage from '../../Common/AboutPageLink/AboutPage';
import Skill from '../../Common/Skill/Skill';
import Project from '../../Common/Project/Project';
import Blog from '../../Common/BlogPage/Blog';

const MidelSection = () => {
    return (
        <section className='mt-5'>
            <div className='flex lg:flex-row flex-col lg:items-start items-center lg:gap-0 gap-4 justify-around'>


                <div>
                    <AboutPage></AboutPage>
                    <Skill></Skill>
                </div>


                <div>
                    <Project></Project>
                    <Blog></Blog>
                </div>


            </div>
        </section>
    );
};

export default MidelSection;