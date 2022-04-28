import axios from "axios";

const baseURL = `http://3.36.89.161/api/`;
const client = axios.create({ baseURL });

const orderApi = {
  orderSideDish: async ({ body }) => {
    const response = await client.post(`/sidedish-order`);
    return response.data;
  },
};

export default orderApi;
