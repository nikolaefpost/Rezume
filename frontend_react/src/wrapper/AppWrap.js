import React from 'react';
import {Copyright, NavigationDots, SocialMedia} from "../components";
import {logDOM} from "@testing-library/react";




const AppWrap = (Component, idName, classNames) => function HOC() {
    const widthScreen = window.screen.width > 500;
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia classNames='app__social'/>
            <div className='app__wrapper app__flex'>
                <Component/>

                {!!widthScreen && <Copyright/>}
            </div>
            <NavigationDots active={idName}/>
        </div>
    );
};

export default AppWrap;