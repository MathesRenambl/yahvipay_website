import React from 'react';
import './AssociatedPartners.css';

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
