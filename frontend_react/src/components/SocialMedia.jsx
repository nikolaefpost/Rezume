import React from 'react';
import {BsTwitter, BsInstagram, BsLink} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsLink/>
            </div>
            <div>
                <FaFacebook/>
            </div>
            <div>
                <BsInstagram/>
            </div>
        </div>
    );
};

export default SocialMedia;