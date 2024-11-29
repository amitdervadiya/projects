import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
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
            description: 'Lorem ipsum dolor stes praesentium corrupti magnam debitis dicta, dolorum accusamus doloremque tempore distinctio veritatis quaerat accusantium.',
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
            description: 'Lorem ipsum doloro vero ipsam cis volnam debitis dicta, dolorum accusamus doloremque tempore distinctio veritatis quaerat accusantium.',
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
            description: 'Lorem ipsum dolor sit ero ipsam cum  praesentium corrupti magnam debitis dicta, dolorum accusamus doloremque tempore distinctio veritatis quaerat accusantium.',
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
            description: 'Lorem ipsum dolor sit ero ipsam cum  praesentium corrupti magnam debitis dicta, dolorum accusamus doloremque tempore distinctio veritatis quaerat accusantium.',
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
            description: 'Lorem ipsum dolor sit ero ipsam cum  praesentium corrupti magnam debitis dicta, dolorum accusamus doloremque tempore distinctio veritatis quaerat accusantium.',
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
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    return (
        <>
            <Header />
            <div className="container hero1 overflow-hidden" data-aos="fade-up ">
                <div className="row projects-row">
                    <div className="col-lg-6 col-md-12 pro" data-aos="fade-right">
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
                                <li key={index} data-aos="zoom-in">
                                    {item.name}
                                    {index !== project.Stack.length - 1 && ','}
                                </li>
                            ))}
                        </ul>
                        <div className="border"></div>
                    </div>
                    <div className="col-lg-6 col-md-12 " data-aos="fade-left">
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
