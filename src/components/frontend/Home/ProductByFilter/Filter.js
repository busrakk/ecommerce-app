import React, { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Filter = (props) => {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(false);
    }
  }, [isOpen, windowWidth]);

  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4 justify-between">
        <h6 onClick={toggleCollapse} className="text-xl text-black flex items-center justify-between gap-10">
          {props.title}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-6 h-6 place-items-center rounded-lg bg-black bg-opacity-10 text-black"
          >
            <span
              className={`transition-all flex justify-center transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <IoIosArrowDown size={14} />
            </span>
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid gap-y-1 md:gap-y-2">
              {props.items.map((item, key) => (
                <li key={key}>
                  <Link to="#" className="text-sm hover:text-gray-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
};

export default Filter;
