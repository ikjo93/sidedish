import { useState, useEffect } from "react";
import { ImgSliderButtons } from "MockData/MockData";
import menuCategoriesApi from "Service/menuCategoriesApi";
import Category from "./Category/Category";
import { Wrapper, SliderButton } from "./SideDishItemsArea.styled";

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
    <Wrapper>
      <SliderButton type="button" className="left">
        {ImgSliderButtons.left}
      </SliderButton>
      <Category key={id} name={name} sideDishes={sideDishes} />
      <SliderButton type="button" className="right">
        {ImgSliderButtons.right}
      </SliderButton>
    </Wrapper>
  ));
};

export default SideDishItemsArea;
