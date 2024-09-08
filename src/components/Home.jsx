import * as React from 'react';
import SkillSlider from './Slider';
import profile_pic from '../assets/profile_pic.png';
import Avatars from './Avatar';
import '../index.css';
import lpu from '../assets/lpu.png';
import bmhs from '../assets/bmhs.png';
import dps from '../assets/dps.png';
import cpp from '../assets/logos/cpp.jpg';
import css from '../assets/logos/css.png';
import express from '../assets/logos/express.png';
import html from '../assets/logos/html.jpg';
import js from '../assets/logos/js.png';
import mongo from '../assets/logos/mongo.jpg';
import mysql from '../assets/logos/mysql.png';
import node from '../assets/logos/node.png';
import oracle from '../assets/logos/oracle.png';
import react from '../assets/logos/react.png';
import c from '../assets/logos/c.png';
import python from '../assets/logos/python.png';
import Certificates from './Certificates';
import problemsolving from '../assets/certificates/problemsolving.png';
import pythoncertificate from '../assets/certificates/python.png';
import javascript from '../assets/certificates/javascript.png';
import freecodecamp  from '../assets/certificates/freecodecamp.png';
import codeahaunt from '../assets/certificates/codeahaunt.png';
import codsoft from '../assets/certificates/codsoft.png';
import leetcode from '../assets/logos/leetcode.png';
import codechef from '../assets/logos/codechef.jpg';
import hackerrank_logo from '../assets/logos/hackerrank_logo.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center border-solid border-b-4 border-black dark:bg-gray-800 dark:text-white dark:border-white">

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center w-full py-5 sm:py-10 sm:w-screen border-b-4 border-black dark:border-white">
        <img src={profile_pic} className="h-40 sm:h-60" alt="Profile" />
        <p className="text-center sm:text-left mt-4 sm:ml-5 sm:mt-0 px-4 sm:px-0 max-w-lg">
          I am currently pursuing a degree in Computer Science at Lovely Professional University, driven by a deep passion for development. Specializing in MERN web technology, I am dedicated to creating and innovating within the tech landscape. I thrive on challenging myself, continuously seeking to identify and overcome personal weaknesses. This passion extends to my exploration of data structures and algorithms, where I rigorously test and enhance my logical reasoning skills.
          <b>-- Samrat Sarkar</b>
        </p>
      </div>

      {/* Education Section */}
      <div className="flex flex-col items-center w-full my-4 border-b-4 border-black dark:border-white">
        <p className="text-2xl">Education</p>
        <div className="flex flex-col sm:flex-row justify-around w-full mt-7 space-y-6 sm:space-y-0">
          {[
            { name: 'LPU', course: 'B.TECH CSE', logo: lpu },
            { name: 'BMHS', course: 'XI-XII', logo: bmhs },
            { name: 'DPS', course: 'I-X', logo: dps }
          ].map((edu) => (
            <div className="flex flex-col items-center" key={edu.name}>
              <Avatars newname={edu.logo} />
              <h1>{edu.name}</h1>
              <h1>{edu.course}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col items-center w-full my-4 border-b-4 border-black dark:border-white">
        <p className="text-2xl">Skills</p>
        <div className="w-full flex flex-wrap justify-center gap-3 mt-7">
          {[
            { skill: 'C++', logo: cpp, value: 90 },
            { skill: 'C', logo: c, value: 75 },
            { skill: 'PYTHON', logo: python, value: 85 },
            { skill: 'HTML', logo: html, value: 95 },
            { skill: 'CSS', logo: css, value: 90 },
            { skill: 'JAVASCRIPT', logo: js, value: 80 },
            { skill: 'REACT', logo: react, value: 75 },
            { skill: 'NODE', logo: node, value: 50 },
            { skill: 'EXPRESS', logo: express, value: 50 },
            { skill: 'MONGO', logo: mongo, value: 65 },
            { skill: 'ORACLE', logo: oracle, value: 75 },
            { skill: 'MYSQL', logo: mysql, value: 75 }
          ].map((tech) => (
            <div className="flex flex-col items-center w-40 sm:w-64" key={tech.skill}>
              <Avatars newname={tech.logo} />
              <h1>{tech.skill}</h1>
              <SkillSlider newvalue={tech.value} />
            </div>
          ))}
        </div>
      </div>

      {/* Certificates and Achievements Section */}
      <div className="flex flex-col items-center w-full my-4">
        <p className="text-2xl mb-6">Certificates and Achievements</p>
        <div className="w-full flex flex-wrap justify-center gap-6 p-3">
          {[
            { link: "https://www.udemy.com/certificate/UC-5a4a09e0-807e-48d2-a1ce-57edb871af46/", img: "https://udemy-certificate.s3.amazonaws.com/image/UC-5a4a09e0-807e-48d2-a1ce-57edb871af46.jpg?v=1701799340000", text: "Udemy DSA in C++" },
            { link: "https://www.hackerrank.com/certificates/7bb2cff0bced", img: problemsolving, text: "Hackerrank problem solving" },
            { link: "https://www.hackerrank.com/certificates/a6621e5ee53a", img: pythoncertificate, text: "Hackerrank python" },
            { link: "https://www.hackerrank.com/certificates/0344a1ab6f8f", img: javascript, text: "Hackerrank javascript" },
            { link: "https://www.freecodecamp.org/certification/fccf5a52ba4-739d-474d-a320-79666889c5eb/responsive-web-design", img: freecodecamp, text: "Responsive web design" },
            { link: "https://drive.google.com/file/d/1PZnwpoBzvUpoSo8njQ-VRWrYQBeuY4vl/view", img: codsoft, text: "Codsoft web intern" },
            { link: "https://certificate.givemycertificate.com/c/c7263057-5346-4460-95ec-fd009ba10697", img: codeahaunt, text: "Codeahaunt hackathon" }
          ].map((cert) => (
            <Certificates key={cert.text} newlink={cert.link} newimg={cert.img} newtext={cert.text} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center w-full mt-9 gap-8">
          {[
            { link: 'https://leetcode.com/u/sarkarsamrat16112004/', img: leetcode, text: '100+ questions solved in Leetcode' },
            { link: 'https://www.codechef.com/users/sarkarsamrat16', img: codechef, text: '2 star at Codechef' },
            { link: 'https://www.hackerrank.com/profile/sarkarsamrat1611', img: hackerrank_logo, text: 'Euler project rank -  5621/218056' },
            { link: 'https://www.hackerrank.com/results/projecteuler/sarkarsamrat1611', img: hackerrank_logo, text: '5 star at C++ in Hackerrank' }
          ].map((achievement) => (
            <a className="flex flex-col items-center" href={achievement.link} target="_blank" key={achievement.text}>
              <Avatars newname={achievement.img} />
              <h1>{achievement.text}</h1>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}



