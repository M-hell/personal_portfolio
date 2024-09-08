import * as react from 'react';


function Certificates(props){
    let link=props.newlink;
    let img=props.newimg;
    let text=props.newtext
    return(
        <a className='flex justify-center flex-col items-center' href={link} target='_blank'>
        <img className='w-60 h-56' src={img}/>
        <a href={link}>{text}</a>
        </a>
    )
}
export default Certificates;