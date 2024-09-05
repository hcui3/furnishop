import { HiPlus } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

import { products } from "../data";

const ProductSlider = () => {
  const { pages } = products;
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="productSlider"
    >
      {pages.map((page, index) => {
        const { productList } = page;

        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7 mb-32">
              {productList.map((product, index) => {
                const { image, name, price, oldPrice } = product;

                return (
                  <div className="w-[290px] h-[360px] mx-auto" key={index}>
                    {/* image */}
                    <div className="grid-product max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-4 relative transition-all">
                      <img src={image} alt="" />
                      <div className="absolute bottom-4 right-5 icon-add">
                        <HiPlus className="text-xl text-primary" />
                      </div>
                    </div>

                    {/* text */}
                    <div className="font-semibold lg:text-xl">{name}</div>
                    <div className="flex items-center gap-3">
                      <div>$ {price}</div>
                      <div className="text-sm text-gray-500 line-through">$ {oldPrice}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
