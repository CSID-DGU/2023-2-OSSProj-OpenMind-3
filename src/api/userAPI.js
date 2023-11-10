import HttpClient from './HttpClient';

const userAPI = {
  loginUser: async (user) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/user/login`;
      const response = await HttpClient.post(path, user, {});
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default userAPI;
