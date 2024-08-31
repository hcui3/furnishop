import { testimonial } from "../data";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  const { image, title } = testimonial;

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* text */}
          <div className="lg:max-w-[50%]">
            <h2 className="title mb-9">{title} </h2>
            <TestimonialSlider />
          </div>

          {/* image */}
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
