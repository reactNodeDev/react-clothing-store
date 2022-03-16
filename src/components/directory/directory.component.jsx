import React from "react";
import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

// directory component will be a class component because we want to store the state values of menu items
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
