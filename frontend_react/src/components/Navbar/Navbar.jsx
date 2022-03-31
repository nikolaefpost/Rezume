import React, {useState} from 'react';
import './Navbar.scss'
import {images} from "../../constants";
import {motion, AnimatePresence} from "framer-motion";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {IoMdDownload} from 'react-icons/io'


const Navbar = () => {
    const [isVisible, setVisible] = useState(false)

    const handleVisible = () => {
        setVisible((pre)=>!pre)
    }
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.pilot} alt='logo'/>
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
                <li className='app__flex p-text' >
                    <div/>
                    <a href='JUNIOR FROND-END DEVELOPER (React).xlsx' download="" className='download' title="download resume"><IoMdDownload/><span>Resume</span></a>
                </li>
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={handleVisible}/>
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial={{x: 300, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 300, opacity: 0}}
                            transition={{duration: 0.85, delayChildren: 0.85, ease: 'easeOut'}}
                        >
                            <ul>
                                <HiX onClick={handleVisible}/>

                                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={handleVisible}>{item}</a>
                                    </li>
                                ))}
                                <li>
                                    <a href='JUNIOR FROND-END DEVELOPER (React).xlsx' className='download' download="" className='' title="download resume"><IoMdDownload/></a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </nav>
    );
};

export default Navbar;