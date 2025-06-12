import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import megablog from '../assets/megablog.png';
import rktour from '../assets/rktour.png';
import laughdaily from '../assets/laughdaily.png';
import promptopia from '../assets/promptopia.png';
import chatapp from '../assets/chatapp.png';

function Projects() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projects = [
    {
      imglink: laughdaily,
      projectname: "Laugh Daily",
      paratext: "*Laugh Daily* is a social media platform built using the **MERN stack** (MongoDB, Express, React, Node) that encourages users to share moments of joy through Posts and threads allows users to comment, create a follower and following circle, with a active leaderboard and with real-time chatting.  💬📸 Here's what sets it apart: - 💻 Seamless User Interaction: Real-time messaging powered by **Socket.io** for fast and smooth communication. - 🤖 AI-Powered Moderation: Integrated with **Gemini AI** for content moderation, ensuring a positive and safe environment for all users. - 🖼️ Image Moderation: Utilizes **NSFW** API to moderate images and ensure appropriate content is shared.",
      projectlink: "https://social-media-app-rfuc.onrender.com/email"
    },
    {
      imglink: promptopia,
      projectname: "Promptopia",
      paratext: "**Promptopia** is a Next.js-based web application that allows users to create, update, delete, and share useful prompts for AI chat assistants. It provides a seamless experience for managing prompts, with features like copying prompts to the clipboard for easy reuse. The platform enhances productivity by enabling users to discover and store high-quality prompts efficiently. Built with modern technologies, Promptopia ensures a smooth and interactive user experience.",
      projectlink: "https://promptopia-nu-seven.vercel.app/"
    },
    {
      imglink: chatapp,
      projectname: "Chat-App",
      paratext: "A real-time chat application that enables seamless individual and group messaging. Built with React, Node.js, Express.js, MongoDB, and powered by WebSockets and Socket.IO, it ensures instant communication. Redux Toolkit manages state, ensuring a smooth user experience. This project showcases my full-stack development skills, emphasizing modern web technologies to create a responsive and scalable communication platform.",
      projectlink: "https://chat-app-83p9.onrender.com/email"
    },
    {
      imglink: megablog,
      projectname: "MEGA BLOG",
      paratext: "This website offers a comprehensive platform for sharing blogs worldwide, helping you form a global community with creative and thoughtful ideas. It enables you to connect with like-minded individuals and share knowledge. I developed the site's core structure using React.js, a frontend web framework, and utilized Appwrite for the backend to ensure a full-featured user experience. I appreciate any feedback and suggestions for improvement.",
      projectlink: "https://mega-blog-sepia.vercel.app/"
    },
    {
      imglink: rktour,
      projectname: "RK TOUR AND TRAVEL",
      paratext: "This website is tour and travel based platform which helps you to choose and explore different tourist destination and packages. I have used many js libraries in it like gsap, scrolltriggers, textillate etc for effects, and libraries like JavaScript smtp , also fetched many api's which gave me a complete knowledge on frontend.",
      projectlink: "https://rktourandtravel.netlify.app/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div 
      ref={ref}
      className='flex flex-col items-center justify-start w-screen min-h-screen py-12 px-4 dark:bg-gray-800 dark:text-white border-b-4 border-black dark:border-white'
    >
      <motion.h1 
        className='text-4xl font-bold mb-12 text-center'
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 100 }
          }
        }}
      >
        My Projects
      </motion.h1>

      <motion.div 
        className='w-full max-w-4xl space-y-12'
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.projectlink}
            target='_blank'
            rel='noopener noreferrer'
            className='block border-solid border-4 rounded-xl p-4 border-black dark:border-white hover:shadow-xl dark:hover:shadow-gray-600 transition-all duration-300 group'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='flex flex-col md:flex-row gap-6 items-center'>
              <motion.img 
                src={project.imglink} 
                className='w-full md:w-96 rounded-lg object-cover group-hover:shadow-md transition-shadow duration-300'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              />
              <div className='flex-1'>
                <motion.h1 
                  className='text-2xl font-bold mb-3 text-center md:text-left'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {project.projectname}
                </motion.h1>
                <motion.p 
                  className='text-gray-700 dark:text-gray-300 text-center md:text-left'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {project.paratext}
                </motion.p>
                <motion.div
                  className='mt-4 text-center md:text-left'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <span className='inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300'>
                    View Project
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;