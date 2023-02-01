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
      <ul>
        {
          categoriesData.map((element, index) => {
            if (index >= 0) {
              return (
                <div key={ element.name }>
                  <li>
                    <button
                      type="button"
                      onClick={ () => data.requestProductsData(element.id, element.name) }
                    >
                      {element.name}
                    </button>
                  </li>
                </div>
              );
            }
            return null;
          })
        }
      </ul>
    </aside>
  );
}

export default Categories;