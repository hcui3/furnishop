import { hero } from "../data";
import Stats from "./Stats";

const Hero = () => {
  const { title, subtitle, cta } = hero;
  return (
    <section className="h-[850px] background-hero text-white pt-[225px] mb-12 lg:mb-28">
      <div className="container text-center">
        <h1 className="title-hero mb-8">{title} </h1>
        <h2 className="subtitle-hero mb-8 lg:mb-16">{subtitle} </h2>
        <button className="btn-hero">{cta} </button>

        {/* stats */}
        <div className="mt-28">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
