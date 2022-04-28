import axios from "axios";

const baseURL = `http://3.36.89.161/api/`;
const client = axios.create({ baseURL });

const orderApi = {
  orderSideDish: async (requestBody) => {
    try {
      const response = await client.post(`/sidedish-order`, requestBody);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default orderApi;
