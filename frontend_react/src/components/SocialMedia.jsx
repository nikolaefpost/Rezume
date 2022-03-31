import React from 'react';
import {BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import {FACEBOOK, INSTA, LINKEDIN} from "../constants";

const SocialMedia = ({classNames}) => {
    return (
        <div className={classNames}>
            <div onClick={() => window.open(LINKEDIN)}>
                <BsLinkedin/>
            </div>
            <div onClick={() => window.open(FACEBOOK)}>
                <FaFacebook/>
            </div>
            <div onClick={() => window.open(INSTA)}>
                <BsInstagram/>
            </div>
        </div>
    );
};

export default SocialMedia;