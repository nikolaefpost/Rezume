import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";
import {FaUserCircle} from "react-icons/fa"
import {urlFor, client} from "../../client";
import './Testimonials.scss'
import {AppWrap, MotionWrap} from "../../wrapper";

const Testimonials = () => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = (index) => {
        setCurrentIndex(index)
    }

    useEffect(()=>{
        const queryTest = '*[_type == "testimonials"]';
        const queryBrand = '*[_type == "brands"]';

        client.fetch(queryTest)
            .then((data)=>{
                setTestimonials(data)
            })
        client.fetch(queryBrand)
            .then((data)=>{
                setBrands(data.filter((item)=>item.imgUrl))
            })
    },[])

    const test = testimonials[currentIndex]

    return (
        <>
            {testimonials.length && (
               <>
                   <div className='app__testimonial-item app__flex'>
                       {test.imgurl ?
                           <img src={urlFor(test.imgurl)} alt='testimonial'/>:
                           <FaUserCircle/>
                       }
                       <div className='app__testimonial-content'>
                           <p className='p-text'>
                               {test.feedback}
                           </p>
                           <div>
                               <h4 className='bold-text'>{test.name}</h4>
                               <h5 className='p-text'>{test.company}</h5>
                           </div>
                       </div>
                   </div>
                   <div className='app__testimonial-btns app__flex'>
                        <div
                            className='app__flex'
                            onClick={()=> handleClick(currentIndex === 0 ?
                                testimonials.length -1 : currentIndex-1)}
                        >
                            <HiChevronLeft/>
                        </div>
                       <div
                           className='app__flex'
                           onClick={()=> handleClick(currentIndex === testimonials.length -1 ?
                               0 : currentIndex+1)}
                       >
                           <HiChevronRight/>

                       </div>
                   </div>
               </>
            )}
            <div className='app__testimonial-brands app__flex'>
                {brands.map((brand)=>(
                    <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: .5, type: 'tween'}}
                        key={brand._id}
                    >
                        <img src={brand.imgUrl && urlFor(brand.imgUrl)} alt={brand.name}/>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Testimonials, 'app__testimonial'),
    'testimonials',
    'app__primarybg'
);