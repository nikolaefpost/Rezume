import React, {useEffect, useState} from 'react';
import './Work.scss'
import {AiFillEye, AiFillGithub} from "react-icons/ai";
import {motion} from "framer-motion";

import {urlFor, client} from "../../client";
import {AppWrap, MotionWrap} from "../../wrapper";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState([{y: 0, scale: 1, opacity: 1}])
    const [works, setWorks] = useState([])
    const [filterWorks, setFilterWorks] = useState([])

    useEffect(()=>{
        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data)=>{
                setWorks(data)
                setFilterWorks(data)
            })
    },[])
    const handleWorkFilter = (item) => {
      setActiveFilter(item);
      setAnimateCard([{y: 100, scale: 0.7, opacity: 0}]);

      setTimeout(()=>{
          setAnimateCard([{y: 0, scale: 1, opacity: 1}]);

          if(item === 'All') {
              setFilterWorks(works)
          }else {
              setFilterWorks(works.filter((work)=> work.tags.includes(item)))
          }
      }, 500)
    }

    const widthScreen = window.screen.width > 900;
    return (
        <>
            <h2 className='head-text'>My Creative <span>Portfolio</span> section</h2>

            <div className='app__work-filter'>

                <div className=' stretch'>
                    {['Web App', 'Web App fragment', 'Website', 'Landing Page'].map((item, index)=>(
                        <div
                            key={index}
                            onClick={()=>handleWorkFilter(item)}
                            className={`p-text app__work-filter-item app__flex  ${activeFilter === item ? 'item-active' : ''}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className='app__flex'>
                    {['HTML JS',  'React JS'].map((item, index)=>(
                        <div
                            key={index}
                            onClick={()=>handleWorkFilter(item)}
                            className={`p-text app__work-filter-item app__flex  ${activeFilter === item ? 'item-active' : ''}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div
                    onClick={()=>handleWorkFilter('All')}
                    className={`p-text app__work-filter-item app__flex  ${activeFilter === 'All' ? 'item-active' : ''}`}
                >
                    All
                </div>
            </div>

            <motion.div
                animate={animateCard}
                transition={{duration: .5, delayChildren: .5}}
                className='app__work-portfolio'
            >
                {filterWorks.map((work, index)=>(
                    <div className='app__work-item app__flex' key={index}>
                        <div className='app__work-img app__flex'>
                            <img src={urlFor(work.imgUrl)} alt={work.name}/>

                            <motion.div
                                whileHover={{opacity: [0, 1]}}
                                whileInView={widthScreen ? {opacity: [1, 0]}: {opacity: [1, 0.3]}}
                                transition={{duration: .25, ease: 'easeInOut', staggerChildren: .5}}
                                className='app__work-hover app__flex'
                            >
                                {!!work.projectLink && <a href={work.projectLink} target='_blank' rel='noreferrer'>
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: .25}}
                                        className='app__flex'
                                    >
                                        <AiFillEye/>
                                    </motion.div>
                                </a>}
                                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: .25}}
                                        className='app__flex'
                                    >
                                        <AiFillGithub/>
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        <div className='app__work-content app__flex'>
                            <h4 className='bold-text'>{work.title}</h4>
                            <p className='p-text' style={{marginTop: 10}}>{work.description}</p>

                            <div className='app__work-tag app__flex'>
                                <p className='p-text'>{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};
export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    'app__primarybg'
);
