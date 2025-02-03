import React from 'react';
import Avatars from './Avatar';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Added icons
function Footer(){
    return(
              <div className="mt-10 w-full max-w-3xl p-6 bg-gray-800 shadow-lg rounded-2xl">
                <h2 className="text-2xl font-semibold text-center mb-6">Connect with me</h2>
                <div className="flex justify-center gap-6">
                  <a href="https://www.linkedin.com/in/samratsarkar/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-600 text-3xl" />
                  </a>
                  <a href="https://github.com/samratsarkar" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-800 text-3xl" />
                  </a>
                  <a href="https://www.instagram.com/samrat.sarkar/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-pink-600 text-3xl" />
                  </a>
                  <a href="https://wa.me/xxxxxxxxxx" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-green-500 text-3xl" />
                  </a>
                  <a href="mailto:samrat.sarkar@example.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-red-600 text-3xl" />
                  </a>
                </div>
              </div>
    )
}
export default Footer;