import HttpClient from './HttpClient';

const accessToken = sessionStorage.getItem('accessToken');

const schedulAPI = {
  getMySchedule: async (teamId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/team/${teamId}/personal-schedule`;
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
  getTeamSchedule: async (teamId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/team/${teamId}/schedule`;
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

export default schedulAPI;
