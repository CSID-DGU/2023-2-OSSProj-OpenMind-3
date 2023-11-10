import HttpClient from './HttpClient';

const accessToken = sessionStorage.getItem('accessToken');
const lectureAPI = {
  getLectureList: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/lecture`;
      const response = await HttpClient.get(
        path,
        {},
        { Authorization: `Bearer ${accessToken}` }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default lectureAPI;
