import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/Firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  // setCategoriesMap: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoryMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
