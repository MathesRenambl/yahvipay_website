import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Testimonials Data
const reviewLists = [
  { name: "Kumaran", busniess: "Merchant", rating: "5", message: "I have been using for a few months now and it has been a great experience. The platform is user-friendly and their customer support is always there to help with any questions I have." },
  { name: "Priya S", busniess: "Customer", rating: "5", message: "I absolutely love this payments mobile app! It accepts all UPI transactions in India and makes it incredibly easy to pay for everything from groceries to bills. Highly recommend!" },
  { name: "Aarti", busniess: "Customer", rating: "5", message: "I was a bit hesitant to try a new payments app, but I'm so glad I did. This one accepts all UPI transactions in India and it's so convenient." },
  { name: "Sai Kumar", busniess: "Business owner", rating: "5", message: "I never knew receiving payments could be this easy! has streamlined the process for me and my customers." },
];

const Review = () => {

  return (
    <div className="container-xxl py-5" id="review">
      <div className="container py-5 px-lg-5 testimonial-carousel">
        <div className="text-center">
          <h5 className="text-primary-gradient fw-medium">Testimonial</h5>
          <h1 className="mb-5">What Say Our Clients!</h1>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="owl-carousel testimonial-carousel owl-loaded owl-drag"
          
        >
          {reviewLists.map((item, index) => (

            <SwiperSlide key={index}>
              <div className="testimonial-item rounded p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="ms-4">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-1">{item.busniess}</p>
                    <div>
                      {Array.from({ length: parseInt(item.rating) }).map(
                        (_, idx) => (
                          <small
                            key={idx}
                            className="fa fa-star text-warning"
                          ></small>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="mb-0">{item.message}</p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        {/* Custom Navigation Buttons */}
        <div className="owl-nav d-flex justify-content-center mt-4">
          <div className="prev owl-prev">
            <i className="bi bi-chevron-left fs-4"></i>
          </div>
          <div className="next owl-next">
            <i className="bi bi-chevron-right fs-4"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
