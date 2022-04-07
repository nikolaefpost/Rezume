import React, {useState} from 'react';

import {images} from "../../constants";
import {AppWrap, MotionWrap} from "../../wrapper";
import {motion, AnimatePresence} from "framer-motion";
import {client} from "../../client";
import './Footer.scss'
import {Copyright, SocialMedia} from "../../components";


const Footer = () => {
    const widthScreen = window.screen.width > 500;
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const {name, email, message} = formData

    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        }

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true)
            })

    }
    return (
        <>
            <h2 className='head-text'>Take coffee & chat with me</h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt='email'/>
                    <a href='mailto: yemelyanov.eduard@gmail.com' className='p-text'>hello@gmail.com</a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt='mobile'/>
                    <a href='tel: +38 (093) 982-4980' className='p-text'>+38 (093) 982-4980</a>
                </div>
            </div>

            {!isFormSubmitted ?
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input className='p-text' type='text' placeholder='Your name' value={name}
                               onChange={handleChangeInput} name='name'
                        />
                    </div>
                    <div className='app__flex'>
                        <input className='p-text' type='email' placeholder='Your email' value={email}
                               onChange={handleChangeInput} name='email'
                        />
                    </div>
                    <div className=''>
                    <textarea
                        className='p-text'
                        placeholder='Your Message'
                        value={message}
                        name='message'
                        onChange={handleChangeInput}
                    />
                    </div>
                    <button type='button' className='p-text' onClick={handleSubmit}>
                        {loading ? 'Sending' : 'Send Message'}
                    </button>
                </div>
                :
                <div>
                    <h3 className='head-text'>Thank you for getting in touch!</h3>
                </div>
            }
            {!widthScreen && <motion.div
                whileInView={{y: [100, 50, 0], opacity: [0, 0, 1]}}
                transition={{duration: .5}}
            >
                <SocialMedia classNames='app__social-mobil'/>
                <Copyright/>
            </motion.div>}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
);