import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { getCategories } from '../services/api';


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
    <main>
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
    </main>
  );
}

export default Categories;