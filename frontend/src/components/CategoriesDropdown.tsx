import React, { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/io";
import "./categories-dropdown.scss";
import FadeIn from "react-fade-in";

interface CategoriesDropdownProps {
  categories: string[];
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const iconStyle = { verticalAlign: "middle" };

  return (
    <div>
      <h2 className={`${isOpen ? "active" : ""}`} onClick={() => setIsOpen((prev) => !prev)}>
        Categories{" "}
        {!isOpen ? <IoIosArrowDropdownCircle style={iconStyle} /> : <IoIosArrowDropup style={iconStyle} />}
      </h2>
      {isOpen && (
        <FadeIn>
          <div className={`dropdown-content`}>
            <hr />
            {categories.length &&
              categories.map((category) => (
                <>
                  <p>{category}</p>
                  <hr />
                </>
              ))}
          </div>
        </FadeIn>
      )}
    </div>
  );
};

export default CategoriesDropdown;
