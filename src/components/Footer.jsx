import Logo from "../assets/img/logo.svg";
import { footer, linkData } from "../data";

const Footer = () => {
  const { social } = footer;
  return (
    <footer className="section bg-primary text-white">
      <div className="container">
        <div className="flex flex-col justify-between border-footer pb-7 lg:pb-14 mb-14 lg:flex-row lg:items-center">
          {/* logo */}
          <a className="mb-6 lg:mb-0" href="#">
            <img src={Logo} alt="" />
          </a>

          {/* social */}
          <div className="flex gap-4 justify-between">
            {social.map((item, index) => {
              const { icon: Icon, href } = item;

              return (
                <div className="icon-social transition-all" key={index}>
                  <a href={href}>
                    <Icon />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* group link */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 mb-14">
          {linkData.map((item, index) => {
            const { title, links } = item;

            return (
              <div key={index}>
                <div className="text-xl font-medium mb-6">{title} </div>
                <ul className="space-y-3.5 text-gray-400">
                  {links.map((link, index) => {
                    const { name, href } = link;

                    return (
                      <li key={index}>
                        <a href={href}>{name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* copyright */}
        <p className="text-center">&copy; NameBrand 2022 - All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
