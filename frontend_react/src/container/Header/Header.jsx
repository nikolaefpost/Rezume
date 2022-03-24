import React from 'react';
import './Header.scss'
import {motion} from "framer-motion";
import {images} from "../../constants";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div id='home' className='app__header app__flex'>
            <motion.dev
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className='app__header-info'
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div style={{marginLeft: 20}}>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='head-text'>Eduard</h1>
                        </div>
                    </div>
                    <div className='tag-cmp app__flex'>
                        <p className='p-text'>Web Developer</p>
                        <p className='p-text'>Freelancer</p>
                    </div>
                </div>

            </motion.dev>

            <motion.dev
                whileInView={{ opacity: [0, 1]}}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className='app__header-img'
            >
                <img src={images.profile} alt='profile_bg'/>
                <motion.img
                    whileInView={{ scale: [0, 1]}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className='overlay_circle'
                    src={images.circle}
                    alt='profile_circle'
                />
            </motion.dev>

            <motion.dev
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >
                {[images.flutter, images.redux, images.sass].map((circle, index)=>(
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt='circle'/>
                    </div>
                ))}
            </motion.dev>
        </div>
    );
};

export default Header;