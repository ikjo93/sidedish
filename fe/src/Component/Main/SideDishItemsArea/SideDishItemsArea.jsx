import { useState, useEffect } from "react";
import menuCategoriesApi from "Service/menuCategoriesApi";
import Category from "./Category/Category";

const SideDishItemsArea = () => {
  const [sideDishItemsData, setSideDishItemsData] = useState([]);

  const fetchCategorySideDishData = async (range) => {
    const { menuCategories } = await menuCategoriesApi.getDataByMenuCategory(
      range
    );

    const menuCategoryDatas = menuCategories.map(
      ({ menuCategoryName, sideDishes }, idx) => {
        return {
          category: { name: menuCategoryName, id: idx },
          sideDishes,
        };
      }
    );

    setSideDishItemsData(menuCategoryDatas);
  };

  useEffect(() => {
    fetchCategorySideDishData("first");
  }, []);

  return sideDishItemsData.map(({ category: { name, id }, sideDishes }) => (
    <Category key={id} name={name} sideDishes={sideDishes} />
  ));
};

export default SideDishItemsArea;
