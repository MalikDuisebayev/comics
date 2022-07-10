import axios from "axios";

class GetDataApi {
  async getData(url, apiKey) {
    try {
      const response = await axios.get(url, {
        params: {
          apikey: apiKey,
          limit: 20,
        },
      });
      return response.data.data.results;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}

export const getDataApi = new GetDataApi();
