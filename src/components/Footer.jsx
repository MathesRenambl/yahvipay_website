import React from 'react'

export const Footer = () => {
  return (
    <div
        className="container-fluid bg-primary text-light footer "
        data-wow-delay="0.1s"
      >
        <div className="container py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-md-8 col-lg-6">
              <h4 className="text-white mb-4">Address</h4>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>Renambl Technologies
                Pvt Ltd
              </p>
              <p><i className="fa fa-phone-alt me-3"></i>
              <a href="tel:+917200490494" style={{color:"white"}}>+91-7200490494</a></p>
              <p><i className="fa fa-envelope me-3"></i>
              <a href='mailto:support@yahvipay.com' style={{color:"white"}}> support@yahvipay.com</a></p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://twitter.com/My_Kaasu?t=xgnLj6cJzbmhd4WVQtNpZA&s=08"
                  target="_blank"
                  ><i className="fab fa-twitter"></i></a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100071953860870"
                  target="_blank"
                  ><i className="fab fa-facebook-f"></i></a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.instagram.com/renambl_technologies/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  ><i className="fab fa-instagram"></i></a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/company/renambl/"
                  target="_blank"
        ><i className="fab fa-linkedin-in"></i>
        </a>
              </div>
            </div>
            {/* <!-- <div class="col-md-6 col-lg-3">
                        <h4 class="text-white mb-4">Quick Link</h4>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="privacypolicy.html">Privacy Policy</a>
                        <a class="btn btn-link" href="termsandconditions.html">Terms & Condition</a>
                        <a class="btn btn-link" href="">Career</a>
                    </div> --> */}
            <div className="col-md-8 col-lg-6">
              <h4 className="text-white mb-4">Quick Link</h4>
              <a className="btn btn-link" href="#about">About Us</a>
              <a className="btn btn-link" href="#contact">Contact Us</a>
              <a className="btn btn-link" href="privacypolicy.html"
                >Privacy Policy</a>
              <a className="btn btn-link" href="termsandconditions.html"
                >Terms & Condition</a>
            </div>
            {/* <!-- <div class="col-md-6 col-lg-3">
                        <h4 class="text-white mb-4">Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style="height: 48px;">
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary-gradient fs-4"></i></button>
                        </div>
                    </div> --> */}
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="#">YahviPay</a>, All Right
                Reserved. @<a
                  className="border-bottom"
                  href="https://www.renambl.com"
                  target="_blank"
                  >Renambl Technologies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
 )
}
