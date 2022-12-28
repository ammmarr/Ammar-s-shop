import React from "react";
import "../componentsStyles/categories.css";
import CategoriesData from "../data/categories";
// {
//     categories.map(element => (

//     ))
// }

const Categories = () => {
  return (
    <div className="categories-container">
      {CategoriesData.map((element) => (
        <div
          key={element.desc}
          className="category-item"
          style={{
            backgroundImage: `url(${element.img})`,
            color: element.fontColor,
          }}
        >
          <h5>{element.title}</h5>
          <h2>{element.desc}</h2>
        </div>
      ))}
    </div>  
  );
};
export default Categories;
