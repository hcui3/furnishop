import { features } from "../data";

const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-24">
          {/* text */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title mb-8">{title} </h2>
            <p className="subtitle lg:mb-20">{subtitle} </p>
          </div>

          {/* image */}
          <div className="flex-1">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
