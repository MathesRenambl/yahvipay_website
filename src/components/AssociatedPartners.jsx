// import React, { useEffect, useRef } from 'react'

// const AssociatedPartnersImages = [
//     { "brand" : "kvb", "image" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/KVB.png" },
//     { "brand" : "mykaasu", "image" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/mykaasu.png" },
//     { "brand" : "aws", "image" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/Amazon_Web_Services.png" },
//     { "brand" : "cashfree", "image" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/cash_free.png" },
// ]

// const AssociatedPartners = () => {

//   return (
//     <>
//         {/* Associate Partners Start */}
//         <div class="" data-wow-delay="1s" id="associate-partners">
//             <section id="clients" class="clients">
//                 <div class="text-center " data-wow-delay="0.1s">
//                     <h1 class="mb-5">Associated Partners</h1>
//                 </div>
//                 <div class="container" data-aos="zoom-in">
//                     <div class="clients-slider swiper">
//                         <div class="swiper-wrapper align-items-center">                            
//                             {AssociatedPartnersImages.length ? AssociatedPartnersImages.map((item, index) => (
//                                 <div class="swiper-slide" key={index} style={{ width: slideWidth, marginRight: "120px" }}>
//                                     <img
//                                         src={item.image}
//                                         class="img-fluid clients-img"
//                                         alt={item.brand}
//                                     />
//                                 </div>

//                             )) : ''}
//                             {/* <div class="swiper-slide"><img src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/nbfc.png" class="img-fluid clients-img" alt=""></div>
//                                 <div class="swiper-slide"><img src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/idfc.png" class="img-fluid clients-img" alt=""></div>  */}
//                         </div>
                        
//                         {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
//                             <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button" aria-label="Go to slide 3" aria-current="true"></span>
//                             <span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 4"></span>
//                         </div> */}
                    
//                     </div>
//                 </div>
//             </section>
//         </div>
//         {/* Associate Partners End */}
//     </>
//   )
// }

// export default AssociatedPartners

import React from 'react';
import './AssociatedPartners.css'; // Custom CSS

const AssociatedPartnersImages = [
  
    { "brand" : "kvb", "image" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/KVB.png" },
    { "brand" : "mykaasu", "image" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/mykaasu.png" },
    { "brand" : "aws", "image" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/Amazon_Web_Services.png" },
    { "brand" : "cashfree", "image" : "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/cash_free.png" },
];

const AssociatedPartners = () => {
  return (
    <div className="container py-5" id="associate-partners">
      <h1 className="text-center mb-5">Associated Partners</h1>
      <div className="slider-wrapper overflow-hidden position-relative">
        <div className="slider-track d-flex">
          {[...AssociatedPartnersImages, ...AssociatedPartnersImages].map((item, index) => (
            <div className="slide d-flex justify-content-center align-items-center px-4" key={index}>
              <img
                src={item.image}
                alt={item.brand}
                className="img-fluid"
                style={{ maxHeight: '80px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssociatedPartners;
