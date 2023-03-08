import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MegaMenu = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategoryList = () => {
    axios("http://127.0.0.1:8000/api/allcategory")
      //.then((res) => res.json())
      .then((res) => {
        setCategories(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="shadow-xl mt-16">
      <nav className="container">
        <div className="max-w-7xl flex justify-between items-center mx-auto relative">
          <div>
            <ul className="flex font-semibold text-sm">
              <li className="group">
                <a
                  href="/#"
                  className="menu-item group-hover:border-black uppercase font-semibold"
                >
                  TÜM KATEGORİLER
                </a>
                {/* MEGA MENU CONTENT */}
                <div
                  className="grid grid-cols-4 bg-white z-50 w-full p-5 absolute top-full left-0 mt-14
                opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all
                duration-500"
                >
                  <div>
                    <ul className="p-2">
                      {isLoading && <div>Loading...</div>}
                      {categories.map((item) => (
                        <li key={item.id}>
                          <div className="mega-sub-item-title">
                            {item.name}
                          </div>
                        </li>
                      ))}
                      {/* <li>
                        <div className="mega-sub-item-title">ategory_name</div>
                      </li> */}
                      <li>
                        <Link to="/#" className="mega-sub-item">
                          subcategory_name
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* MEGA MENU CONTENT END*/}
              </li>
              <li>
                <a
                  href="/#"
                  className="p-4 inline-block hover:font-bold font-normal"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="p-4 inline-block hover:font-bold font-normal"
                >
                  İlanlar
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="p-4 inline-block hover:font-bold font-normal"
                >
                  Favoriler
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MegaMenu;
