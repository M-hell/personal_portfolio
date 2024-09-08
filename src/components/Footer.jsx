import React from 'react';
import Avatars from './Avatar';
function Footer(){
    return(
        <div className='flex flex-col flex-wrap justify-center items-center flex-shrink w-screen dark:bg-gray-800'>
            <h1 className='dark:text-white'>Explore my github</h1>
            <a href="https://github.com/M-hell?tab=repositories" className='my-4' target='_blank'>
                <Avatars newname="https://cdn-icons-png.flaticon.com/512/25/25231.png" con='bg-white' />
            </a>
        </div>
    )
}
export default Footer;