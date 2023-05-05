import httpService from "./HttpService";

const wordService = {
  submitWord: async (word) => {
    try {
      const response = await httpService.post("api/words", { word });
      return response.data;
    } catch (error) {
      return { score: 0, error: error.message };
    }
  },
};

export default wordService;
