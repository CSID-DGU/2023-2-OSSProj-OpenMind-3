import HttpClient from '../api/HttpClient';

const UserAPI = {
  postLogin: async () => {
    try {
      const path = `/user/login`;
      const response = await HttpClient.get(path, {});
      if (response.status === 200) {
        console.log(200);
        return response.data;
      }
      if (response.status === 400) {
        console.log(400);
        console.log(response);
        const responseData = response.data;
        const errorMessages = Object.values(responseData.error).join('\n');
        alert(errorMessages);
        throw new Error();
      }
    } catch (e) {
      return null;
    }
  },
};
