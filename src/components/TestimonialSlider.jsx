import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { testimonial } from "../data";

const TestimonialSlider = () => {
  const { persons } = testimonial;

  return (
    <Swiper className="testimonialSlider" navigation={true} autoplay={true} modules={[Navigation, Autoplay]}>
      {persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;

        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:mb-20">
              <div className="flex items-center gap-5 mb-8">
                {/* avatar */}
                <img src={avatar} alt="" />

                {/* info */}
                <div>
                  <div className="text-xl font-semibold">{name} </div>
                  <div className="text-gray-500">{occupation} </div>
                </div>
              </div>

              {/* message */}
              <div className="text-xl max-w-[570px]">{message} </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
