import * as React from 'react';
import '../index.css';
function Singleproject(props){
    let imgsource=props.imglink;
    let projectsource=props.projectname;
    let parasource=props.paratext;
    let linksource=props.projectlink;
    return (
    <a href={linksource} target='_blank' className=' border-solid border-4 rounded-xl p-2 border-black dark:border-white mt-4 flex flex-col justify-center items-center gap-2 edited-p-w'>
        <img src={imgsource} className='w-96' />
        <div className=' flex justify-center items-center gap-2 flex-col'>
            <h1 className='text-xl font-bold'>{projectsource}</h1>
            <p>{parasource}</p>
        </div>
    </a>
    );
}
export default Singleproject;