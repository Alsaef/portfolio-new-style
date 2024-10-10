import React from 'react';
import { Link } from 'react-router-dom';
const AboutPage = () => {
    return (
        <div>
            <div className="card bg-base-100 px-8 shadow-xl">
                <div className="card-body">
                    <p>Want To Know More</p>
                  <Link to='/about'><h2 className="card-title cursor-pointer">About Us</h2></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;