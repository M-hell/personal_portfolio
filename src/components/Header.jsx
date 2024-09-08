import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import ThemeBtn from './ThemeBtn';
function Header(){
    return (
        <div className='flex justify-center py-2 gap-3 flex-wrap text-xl font-bold border-solid border-b-4 border-black dark:text-white dark:border-white dark:bg-gray-800'>
            <NavLink to="/" className={({ isActive }) =>` ${isActive ? "text-blue-800" : ""} hover:text-blue-800 transition-all duration-500`}>Home</NavLink>
            <NavLink to='/projects' className={({ isActive }) =>` ${isActive ? "text-blue-800" : ""} hover:text-blue-800 transition-all duration-500`}>Projects</NavLink>
            <NavLink to='/contact' className={({ isActive }) =>` ${isActive ? "text-blue-800" : ""} hover:text-blue-800 transition-all duration-500`}>Hire me</NavLink>
            <div className='flex justify-center ml-5'>
                <b className='text-2xl'>🌜</b><ThemeBtn/>
            </div>
        </div>
    )
}
export default Header;