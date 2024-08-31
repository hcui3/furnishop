import { newsletter } from "../data";

const Newsletter = () => {
  const { title, subtitle, placeholder, cta } = newsletter;
  return (
    <section className="section min-h-[490px] bg-newsletter text-white">
      <div className="container flex justify-center lg:justify-end">
        <div className="w-full max-w-[560px] text-center lg:text-left">
          {/* text */}
          <h2 className="title-news mb-5 mx-auto lg:mx-0">{title} </h2>
          <p className="text-xl font-light mb-10">{subtitle} </p>

          {/* input & cta */}
          <div className="flex flex-col lg:flex-row gap-5">
            <input className="input-news lg:flex-1" type="text" placeholder={placeholder} />
            <button className="btn-news transition-all">{cta} </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
