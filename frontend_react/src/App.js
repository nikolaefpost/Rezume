import React from 'react';
import {About, Footer, Header, Skills, Testimonials, Work} from "./container";
import {Navbar} from "./components";
import './App.scss'
import Test from "./container/Test/Test";

const App = () => {

    return (
        <div className='app'>
            <Navbar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            <Testimonials/>
            <Footer/>
            <Test/>
        </div>
    );
};

export default App;