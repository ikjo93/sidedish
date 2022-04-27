import { useState, useEffect } from "react";
import menuCategoriesApi from "Service/menuCategoriesApi";
import Category from "./Category/Category";
import Wrapper from "./SideDishItemsArea.styled";

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
    fetchCategorySideDishData("rest");
  }, []);

  return sideDishItemsData.map(({ category: { name, id }, sideDishes }) => (
    <Wrapper key={id}>
      <Category name={name} sideDishes={sideDishes} />
    </Wrapper>
  ));
};

export default SideDishItemsArea;
