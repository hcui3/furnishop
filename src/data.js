import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

import Features1Img from "./assets/img/features-1.png";
import Features2Img from "./assets/img/features-2.png";
import ChairImg from "./assets/img/chair.png";
import BedImg from "./assets/img/bed.png";
import CupboardImg from "./assets/img/cupboard.png";
import LightingImg from "./assets/img/lighting.png";
import Product1Img from "./assets/img/products/product-1.png";
import Product2Img from "./assets/img/products/product-2.png";
import Product3Img from "./assets/img/products/product-3.png";
import Product4Img from "./assets/img/products/product-4.png";
import Product5Img from "./assets/img/products/product-5.png";
import Product6Img from "./assets/img/products/product-6.png";
import Product7Img from "./assets/img/products/product-7.png";
import Product8Img from "./assets/img/products/product-8.png";
import TestimonialImg from "./assets/img/testimonial.png";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";

export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Features",
    href: "features",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

export const hero = {
  title: "Creative Home Simpify your Furniture",
  subtitle: "Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto",
  cta: "Shop Now",
};

export const stats = [
  {
    value: "7",
    text: "Year Experience",
  },
  {
    value: "2",
    text: "Opened in the country",
  },
  {
    value: "10k+",
    text: "Furniture sold",
  },
  {
    value: "260+",
    text: "Variant Furniture",
  },
];

export const features = {
  image: Features1Img,
  title: "We Create your home more aesthetic",
  subtitle: "Furniture power is a software as services for multipurpose business management system",
  buttonText: "Show Now",
  items: [
    {
      icon: IoIosCheckmarkCircle,
      title: "Valuation Services",
      subtitle: "Sometimes features require a short description.  This can be detailed description",
    },
    {
      icon: IoIosCheckmarkCircle,
      title: "Development of Furniture Models",
      subtitle: "Sometimes features require a short description.  This can be detailed description",
    },
  ],
  feature2: {
    image: Features2Img,
    title: "The Best Furniture Manufacturer of your choice",
    subtitle:
      "Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.",
  },
};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check All",
  icon: IoIosArrowRoundForward,
  products: [
    {
      name: "Chair",
      image: ChairImg,
    },
    {
      name: "Bed",
      image: BedImg,
    },
    {
      name: "Cupboard",
      image: CupboardImg,
    },
    {
      name: "Lighting",
      image: LightingImg,
    },
  ],
};

export const products = {
  title: "All Products",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      productList: [
        {
          image: Product1Img,
          icon: IoMdAddCircle,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: Product2Img,
          icon: IoMdAddCircle,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: Product3Img,
          icon: IoMdAddCircle,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: Product4Img,
          icon: IoMdAddCircle,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: Product5Img,
          icon: IoMdAddCircle,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: Product6Img,
          icon: IoMdAddCircle,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          image: Product7Img,
          icon: IoMdAddCircle,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: Product8Img,
          icon: IoMdAddCircle,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
      ],
    },
    {
      productList: [
        {
          image: Product1Img,
          icon: IoMdAddCircle,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: Product2Img,
          icon: IoMdAddCircle,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: Product3Img,
          icon: IoMdAddCircle,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: Product4Img,
          icon: IoMdAddCircle,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: Product5Img,
          icon: IoMdAddCircle,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: Product6Img,
          icon: IoMdAddCircle,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          image: Product7Img,
          icon: IoMdAddCircle,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: Product8Img,
          icon: IoMdAddCircle,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "What people are saying about us",
  image: TestimonialImg,
  persons: [
    {
      avatar: Avatar1Img,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message: "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: Avatar2Img,
      name: "Brandi Johns",
      occupation: "Manager of The New York Times",
      message: "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: Avatar3Img,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message: "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const newsletter = {
  title: "Get more discount Off your order",
  subtitle: "Join our mailing list",
  placeholder: "Your email address",
  cta: "Shop Now",
};

export const footer = {
  social: [
    {
      icon: IoLogoInstagram,
      href: "#",
    },
    {
      icon: IoLogoFacebook,
      href: "#",
    },
    {
      icon: IoLogoTwitter,
      href: "#",
    },
    {
      icon: IoLogoGithub,
      href: "#",
    },
    {
      icon: IoLogoInstagram,
      href: "#",
    },
  ],
  copyright: "FurniShop 2022 - All Rights Reserved.",
};

export const linkData = [
  {
    title: "Our Products",
    links: [
      {
        name: "The Support Suite",
        href: "#",
      },
      {
        name: "The Sales Suite",
        href: "#",
      },
      {
        name: "Support",
        href: "#",
      },
      {
        name: "Guide",
        href: "#",
      },
    ],
  },
  {
    title: "Top Features",
    links: [
      {
        name: "Ticketing System",
        href: "#",
      },
      {
        name: "Knowledge Base",
        href: "#",
      },
      {
        name: "Community Forums",
        href: "#",
      },
      {
        name: "Help Desk Software",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Product Support",
        href: "#",
      },
      {
        name: "Request Demo",
        href: "#",
      },
      {
        name: "Library",
        href: "#",
      },
      {
        name: "Peoplepower Blog",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        href: "#",
      },
      {
        name: "Press",
        href: "#",
      },
      {
        name: "Investors",
        href: "#",
      },
      {
        name: "Events",
        href: "#",
      },
    ],
  },
  {
    title: "Favourite Things",
    links: [
      {
        name: "For Enterprise",
        href: "#",
      },
      {
        name: "For Startups",
        href: "#",
      },
      {
        name: "For Benchmark",
        href: "#",
      },
      {
        name: "For Small Business",
        href: "#",
      },
    ],
  },
];
