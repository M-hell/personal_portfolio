import React from 'react';
import megablog from '../assets/megablog.png';
import rktour from '../assets/rktour.png';
import Singleproject from './Singleproject';

function Projects() {
  return (
    <div className='flex flex-col items-center justify-start w-screen h-auto py-8 dark:bg-gray-800 dark:text-white border-b-4 border-black dark:border-white'>
      
      <Singleproject 
        imglink={megablog}
        projectname="MEGA BLOG"
        paratext="This website offers a comprehensive platform for sharing blogs worldwide, helping you form a global community with creative and thoughtful ideas. It enables you to connect with like-minded individuals and share knowledge. I developed the site's core structure using React.js, a frontend web framework, and utilized Appwrite for the backend to ensure a full-featured user experience. I appreciate any feedback and suggestions for improvement."
        projectlink="https://mega-blog-sepia.vercel.app/"
      />

      <Singleproject 
        imglink={rktour}
        projectname="RK TOUR AND TRAVEL"
        paratext="This website is tour and travel based platform which helps you to choose and explore different tourist destination and packages. I have used many js libraries in it like gsap, scrolltriggers, textillate etc for effects, and libraries like JavaScript smtp , also fetched many api's which gave me a complete knowledge on frontend."
        projectlink="https://rktourandtravel.netlify.app/"
      />

    </div>
  );
}

export default Projects;
