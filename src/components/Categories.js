import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { getCategories } from '../services/api';
import "../styles/homepage.css";


function Categories() {

  const data = useContext(ProductsContext);
  const [categoriesData, setCategoriesData] = useState([]);

  const requestCategoriesData = async () => {
    const response = await getCategories();
    setCategoriesData(response);
  };

  useEffect(() => {
    requestCategoriesData();
  }, []);

  return (
    <aside className="categories-content">
      {
        categoriesData.map((element, index) => {
          if (index >= 0) {
            return (
              <div key={ element.name } className="categories-item">
                <span
                  className="categories-span"
                  onClick={ () => data.requestProductsData(element.id, element.name) }
                >
                  {element.name}
                </span>
              </div>
            );
          }
          return null;
        })
      }
    </aside>
  );
}

export default Categories;