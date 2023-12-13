import HttpClient from './HttpClient';

const accessToken = sessionStorage.getItem('accessToken');
const teamAPI = {
  getTeamList: async (lectureId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/lecture/${lectureId}/teams`;
      const response = HttpClient.get(
        path,
        {},
        {
          Authorization: `Bearer ${accessToken}`,
        }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
  createTeam: async (createTeam) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/team`;
      const response = HttpClient.post(path, createTeam, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
};
export default teamAPI;
