import React, { useEffect, useState } from "react";
import { getCategories } from '../services/api';

function Categories() {

  const [categoriesData, setCategoriesData] = useState([]);

  const requestCategoriesData = async () => {
    const response = await getCategories();
    setCategoriesData(response);
  };

  useEffect(() => {
    requestCategoriesData();
  }, [categoriesData]);

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
                      onClick={ () => this.handleClick(element.id, element.name) }
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