import React from 'react'

export const About = () => {
    return (
      <div className="container-xxl py-5" id="about">
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-wow-delay="0.1s">
              <h5 className="text-primary-gradient fw-medium">About App</h5>
              <h1 className="mb-4">YahviPay Business</h1>
              <p className="mb-3">
                YahviPay empowers businesses to accept payments, track invoices and loans.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <i className="fa fa-cogs fa-2x text-primary-gradient flex-shrink-0 mt-1"></i>
                    <div className="ms-3">
                      <h2 className="mb-0" data-toggle="counter-up">1250</h2>
                      <p className="text-primary-gradient mb-0">Businesses</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6" data-wow-delay="0.7s">
                  <div className="d-flex">
                    <i className="fa fa-comments fa-2x text-secondary-gradient flex-shrink-0 mt-1"></i>
                    <div className="ms-3">
                      <h2 className="mb-0" data-toggle="counter-up">5000</h2>
                      <p className="text-secondary-gradient mb-0">Daily Transactions</p>
                    </div>
                  </div>
                </div>
              </div>    
            </div>  
            <div className="col-lg-6">
              <div className="responsive-video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/jbxYpPRzgxM?autoplay=1&rel=0&mute=1&showinfo=0&controls=0&loop=1&autohide=1&modestbranding=1&playlist=jbxYpPRzgxM"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
