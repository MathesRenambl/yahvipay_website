import React from 'react'

export const FeatureCard = ({iconUrl,title,description,bgClass = "bg-primary-gradient" }) => {
    return (
        
        <div className="feature-item bg-light rounded p-4" style={{height:"100%"}}>
          <div
            className={`d-inline-flex align-items-center justify-content-center ${bgClass} rounded-circle mb-4`}
            style={{ width: "60px", height: "60px" }}
          >
            <img
              className="img-fluid"
              src={iconUrl}
              alt={title}
              style={{ filter: "invert(1)" }}
            />
          </div>
          <h5 className="mb-3">{title}</h5>
          <p className="m-0">{description}</p>
        </div>
      );
    };
