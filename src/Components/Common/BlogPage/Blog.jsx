import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
<section className='mt-6'>
<div className='flex items-center gap-3 justify-center'>
        <div className="card bg-green-400 px-8 shadow-xl">
            <div className="card-body">
                <p>Visit Our Blog</p>
                <Link to='/blog'><h2 className="card-title cursor-pointer">Blog</h2></Link>
            </div>
        </div>
        <div className="card bg-base-100 px-8 shadow-xl">
            <div className="card-body">
                <p>Let’s work</p>
                <Link to='/contact'><h2 className="card-title cursor-pointer">Contact</h2></Link>
            </div>
        </div>
    </div>
</section>
    );
};

export default Blog;