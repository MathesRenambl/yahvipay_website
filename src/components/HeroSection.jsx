import React from 'react'
import MobileSlideImages from './MobileSlideImages'

const HeroSection = ({ title, displayBanner = false, displayDownload = false }) => {
  return (
    <>
        <div className="bg-primary hero-header">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 " data-wow-delay="0.3s">
                        <h1 className="mb-4" style= {{ color: "white" }}>{title}</h1>
                        {/* <p className="mb-4" style= {{ color: "white" }}>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>  */}
                        { displayDownload ?
                        <>
                            <div className="row g-4 mb-2" style= {{ padding: "10px" }}>
                                <div className="col-sm-6  d-flex bg-home-text rounded" style= {{ alignItems : 'center', padding: "10px" }} data-wow-delay="0.5s">
                                    <div className="col-7">
                                        <h5 className="home-text ms-2" style= {{ marginTop: "7px", textAlign: "center", height: "30px !important" }}>
                                            Business
                                        </h5>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="icon"><i className="fab fa-apple fa-2x home-text flex-shrink-0"></i></a>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="icon"><i className="fab fa-android fa-2x home-text flex-shrink-0"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-4 mb-2" style= {{ padding: "10px" }}>
                                <div className="col-sm-6  d-flex bg-home-text rounded" style= {{ alignItems : 'center', padding: "10px" }} data-wow-delay="0.5s">
                                    <div className="col-7">
                                        <h5 className="home-text-agent ms-2" style= {{ marginTop: "7px", textAlign: "center", height: "30px !important" }}>
                                            Agent
                                        </h5>
                                    </div>
                                    {/* <div className="col">
                                        <a href="#" className="icon"><i className="fab fa-apple fa-2x home-text-agent flex-shrink-0"></i></a>
                                    </div> */}
                                    <div className="col">
                                        <a href="#" className="icon"><i className="fab fa-android fa-2x home-text-agent flex-shrink-0"></i></a>
                                    </div>
                                </div>
                            </div>
                        </> : 

                            <div style = {{ paddingBottom : '10rem' }}>

                            </div>
                        }

                        {/* <div className="row g-4 mb-2" style= {{ padding: "10px" }}>
                        <div
                            className="col-sm-6  d-flex bg-home-text-coming-soon rounded"
                            style= {{ position: "relative !important", padding: "10px" }}
                            data-wow-delay="0.5s"
                        >
                            <div className="box stack-top rounded">
                            <p className="center mt-3">Coming Soon...</p>
                            </div>
                            <div className="col-7">
                            <h5
                                className="home-text-customer ms-2"
                                style= {{ marginTop: "7px", textAlign: "center", height: "30px !important" }}>
                                Customer
                            </h5>
                            </div>
                            <div className="col">
                            <a href="#" className="icon"
                                ><i
                                className="fab fa-apple fa-2x home-text-customer flex-shrink-0"
                                ></i
                            ></a>
                            </div>
                            <div className="col">
                            <a href="#" className="icon"
                                ><i
                                className="fab fa-android fa-2x home-text-customer flex-shrink-0"
                                ></i
                            ></a>
                            </div>
                        </div>
                        </div>  */}
                        
                        {/* <div className="row g-4 mb-2">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                <div href="" className="d-flex bg-home-text rounded" style= {{ padding: "10px" }}>
                                            
                                    <div className="ms-2">
                                        <h5 className="home-text-agent" style= {{ marginTop: "12px" }}>YahviPay Agent</h5>
                                    </div>
                                                
                                    <a href="#" style= {{ paddingLeft: "30px" }} className="icon"><i className="fab fa-apple fa-2x home-text-agent flex-shrink-0"></i></a>
                                    <a href="#" className="icon"><i className="fab fa-android fa-2x home-text-agent flex-shrink-0"></i></a>
                                            
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="row g-4 mb-2">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                <div href="" style={{ position: "relative !important", padding: "10px" }} className="d-flex bg-home-text rounded" >
                                    <div  className="box stack-top rounded"><p className="center mt-3">Coming Soon...</p></div>
                                    <div className="ms-2">
                                        <h5 className="home-text-customer" style= {{ marginTop: "12px" }}>YahviPay Customer</h5>
                                    </div>
                                                
                                    <a href="#" className="icon"><i className="fab fa-apple fa-2x home-text-customer flex-shrink-0"></i></a>
                                    <a href="#" className="icon"><i className="fab fa-android fa-2x home-text-customer flex-shrink-0"></i></a>
                                            
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="row g-4 mb-2" >
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                <a href="" className="d-flex bg-home-text rounded py-3 px-4">
                                    <i className="fab fa-apple fa-3x home-text-agent flex-shrink-0"></i>
                                    <div className="ms-3">
                                        <h5 className="home-text-agent" style= {{ marginTop: "12px" }}>YahviPay Agnet</h5>
                                    </div>
                                </a>
                            </div>

                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                <a href="" className="d-flex bg-home-text rounded py-3 px-4">
                                    <i className="fab fa-android fa-3x home-text-agent flex-shrink-0"></i>
                                    <div className="ms-3">
                                        <h5 className="home-text-agent" style= {{ marginTop: "12px" }}>YahviPay Agent</h5>
                                    </div>
                                </a>
                            </div>
                        </div> */}

                        {/* <div className="row g-4 mb-2">
                            <div  className="col-sm-6  wow fadeIn " data-wow-delay="0.5s">     
                                <a style= {{ position: "relative !important" }} href="#" className="d-flex bg-home-text rounded py-3 px-4 " >
                                    <div  className="box stack-top rounded"><p className="center mt-3">Coming Soon...</p></div>
                                    <i className="fab fa-apple fa-3x home-text-customer flex-shrink-0"></i>
                                    <div className="ms-3">                                          
                                        <h5 className="home-text-customer" style= {{ marginTop: "10px" }}>YahviPay Customer</h5>
                                    </div>
                                </a>
                                        
                            </div>
                            <div className="col-sm-6 wow fadeIn " data-wow-delay="0.7s">
                                <a style= {{ position: "relative !important" ]} href="#" className="d-flex bg-home-text rounded py-3 px-4 " >
                                    <div  className="box stack-top rounded"><p className="center mt-3">Coming Soon...</p></div>
                                    <i className="fab fa-android fa-3x home-text-customer flex-shrink-0"></i>
                                    <div className="ms-3">
                                                
                                        <h5 className="home-text-customer" style= {{ marginTop: "12px" }}>YahviPay Customer</h5>
                                    </div>
                                </a>
                            </div>
                        </div>  */}
                    </div>    
                    { displayBanner && <MobileSlideImages /> }            
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection
