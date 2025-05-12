import React, { useEffect, useRef } from 'react'

const bannerImages = [
    { "name" : "image1", "src" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/01.jpg" },
    { "name" : "image2", "src" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/02.jpg" },
    { "name" : "image3", "src" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/03.jpeg" },
    { "name" : "image4", "src" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/04.jpg" },
    { "name" : "image5", "src" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/05.jpg" }
]
const MobileSlideImages = () => {

    const activeIndexRef = useRef(0);
    const timerRef = useRef(null);
    const stageRef = useRef(null);
    const dotsRef = useRef(null);
    const slideWidth = 223;
    const totalWidth = bannerImages.length * slideWidth;
  
    const UpdateCarousel = (index) => {
        activeIndexRef.current = index;
        
        if (stageRef.current) {
            stageRef.current.style.transform = `translate3d(-${index * slideWidth}px, 0px, 0px)`;
        }
        if (dotsRef.current) {
            const dots = dotsRef.current.children;            
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = `owl-dot ${i === index ? 'active' : ''}`;
            }
        }
    };

    const HandleSlide = (index) => {
      
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        UpdateCarousel(index);
        timerRef.current = setInterval(() => {
            const nextIndex = (activeIndexRef.current + 1) % bannerImages.length;
            UpdateCarousel(nextIndex);
        }, 3000);
    };
  
    useEffect(() => {
        HandleSlide(0);
        return () => { 
            if (timerRef.current) clearInterval(timerRef.current); 
        };
    }, []);
  
    return (
      <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end" data-wow-delay="0.3s">
        <div className="owl-carousel screenshot-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div ref={stageRef} className="owl-stage" style={{ width: `${totalWidth}px`, transition: "all 1s ease 0s" }}>
              { bannerImages.length ? bannerImages.map((item, index) => (
                <div className="owl-item" style={{ width: `${slideWidth}px` }} key={index}>
                  <img className="img-fluid" src={item.src} alt={item.name} />
                </div>
              )) : '' }
            </div>
          </div>
          
          <div className="owl-dots" ref={dotsRef}>
            { bannerImages.length ? bannerImages.map((item, index) => (
              <div key={index} className={`owl-dot ${index === 0 ? 'active' : ''}`} onClick={() => HandleSlide(index)}>
                <span></span>
              </div>
            )) : '' }
          </div>
        </div>
      </div>
    );
};

export default MobileSlideImages;