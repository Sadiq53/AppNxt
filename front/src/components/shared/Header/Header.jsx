import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [isScrolling, setIsScrolling] = useState(false);
    const [serviceLinks, setServiceLinks] = useState('webAppDev');

    const services = {
        webAppDev : [
            {
                name: 'Laravel Developrnent',
                link: '/laravel-development'
            },
            {
                name: 'Java Development',
                link: '/java-development'
            },
            {
                name: 'PHP Development',
                link: '/php-development'
            },
            {
                name: 'Python Development',
                link: '/python-development'
            },
            {
                name: 'Angular Development',
                link: '/angular-development'
            },
            {
                name: 'Vue Js Development',
                link: '/vue-development'
            },
            {
                name: 'Node Js Development',
                link: '/node-development'
            },
            {
                name: 'React Js Development',
                link: '/react-development'
            },
        ],
        staffAugmentation : [
            {
                name: 'Staff Augmentation',
                link: '/staff-augmentation'
            }
        ],
        a1Dev : [
            {
                name: 'A1 Development',
                link: '/a1-development'
            }
        ],
        mlDev : [
            {
                name: 'ML Development',
                link: '/ml-development'
            }
        ],
        mobileAppDev : [
            {
                name: 'Flutter App Development',
                link: '/mob-app-development'
            },
            {
                name: 'Android App Development',
                link: '/mob-app-development'
            },
            {
                name: 'IOS App Development',
                link: '/mob-app-development'
            },
            {
                name: 'React Native App Development',
                link: '/mob-app-development'
            },
        ],
        qualityAssurance : [
            {
                name: 'Manula Testing Service',
                link: '/quality-assurance'
            },
            {
                name: 'Automated Testing Service',
                link: '/quality-assurance'
            }
        ],
        emergingTech: [
            {
                name: 'Digital Transformation',
                link: '/emerging-tech'
            },
            {
                name: 'IoT Development',
                link: '/emerging-tech'
            },
            {
                name: 'Legacy Solution Migration',
                link: '/emerging-tech'
            }
        ],
        itCnsultService : [
            {
                name: 'IT Consulting Services',
                link: '/it-consultation'
            }
        ]
    }

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerStyle = isScrolling
        ? { backgroundColor: "#000", transition: "background-color 0.10s ease", position: 'sticky', top: 0, zIndex: 999999999999 }
        : {position: 'sticky', top: 0, zIndex: 999999999999};

        const toggleMenu = (open) => {
            document.getElementById('slider-menu').style.right = `${open ? 0 : -100}%`

        }

        const toggleDropdown = (open) => {
            document.getElementById('dropdown-menu').style.opacity = `${open ? 1 : 0}`;
            document.getElementById('dropdown-menu').style.transform = `${open ? 'translateY(0)' : 'translateY(-200%)'}`;
            !open && setServiceLinks('webAppDev')
        }

    return (
        <header style={headerStyle}>
            <div className="container">
                <div className="main-header">
                    <NavLink to='/'>
                        <img className="logo" src="/assets/img/logo.svg" alt="" />
                    </NavLink>
                    {
                        window.innerWidth > 767 ? (
                            <ul className='menu-list'>
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>About Us</NavLink> 
                                </li>
                                <li onMouseEnter={()=>  toggleDropdown(true)} onMouseLeave={()=>toggleDropdown(false)} className="drop-down">
                                    <NavLink to='/services'>Services &nbsp; <i class="fa-regular fa-angle-down"></i></NavLink>
                                    <div id='dropdown-menu' className="dropdown-menu">
                                        <div className="part1">
                                            <ul>
                                                <li onMouseEnter={()=>setServiceLinks('webAppDev')}><h4>Web App <span>Development</span></h4></li>
                                                <li onMouseEnter={()=>setServiceLinks('staffAugmentation')}><h4>Staff <span>Augmentation</span></h4></li>
                                                <li onMouseEnter={()=>setServiceLinks('a1Dev')}><h4>A1 <span>Development</span></h4></li>
                                                <li onMouseEnter={()=>setServiceLinks('mlDev')}><h4>ML <span>Development</span></h4></li>
                                                <li onMouseEnter={()=>setServiceLinks('mobileAppDev')}><h4>Mobile App <span>Development</span></h4></li>
                                                <li onMouseEnter={()=>setServiceLinks('qualityAssurance')}><h4>Quality <span>Assurance</span></h4></li>
                                                <li onMouseEnter={()=>setServiceLinks('emergingTech')}><h4>Emerging <span>Technologies</span></h4></li>
                                                <li onMouseEnter={()=>setServiceLinks('itCnsultService')}><h4>IT Consulting <span>Services</span></h4></li>
                                            </ul>
                                        </div>
                                        <div className="part2">
                                            <ul>
                                                <li className='opacity-5'>Browse by category</li>
                                                {
                                                    services?.[serviceLinks]?.map((item, index) => (
                                                        <li key={index}><NavLink>{item.name}</NavLink></li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <NavLink to='/portfolio'>Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact'>Digital Banking Solutions</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/cyber-security'>Cyber Security</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' className="connect-btn">Contact Us <img src="/assets/img/arrow.svg" alt="" /></NavLink>
                                </li>
                            </ul>
                        ) : (
                            <div>
                                <button id="menubtn" onClick={()=>toggleMenu(true)} className="menu-btn">
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                </button>
                            </div>
                        )
                    }
                    
                    
                </div>
                <div id="slider-menu" className="slider-menu">
                    <div className="header">
                        <div className='part-1'>
                            <div className='text'>
                                <p>CALL US</p>
                                <h6>(+91) 99300 11856</h6>
                            </div>
                            <div className='text'>
                                <p>EMAIL US</p>
                                <h6>info@appnxt.in</h6>
                            </div>
                        </div>
                        <div className="main-header p-0">
                            <button id="menubtn" onClick={()=>toggleMenu(false)} className="menu-btn cross">
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                            </button>
                        </div>
                    </div>
                    <div className="body">
                        <img className='gif' src="/assets/img/slider.svg" alt="" />
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/service'>Services</NavLink>
                        <NavLink to='/portfolio'>Projects</NavLink>
                        <NavLink to='/'>Awards</NavLink>
                        <NavLink to='/'>Members</NavLink>
                        <NavLink to='/contact'>Contact Us</NavLink>
                    </div>
                    <div className="footer">
                        <NavLink to='/' className='font-md'>TW</NavLink>
                        <NavLink to='/' className='font-md'>FB</NavLink>
                        <NavLink to='/' className='font-md'>YT</NavLink>
                        <NavLink to='/' className='font-md'>BE</NavLink>
                        <NavLink to='/' className='font-md'>DR</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
