import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';

const navBarList = [
    { "name": "Home", "href": "#home" },
    { "name": "About", "href": "#about" },
    { "name": "Feature", "href": "#feature" },
    { "name": "Review", "href": "#review" },
    { "name": "Contact", "href": "#contact" },
    { "name": "Careers", "href": "/careers" }
];

const NavBar = () => {
    
    const isStickyRef = useRef(false);
    const [update, setUpdate] = useState(false);
    const { pathname } = useLocation();

    const HandlePage = (link) => {
        if (link.includes('#') && (pathname === '/careers' || pathname === '/termsandconditions' || pathname === '/privacypolicy')) {
            window.location.replace('/');
        }
    };

    useEffect(() => {
        const HandleScroll = () => {
            const shouldBeSticky = window.scrollY > 50;
            if (shouldBeSticky !== isStickyRef.current) {
                isStickyRef.current = shouldBeSticky;
                setUpdate(prev => !prev); 
            }
        };
        window.addEventListener('scroll', HandleScroll);
        
        return () => window.removeEventListener('scroll', HandleScroll);
    }, []);

    return (
        <div className="position-relative p-0" id="home">
            <nav
                className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${isStickyRef.current ? 'sticky-top shadow-sm' : ''}`}
            >
                <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <a href="/" className="navbar-brand p-0" style={{ flex: 1 }}>
                        <img
                            src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/yahviPayLogo.png"
                            alt="Logo"
                            style={{ width: "35%", minWidth: "120px", maxWidth: "200px" }}
                        />
                    </a>
                    <button
                        className={`navbar-toggler d-lg-none`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        style={{ display: "block", marginLeft: "auto" }}
                        data-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className={`collapse navbar-collapse `} id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            {navBarList.map((item, index) => (
                                <a key={index}
                                    href={item.href}
                                    className={`nav-item nav-link scrollto `}
                                    onClick={() => HandlePage(item.href)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

