import React from 'react';
import Images from '../../assets/Images/ProfileImage.png';
const About = () => {
    return (
        <div>
        <div className="hero bg-white ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={Images}
      className="h-full" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;