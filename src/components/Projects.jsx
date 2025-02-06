import React from 'react';
import megablog from '../assets/megablog.png';
import rktour from '../assets/rktour.png';
import laughdaily from '../assets/laughdaily.png';
import  promptopia from '../assets/promptopia.png';
import chatapp from '../assets/chatapp.png';
import Singleproject from './Singleproject';

function Projects() {
  return (
    <div className='flex flex-col items-center justify-start w-screen h-auto py-8 dark:bg-gray-800 dark:text-white border-b-4 border-black dark:border-white'>
      
      <Singleproject 
        imglink={laughdaily}
        projectname="Laugh Daily"
        paratext="*Laugh Daily* is a social media platform built using the **MERN stack** (MongoDB, Express, React, Node) that encourages users to share moments of joy through Posts and threads allows users to comment, create a follower and following circle, with a active leaderboard and with real-time chatting.  💬📸
Here’s what sets it apart:
- 💻 Seamless User Interaction: Real-time messaging powered by **Socket.io** for fast and smooth communication.
- 🤖 AI-Powered Moderation: Integrated with **Gemini AI** for content moderation, ensuring a positive and safe environment for all users.
- 🖼️ Image Moderation: Utilizes **NSFW** API to moderate images and ensure appropriate content is shared."
        projectlink="https://social-media-app-rfuc.onrender.com/email"
      />

      <Singleproject 
        imglink={promptopia}
        projectname="Promptopia"
        paratext="**Promptopia** is a Next.js-based web application that allows users to create, update, delete, and share useful prompts for AI chat assistants. It provides a seamless experience for managing prompts, with features like copying prompts to the clipboard for easy reuse. The platform enhances productivity by enabling users to discover and store high-quality prompts efficiently. Built with modern technologies, Promptopia ensures a smooth and interactive user experience."
        projectlink="https://promptopia-nu-seven.vercel.app/"
      />

      <Singleproject 
        imglink={chatapp}
        projectname="Chat-App"
        paratext="a real-time chat application that enables seamless individual and group messaging. Built with React, Node.js, Express.js, MongoDB, and powered by WebSockets and Socket.IO, it ensures instant communication. Redux Toolkit manages state, ensuring a smooth user experience. This project showcases my full-stack development skills, emphasizing modern web technologies to create a responsive and scalable communication platform."
        projectlink="https://chat-app-83p9.onrender.com/email"
      />

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
