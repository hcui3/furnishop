import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { newInStore } from "../data";

const NewItemsSlider = () => {
  const { products } = newInStore;
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {products.map((product, index) => {
        const { image, name } = product;
        return (
          <SwiperSlide className="max-w-[265px]" key={index}>
            <div className="relative">
              <img src={image} alt="" />
              <p className="absolute bottom-5 text-center w-full text-white text-xl">{name} </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
