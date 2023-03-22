import React, {useState} from "react";
import { Link } from "react-router-dom";
// import { links } from "./Mylinks";

const MenuLinks = ({ categories, setCategories }) => {
const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div className="px-3 text-left md:cursor-pointer group">
          <h1
            className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
            onClick={() => setOpen(!open)}
          >
            TÜM ÜRÜNLER
            <span className="text-xl md:hidden inline">
              <ion-icon name="chevron-up"></ion-icon>
            </span>
            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
              <ion-icon name="chevron-down"></ion-icon>
            </span>
          </h1>
          {categories.map((link) => (
            <div key={link.id} >
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div
                    className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                  ></div>
                </div>
                <div className="bg-white shadow-lg p-5 grid grid-cols-3 max-w-7xl gap-10">
                  {categories.map((links) => (
                    <div key={links.id}>
                      <Link to={`/category/product/${links.id}`} className="hover:text-primary text-sm font-semibold">
                            {links.name}
                          </Link>
                      {/* {links.subcategories.map((slink) => (
                        <li
                          key={slink.id}
                          className="text-sm text-gray-600 my-2.5"
                        >
                          <Link to="" className="hover:text-primary">
                            {slink.name}
                          </Link>
                        </li>
                      ))} */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile menus */}

      </div>
    </>
  );
};

export default MenuLinks;
