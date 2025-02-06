import * as React from 'react';
import lpu from '../assets/lpu.png';
import bmhs from '../assets/bmhs.png';
import dps from '../assets/dps.png';
import { useState, useEffect } from 'react';

import profile_pic from '../assets/profile_pic.jpg';
import '../index.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaCuttlefish, FaJava, FaPython } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql,SiPhp,SiCplusplus,SiOracle } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope,FaGraduationCap,FaGitAlt,FaWindows,FaLinux, FaUbuntu,FaCentos } from 'react-icons/fa'; // Added icons

export default function Home() {
  const techWords = ['MERN Stack', 'Freelancer', 'DSA'];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = techWords[currentWord];
    let typingSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && displayText === word) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % techWords.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? word.substring(0, prev.length - 1) : word.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen p-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center p-6 bg-gray-800 shadow-lg rounded-2xl w-full max-w-3xl">
        <img src={profile_pic} className="h-40 sm:h-60 rounded-full shadow-lg border-4 border-gray-600" alt="Profile" />
        <p className="text-center text-lg mt-4 px-4 font-extrabold leading-relaxed h-8">
          {displayText}<span className="animate-pulse">|</span>
        </p>
        <p className="mt-4 text-lg font-semibold">-- Samrat Sarkar</p>
      </div>
      {/* Education Section */}
      <div className="mt-10 w-full max-w-3xl p-6 bg-gray-800 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Education</h2>
        <div className="flex flex-col space-y-8 border-l-4 border-blue-500 pl-6">
          {[
            { name: 'Lovely Professional University', course: 'B.Tech CSE', logo: lpu },
            { name: 'Burdwan Model High School', course: 'XI-XII', logo: bmhs },
            { name: 'Delhi Public School', course: 'I-X', logo: dps }
          ].map((edu, index) => (
            <div key={edu.name} className="flex items-center space-x-4">
              <FaGraduationCap className="text-blue-400 text-2xl" />
              <div>
                <h1 className="text-lg font-semibold">{edu.name}</h1>
                <p className="text-gray-300">{edu.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
{/* Tech Stack Section */}
<div className="mt-10 w-full max-w-3xl p-6 bg-gray-800 shadow-lg rounded-2xl">
  <h2 className="text-2xl font-semibold text-center mb-6">Tech Stack</h2>
  <div className="flex flex-col gap-8 text-center">

    {/* Web Technologies */}
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">Web Technologies</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <FaHtml5 className="text-orange-500 text-4xl" title="HTML5" />
        <FaCss3Alt className="text-blue-500 text-4xl" title="CSS3" />
        <FaJs className="text-yellow-500 text-4xl" title="JavaScript" />
        <FaReact className="text-blue-400 text-4xl" title="React" />
        <FaNodeJs className="text-green-500 text-4xl" title="Node.js" />
        <SiExpress className="text-gray-500 text-4xl" title="Express.js" />
        <SiNextdotjs className="text-white text-4xl" title="Next.js" />
        <SiTailwindcss className="text-teal-400 text-4xl" title="Tailwind CSS" />
        <FaGitAlt className="text-red-500 text-4xl" title="Git" />
        <SiPhp className="text-indigo-500 text-4xl" title="PHP" />
      </div>
    </div>

    {/* Languages */}
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">Languages</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <FaCuttlefish className="text-blue-400 text-4xl" title="C" />
        <SiCplusplus className="text-blue-600 text-4xl" title="C++" />
        <FaJava className="text-red-500 text-4xl" title="Java" />
        <FaPython className="text-yellow-500 text-4xl" title="Python" />
      </div>
    </div>

    {/* Databases */}
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">Databases</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <SiMongodb className="text-green-500 text-4xl" title="MongoDB" />
        <SiMysql className="text-blue-500 text-4xl" title="MySQL" />
        <SiOracle className="text-red-600 text-4xl" title="Oracle" />
      </div>
    </div>

    {/* Environments */}
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">Environments</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <FaWindows  className="text-blue-600 text-4xl" title="Windows" />
        <FaLinux  className="text-blue-500 text-4xl" title="Kali Linux" />
        <FaUbuntu  className="text-orange-500 text-4xl" title="Ubuntu" />
        <FaCentos  className="text-purple-600 text-4xl" title="CentOS" />
      </div>
    </div>

  </div>
</div>





      <div className="mt-10 w-full max-w-3xl p-6 bg-gray-800 shadow-lg rounded-2xl">
  <h2 className="text-2xl font-semibold text-center mb-6">Achievements</h2>
  
  {/* Achievements Content */}
  <div className="flex justify-between items-start space-x-6">
    {/* Certificates */}
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-2">Certificates</h3>
      <ul className="list-disc list-inside space-y-4">
      <li><a href="https://www.udemy.com/certificate/UC-5a4a09e0-807e-48d2-a1ce-57edb871af46/" className="text-blue-400 hover:underline">Udemy C++ DSA</a></li>
      <li><a href="https://certificate.givemycertificate.com/c/c7263057-5346-4460-95ec-fd009ba10697" className="text-blue-400 hover:underline">Codeahaunt Hackathon</a></li>
      <li><a href="https://drive.google.com/file/d/1PZnwpoBzvUpoSo8njQ-VRWrYQBeuY4vl/view" className="text-blue-400 hover:underline">Codsoft Web Intern</a></li>
      <li><a href="https://www.freecodecamp.org/certification/fccf5a52ba4-739d-474d-a320-79666889c5eb/responsive-web-design" className="text-blue-400 hover:underline">Responsive Web Design</a></li>
        <li><a href="https://www.hackerrank.com/certificates/7bb2cff0bced" className="text-blue-400 hover:underline">Hackerrank Problem Solving</a></li>
        <li><a href="https://www.hackerrank.com/certificates/a6621e5ee53a" className="text-blue-400 hover:underline">Hackerrank Python</a></li>
        <li><a href="https://www.hackerrank.com/certificates/0344a1ab6f8f" className="text-blue-400 hover:underline">Hackerrank JavaScript</a></li>
        <li><a href="https://www.hackerrank.com/certificates/b81c00deb2e0" className="text-blue-400 hover:underline">Hackerrank Java</a></li>
      </ul>
    </div>
    
    {/* Divider */}
    <div className="border-l-2 border-white h-full"></div>
    
    {/* Competitive Programming */}
    <div className="w-full">
      <h3 className="text-lg font-semibold mt-6 sm:mt-0 mb-2">Competitive Programming</h3>
      <ul className="list-disc list-inside space-y-4">
        <li>2⭐️ CodeChef</li>
        <li>200+ questions solved on LeetCode</li>
        <li>5⭐️ Hackerrank Problem Solving</li>
        <li>5⭐️ Hackerrank C++</li>
        <li>Competed in 5+ hackathons</li>
        <li>Daily Gold badge in CodeChef</li>
        <li>50 days badge in LeetCode</li>
        <li>100 days badge in LeetCode</li>
      </ul>
    </div>
  </div>
</div>


            {/* Connect with Me Section */}
            <div className="mt-10 w-full max-w-3xl p-6 bg-gray-800 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Connect with me</h2>
        <div className="flex justify-center gap-6">
        <a href="https://codolio.com/profile/chickenBiriyani" target="_blank" rel="noopener noreferrer">
            <span className="text-white text-lg" >Cod</span><span className="text-orange-500 text-lg" >olio</span>
          </a>
          <a href="https://www.linkedin.com/in/samrat-sarkar-00534b283/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-3xl" />
          </a>
          <a href="https://github.com/M-hell" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl" />
          </a>
          <a href="https://www.instagram.com/altruistic_adversary/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-600 text-3xl" />
          </a>
          <a href="https://wa.me/8145246849" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-500 text-3xl" />
          </a>
          <a href="mailto:sarkarsamrat16112004@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-red-600 text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
