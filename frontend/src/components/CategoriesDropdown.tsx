import React, { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/io";
import "./categories-dropdown.scss";
import FadeIn from "react-fade-in";
import OutsideAlerter from "../hooks/OutsideAlerter";
import { useDispatch } from "react-redux";
import { getNews } from "../state/actions/newsActions";

interface CategoriesDropdownProps {
  categories: string[];
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({ categories }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const iconStyle = { verticalAlign: "middle" };

  const chooseCategory = (category: string) => {
    dispatch(getNews(category));
    setIsOpen(false);
  };

  return (
    <OutsideAlerter outSideElementClickAction={() => setIsOpen(false)}>
      <div>
        <h2 className={`${isOpen ? "active" : ""}`} onClick={() => setIsOpen((prev) => !prev)}>
          Categories{" "}
          {!isOpen ? <IoIosArrowDropdownCircle style={iconStyle} /> : <IoIosArrowDropup style={iconStyle} />}
        </h2>
        {isOpen && (
          <FadeIn>
            <div className={`dropdown-content`}>
              <hr />
              {categories?.length &&
                categories.map((category) => (
                  <>
                    <p onClick={() => chooseCategory(category)}>{category}</p>
                    <hr />
                  </>
                ))}
            </div>
          </FadeIn>
        )}
      </div>
    </OutsideAlerter>
  );
};

export default CategoriesDropdown;
