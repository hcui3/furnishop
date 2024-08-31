import { navigation } from "../data";

const NavMobile = () => {
  return (
    <nav className="bg-white shadow-2xl h-full">
      <ul className="flex flex-col items-center justify-center h-full gap-6">
        {navigation.map((nav, index) => {
          const { name, href } = nav;

          return (
            <li key={index}>
              <a className="text-xl font-normal hover:font-medium" href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
