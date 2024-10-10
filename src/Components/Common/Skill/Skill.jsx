import React from 'react';
import react from '../../../assets/icon/react (1).png';
import js from '../../../assets/icon/js (1).png';
import next from '../../../assets/icon/nextjs.png';
const Skill = () => {
    return (
        <div className='mt-5'>

            <div className="card bg-base-100 px-8  shadow-xl">
                <div className="card-body">
                    <div className='flex items-center justify-around'>




                        <div>
                            <a target='_blank' href="https://react.dev/">  <img src={react} alt="" /></a>
                        </div>
                        <div>
                            <a target='_blank' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">  <img src={js} alt="" /></a>
                        </div>
                        <div>
                            <a target='_blank' href="https://nextjs.org/"> <img src={next} alt="" /></a>
                        </div>


                    </div>
                    <p className='py-3 px-3 text-xl text-gray-400 text-center'>My Updated Skill</p>
                </div>
            </div>

        </div>
    );
};

export default Skill;