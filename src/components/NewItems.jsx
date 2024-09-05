import { newInStore } from "../data";
import NewItemsSlider from "./NewItemsSlider";

const NewItems = () => {
  const { title, subtitle, link, icon: Icon } = newInStore;

  return (
    <section className="section relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex items-baseline gap-6 lg:flex-col lg:gap-4">
            <h2 className="title max-w-[200px] lg:mt-8 lg:mb-20">{title} </h2>
            <p className="max-w-[240px] lg:mb-12">{subtitle} </p>

            <div className="hidden lg:flex items-center">
              <a className="hover:border-b border-primary font-medium transition-all" href="#">
                {link}
              </a>
              <div className="text-3xl">
                <Icon />
              </div>
            </div>
          </div>

          {/* slider */}
          <div className="lg:max-w-[750px] xl:max-w-[1000px] lg:absolute lg:right-0">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
