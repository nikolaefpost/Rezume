import React, {useEffect, useState} from 'react';
import './About.scss'
import {motion} from "framer-motion";
import {images} from "../../constants";
import {client, urlFor} from "../../client"
import {AppWrap} from "../../wrapper";

const abouts = [
    {title: 'Web Development', description: 'I am a frontend with a passion for beautiful and functional web applications', imgUrl: images.about01},
    {title: 'Web Designer', description: 'I am a good web designer with a passion for beautiful and functional websites', imgUrl: images.about02},
    {title: 'UI/UX', description: 'I am a web designer with a passion for creating ', imgUrl: images.about03},
    {title: 'Web Animations', description: 'I am a good web development', imgUrl: images.about04},
]

const About = () => {
    const [about, setAbout] = useState([])
    useEffect(()=>{
        const query = '*[_type == "abouts"]'

        client.fetch(query)
            .then((data)=>{
                setAbout(data)
            })
    },[])
    return (
        <>
          <h2 className='head-text'>I Know that <span>Good Development</span>
              <br/>means <span>Good Business</span>
          </h2>
            <div className='app__profiles'>
                {about.map((about, index)=>(
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: .5, type: 'tween'}}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title}/>
                        <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
                        <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(About, 'about');