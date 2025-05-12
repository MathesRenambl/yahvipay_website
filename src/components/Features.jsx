import React from 'react'
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const features = [
    {
      iconUrl: "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/wallet.png",
      title: "Payment",
      description: "Accept payment from any UPI App. Payments get settled to your bank account.",
      bgClass: "bg-primary-gradient"
    },
    {
      iconUrl: "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/speaker.png",
      title: "QR Sound Box",
      description: "Get real-time payment transaction details on your myKaau App.",
      bgClass: "bg-secondary-gradient"
    },
    {
      iconUrl: "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/loan.png",
      title: "Easy Loans",
      description: "Get loans up to ₹5 Lakhs without any collateral at low interest rates.",
      bgClass: "bg-primary-gradient"
    }
  ];

  const steps=[
    {
      icon: "fa-cog",
    title: "Install App",
    description: "Download the IOS or Android App from the store.",
    delay: "0.1s",
    gradient: "bg-primary-gradient"
    },
    {
      icon: "fa-phone-alt",
      title: "Register Phone Number",
      description: "Use your 10 digit phone number and confirm OTP",
      delay: "0.3s",
      gradient: "bg-secondary-gradient"
    },
    {
      icon: "fa-user",
      title: "Setup Profile",
      description: "Update personal and business details including bank account information.",
      delay: "0.3s",
      gradient: "bg-secondary-gradient"
    },
    {
      icon: "fa-address-card",
      title: "Complete KYC",
      description: "Fill up Aadhaar, Pan, GST details to speed up approval process.",
      delay: "0.3s",
      gradient: "bg-secondary-gradient"
    },
    {
      icon: "fa-check",
      title: "Enjoy Features",
      description: "Within 5 minutes, you can complete the setup and start using QR code to your customers.",
      delay: "0.5s",
      gradient: "bg-primary-gradient"
    }
  ]

 
  return (
    <div>
        {/* Features start */}
        <div className="container-xxl py-5" id="feature">
      <div className="container py-5 px-lg-5">
        <div className="text-center" data-wow-delay="0.1s">
          <h5 className="text-primary-gradient fw-medium">App Features</h5>
          <h1 className="mb-5">Awesome Features</h1>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
      {/* Features end */}
    

        {/* Screenshot start */}
      <div className="container-xxl py-5" id="screenshot" >
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 " data-wow-delay="0.1s">
              <h5 className="text-primary-gradient fw-medium">
                What customers love
              </h5>
              <h1 className="mb-4">
                Faster and better service with a customer friendly App.
              </h1>
              <p className="mb-4">
                Seamless integration of payments, unlimited withdrawals, loan
                tracking and account management in an easy to use interface.
              </p>
              <p>
                <i className="fa fa-check text-primary-gradient me-3"></i>Payment
              </p>
              <p><i className="fa fa-check text-primary-gradient me-3"></i>Loan</p>
              <p className="mb-4">
                <i className="fa fa-check text-primary-gradient me-3"></i>QRSoundBox
              </p>
              {/* <!-- <a href="" class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Read More</a> --> */}
            </div>
            <div
              className="col-lg-4 d-flex justify-content-center justify-content-lg-end "
              data-wow-delay="0.3s"
            >
              {/* <!-- <div class="owl-carousel screenshot-carousel">
                            <img class="img-fluid" src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/01.jpg" alt="">
                            <img class="img-fluid" src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/02.jpg" alt="">
                            <img class="img-fluid" src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/03.jpg" alt="">
                            <img class="img-fluid" src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/04.jpg" alt="">
                            <img class="img-fluid" src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/05.jpg" alt="">
                        </div> --> */}
              <div
                className="background-soundbox"
                style={{backgroundColor: "rgba(222, 139, 148, 0.866)", borderRadius: "100%" ,height: "320px", width: "350px" ,display: "flex", alignItems: "center", justifyContent: "center"}}
              >
                <img
                  className="img-fluid "
                  data-wow-delay="0.1s"
                  src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/YahviBox.png"
                  width="320"
                  height="320"
                  style={{ height : '100%'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Screenshot end */}
      {/* Process start */}
      <div className="container-xxl py-5" id="how-it-works">
        <div className="container py-5 px-lg-5">
        <div className='text-center pb-4' data-wow-delay="0.1s">
          <h5 className='text-primary-gradient fw-medium'>How it Works</h5>
            <h1 className="mb-5">5 Easy Steps</h1>
            </div>
          <div className='row gy-5 gx-4 justify-content-center'>
        {steps.map((step, index) => (
          <div
              className="col-lg-4 col-sm-6 text-center pt-4"
              data-wow-delay={step.delay}
              key={index}>
              <div className="position-relative bg-light rounded pt-5 pb-4 px-4" style={{ height : '100%' }}>
                <div
                  className={`d-inline-flex align-items-center justify-content-center ${step.gradient} rounded-circle position-absolute top-0 start-50 translate-middle shadow`}
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className={`fa ${step.icon} fa-3x text-white`}></i>
                </div>
                <h5 className="mt-4 mb-3">{step.title}</h5>
                <p className="mb-0">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>





      {/* <div className="container-xxl py-5" id="how-it-works" >
        <div className="container py-5 px-lg-5">
          <div className="text-center pb-4 " data-wow-delay="0.1s">
            <h5 className="text-primary-gradient fw-medium">How It Works</h5>
            <h1 className="mb-5">5 Easy Steps</h1>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 "
              data-wow-delay="0.1s"
            >
              <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{width: "100px", height: "100px"}}
                >
                  <i className="fa fa-cog fa-3x text-white"></i>
                </div>
                <h5 className="mt-4 mb-3">Install App</h5>
                <p className="mb-0">
                  Download the IOS or Android App from the store.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 "
              data-wow-delay="0.3s"
            >
              <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{width: "100px", height: "100px"}}
                >
                  <i className="fa fa-phone-alt fa-3x text-white"></i>
                </div>
                <h5 className="mt-4 mb-3">Register Phone Number</h5>
                <p className="mb-0">
                  Use your 10 digit phone number and confirm OTP
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 "
              data-wow-delay="0.3s"
            >
              <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{width: "100px", height:"100px"}}
                >
                  <i className="fa fa-user fa-3x text-white"></i>
                </div>
                <h5 className="mt-4 mb-3">Setup Profile</h5>
                <p className="mb-0">
                  Update personal and business details including bank account
                  infromation.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 "
              data-wow-delay="0.3s"
            >
              <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{width: "100px", height: "100px"}}
                >
                  <i className="fa fa-address-card fa-3x text-white"></i>
                </div>
                <h5 className="mt-4 mb-3">Complete KYC</h5>
                <p className="mb-0">
                  Fill up Aadhaar, Pan, GST details to speed up approval
                  process.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 "
              data-wow-delay="0.5s"
            >
              <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{width: "100px",height: "100px"}}
                >
                  <i className="fa fa-check fa-3x text-white"></i>
                </div>
                <h5 className="mt-4 mb-3">Enjoy Features</h5>
                <p className="mb-0">
                  Within 5 minutes, you can complete the setup and start using
                  QR code to your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Process end */}






        {/* Download start */}
      <div className="container-xxl py-5" id="download" >
      <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              data-wow-delay="0.1s"
              src="https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/website/about.png"
            />
          </div>
          <div className="col-lg-6 " data-wow-delay="0.3s">
            <h5 className="text-primary-gradient fw-medium">Download</h5>
            <h1 className="mb-4">Get your app now !</h1>
            <p className="mb-4">
              Our App suite covers businesses, employees and customers.
            </p>

            <div className="row g-4 mb-2" style={{padding: "10px"}}>
              <div
                className="col-sm-6  d-flex bg-primary-gradient rounded"
                style={{padding: "10px"}}
                data-wow-delay="0.5s"
              >
                <div className="col-7">
                  <h5
                    className="text-white ms-2"
                    style={{
                      marginTop: "7px",
                      textAlign: "center",
                      height: "30px !important"}}
                    
                  >
                    Business
                  </h5>
                </div>
                <div className="col">
                  <a href="#" className="icon"
                    ><i
                      className="fab fa-apple fa-2x text-white flex-shrink-0"
                    ></i></a>
                </div>
                <div className="col">
                  <a href="#" className="icon"
                    ><i
                      className="fab fa-android fa-2x text-white flex-shrink-0"
                    ></i></a>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-2" style={{padding: "10px"}}>
              <div
                className="col-sm-6  d-flex bg-primary-gradient-agent rounded"
                style={{padding: "10px"}}
                data-wow-delay="0.5s"
              >
                <div className="col-7">
                  <h5
                    className="text-white ms-2"
                    style={{
                      marginTop: "7px",
                      textAlign: "center",
                      height: "30px !important"}}
                  >
                    Agent
                  </h5>
                </div>
                {/* <!-- <div class="col">
                  <a href="#" class="icon"
                    ><i
                      class="fab fa-apple fa-2x text-white flex-shrink-0"
                    ></i
                  ></a>
                </div> --> */}
                <div className="col">
                  <a href="#" className="icon"
                    ><i
                      className="fab fa-android fa-2x text-white flex-shrink-0"
                    ></i></a>
                </div>
              </div>
            </div>

            {/* <!-- <div class="row g-4 mb-2" style="padding: 10px">
              <div
                class="col-sm-6  d-flex bg-primary-gradient-customer rounded"
                style="position: relative; padding: 10px"
                data-wow-delay="0.5s"
              >
                <div class="box stack-top rounded">
                  <p class="center mt-3">Coming Soon...</p>
                </div>
                <div class="col-7">
                  <h5
                    class="text-white ms-2"
                    style="
                      margin-top: 7px;
                      text-align: center;
                      height: 30px !important;
                    "
                  >
                    Customer
                  </h5>
                </div>
                <div class="col">
                  <a href="#" class="icon"
                    ><i
                      class="fab fa-apple fa-2x text-white flex-shrink-0"
                    ></i
                  ></a>
                </div>
                <div class="col">
                  <a href="#" class="icon"
                    ><i
                      class="fab fa-android fa-2x text-white flex-shrink-0"
                    ></i
                  ></a>
                </div>
              </div>
            </div> --> */}

            {/* <!-- <div class="row g-4 mb-3">
                          <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                              <a href="" class="d-flex bg-primary-gradient rounded py-3 px-4">
                                  <i class="fab fa-apple fa-3x text-white flex-shrink-0"></i>
                                  <div class="ms-3">
                                      
                                      <h5 class="text-white mb-0" style="margin-top: 10px;">YahviPay Business</h5>
                                  </div>
                              </a>
                          </div>
                          <div class="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                              <a href="" class="d-flex bg-secondary-gradient rounded py-3 px-4">
                                  <i class="fab fa-android fa-3x text-white flex-shrink-0"></i>
                                  <div class="ms-3">
                                      
                                      <h5 class="text-white mb-0" style="margin-top: 10px;">YahviPay Business</h5>
                                  </div>
                              </a>
                          </div>
                      </div> --> */}

            {/* <!-- <div class="row g-4 mb-3">
                          <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                              <a href="" class="d-flex bg-primary-gradient-agent rounded py-3 px-4">
                                  <i class="fab fa-apple fa-3x text-white flex-shrink-0"></i>
                                  <div class="ms-3">
                                   
                                      <h5 class="text-white mb-0" style="margin-top: 10px;">YahviPay Agent</h5>
                                  </div>
                              </a>
                          </div>
                          <div class="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                              <a href="" class="d-flex bg-primary-gradient-agent rounded py-3 px-4">
                                  <i class="fab fa-android fa-3x text-white flex-shrink-0"></i>
                                  <div class="ms-3">
                                    
                                      <h5 class="text-white mb-0" style="margin-top: 10px;">YahviPay Agent</h5>
                                  </div>
                              </a>
                          </div>
                      </div> --> */}

            {/* <!-- <div class="row g-4 mb-3">
                          <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                              <a href="" style="position: relative !important;" class="d-flex bg-primary-gradient-customer rounded py-3 px-4">
                                  <div  class="box stack-top rounded"><p class="center mt-3">Coming Soon...</p></div>
                                  <i class="fab fa-apple fa-3x text-white flex-shrink-0"></i>
                                  <div class="ms-3">
                                     
                                      <h5 class="text-white mb-0" style="margin-top: 12px;">YahviPay Customer</h5>
                                  </div>
                              </a>
                          </div>
                          <div class="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                              <a href="" style="position: relative !important;" class="d-flex bg-primary-gradient-customer rounded py-3 px-4">
                                  <div  class="box stack-top rounded"><p class="center mt-3">Coming Soon...</p></div>
                                  <i class="fab fa-android fa-3x text-white flex-shrink-0"></i>
                                  <div class="ms-3">
                                      
                                      <h5 class="text-white mb-0" style="margin-top: 12px;">YahviPay Customer</h5>
                                  </div>
                              </a>
                          </div>
                      </div> --> */}
          </div>
        </div>
      </div>
    </div>
    {/* Download end */}
    </div>

  )
}
