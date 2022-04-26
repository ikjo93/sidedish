import axios from "axios";

const baseURL = `/api/menu-categories/`;
const client = axios.create({ baseURL });

const menuCategoriesApi = {
  getDataByMenuCategory: async (range) => {
    const response = await client.get(`${range}/sidedishes`);
    return response.data;
  },
};

export default menuCategoriesApi;
