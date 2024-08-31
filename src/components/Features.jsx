import { features } from "../data";

const Features = () => {
  const { title, subtitle, image, items } = features;
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:gap-24">
          {/* image */}
          <div className="flex-1">
            <img src={image} alt="" />
          </div>

          {/* text */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">{title} </h2>
            <p className="subtitle">{subtitle} </p>

            {/* items */}
            <div>
              {items.map((item, index) => {
                const { icon: Icon, title, subtitle } = item;
                return (
                  <div className="flex gap-4 mb-6 last:mb-0" key={index}>
                    {/* icon */}
                    <div className="text-2xl lg:text-3xl">
                      <Icon />
                    </div>

                    {/* text */}
                    <div>
                      <h3 className="title-features-items">{title} </h3>
                      <p>{subtitle} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
