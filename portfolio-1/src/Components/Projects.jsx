import React, { useState, useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import thumb1 from './photos/thumb1.png';
import thumb2 from './photos/thumb2.png';
import thumb3 from './photos/thumb3.png';
import thumb5 from './photos/tsk.png';
import thumb6 from './photos/money.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Header from './Header';
import { BsArrowUpRight } from 'react-icons/bs';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';

export default function Projects() {
    const projects = [
        {
            num: '01',
            category: 'frontend',
            title: 'project 1',
            description: '   This project showcases my expertise in crafting intuitive and responsive user interfaces.  With a focus on seamless user experience, I utilized modern web technologies to deliver visually appealing and highly functional solutions.',
            Stack: [
                { name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }
            ],
            image: thumb1,
            live: 'https://integrate-ee9f9.firebaseapp.com',
            github: '',
        },
        {
            num: '02',
            category: 'fullstack',
            title: 'project 2',
            description: 'Designed and developed a comprehensive Task Manager application utilizing a full-stack approach. This project integrates a dynamic frontend with a secure and efficient backend to provide users with  a seamless task management experience.',
            Stack: [
                { name: "react js" }, { name: "Bootstrap" }, { name: "Javascript" }
            ],
            image: thumb5,
            live: 'https://form-db9cf.firebaseapp.com ',
        },
        {
            num: '03',
            category: 'backend',
            title: 'project 3',
            description: ' Developed a robust backend system for a Money Manager application. The project focuses on efficient handling of transactions, secure data storage, and seamless API integration for managing income, expenses, and budgets.',
            Stack: [
                { name: "react js" }, { name: "Tailwind.css" }, { name: "Javascript" }
            ],
            image: thumb6,
            live: 'https://admin-6cd5c.web.app',
            github: '',
        },
        {
            num: '04',
            category: 'frontend',
            title: 'project 4',
            description: '   This project focuses on building an interactive and visually appealing user interface. Leveraging modern frameworks and best practices, it ensures a seamless and responsive user experience  across all devices.',
            Stack: [
                { name: "react js" }, { name: "Tailwind.css" }, { name: "Javascript" }
            ],
            image: thumb3,
            live: 'https://bootstrap-58734.web.app',
            github: '',
        },
        {
            num: '05',
            category: 'backend',
            title: 'project 5',
            description: 'Built a powerful backend system enabling efficient filtering and data management.  Designed to handle complex queries, the system ensures fast and accurate retrieval   of information, supporting seamless user interactions.',
            Stack: [
                { name: "react js" }, { name: "Tailwind.css" }, { name: "Javascript" }
            ],
            image: thumb2,
            live: 'https://webs-a363d.web.app',
            github: '',
        },
    ];

    const [project, setProject] = useState(projects[0]);
    const swiperRef = useRef(null); // Ref to hold Swiper instance

    const HandleSlideChange = (swiper) => {
        const currentSlide = swiper.activeIndex;
        setProject(projects[currentSlide]);
    };

    useEffect(() => {
    }, []);

    return (
        <>
            <Header />
            <div className="container hero1 overflow-hidden">
                <div className="row projects-row">
                    <div className="col-lg-6 col-md-12 pro">
                        <div className="text leading-none">{project.num}</div>
                        <h2 className="category">{project.category} Project</h2>
                        <p className="desc">{project.description}</p>
                        <a href={project.live} target='_blank' rel="noreferrer">
                            <div className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center'>
                                <BsArrowUpRight className='text-white text-3xl' />
                            </div>
                        </a>

                        <ul type="none" className="p-0 list">
                            {project.Stack.map((item, index) => (
                                <li key={index}>
                                    {item.name}
                                    {index !== project.Stack.length - 1 && ','}
                                </li>
                            ))}
                        </ul>
                        <div className="border"></div>
                    </div>
                    <div className="col-lg-6 col-md-12 ">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            className='swiper1 w-full h-[350px] relative flex justify-center items-center'
                            onSlideChange={HandleSlideChange}
                            onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in ref
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className='slide1 h-[350px]'>
                                        <div className='slide2'>
                                            <div></div>
                                            <div className='img-slides relative h-full w-full'>
                                                <img src={project.image} alt="" className='imgslide h-full w-full object-cover' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <div className='w-full flex justify-end items-center mt-1 gap-3'>
                            <div className="prevous h-20 w-20 bg-[#232329] flex justify-center items-center" onClick={() => swiperRef.current?.slidePrev()}>
                                <BiCaretLeft className='text-3xl text-[#00ff7f]' />
                            </div>
                            <div className="next h-20 w-20 bg-[#232329] flex justify-center items-center" onClick={() => swiperRef.current?.slideNext()}>
                                <BiCaretRight className='text-3xl text-[#00ff7f]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
