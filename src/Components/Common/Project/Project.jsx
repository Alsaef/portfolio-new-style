import React from 'react';
import Img1 from '../../../assets/Images/image-1.png';
import Img2 from '../../../assets/Images/image-2.png';
const Project = () => {
    return (
        <div>
            <div className="card bg-base-100 py-6 shadow-xl">
                <div className="card-body">



                    <div className='flex items-center  gap-3'>



                        <div>
                            <figure className="">
                                <img
                                    src={Img1}
                                    alt=""
                                    className="rounded-xl" />
                            </figure>
                        </div>


                        {/* image divide */}

                        <div>
                            <figure className="">
                                <img
                                    src={Img2}
                                    alt=""
                                    className="rounded-xl" />
                            </figure>
                        </div>





                    </div>




                    <p>Showcase View</p>
                    <h2 className="card-title">Projects</h2>

                </div>
            </div>
        </div>
    );
};

export default Project;