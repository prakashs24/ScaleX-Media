import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    let [click, setClick] = useState(false);
    const Handle = () => setClick(!click);

    let[navColor,setNavcolor]=useState(false)
    const ChangeNavcolor=()=>{
        if(window.scrollY >=1){
            setNavcolor(true)
    }
    else{
        setNavcolor(false)
    }
    };
    window.addEventListener("scroll",ChangeNavcolor)
    return (
        <>
            <div className={navColor ?"NavHeader NavHeader-Change":"NavHeader"}>
                <h1>Portfolio</h1>
                <ul className={click ? "NavLink active" : "NavLink"}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Project'>Project</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
                <div className='Hamburger' onClick={Handle}>
                    {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) :
                        (<FaBars size={20} style={{ color: "#fff" }} />)}
                </div>

            </div>
        </>
    )
}
export default Navbar