import HttpClient from './HttpClient';

const accessToken = sessionStorage.getItem('accessToken');
const lectureId = localStorage.getItem('lectureId');

const mainpageAPI = {
  getTeamInfo: async (params) => {
    try {
      const teamId = Number(params.teamId.substring(1));
      const path = `${process.env.REACT_APP_BASE_URL}/team/${teamId}/members`;
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
  getStudentList: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/lecture/${lectureId}/student-list`;
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
  addTeamMember: async (formData) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/team/invitation`;
      const response = await HttpClient.post(path, formData, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
  addEvent: async (formData) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/events/add`;
      const response = await HttpClient.post(path, formData, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
  getTeamEventList: async (teamId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/events/team/${teamId}`;
      const response = await HttpClient.get(
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
  getEvent: async (teamId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/events/${teamId}`;
      const response = await HttpClient.get(
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
  deleteEvent: async (eventId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/events/${eventId}`;
      const response = await HttpClient.delete(path, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
  updateEvent: async (eventId, formData) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/events/${eventId}`;
      const response = await HttpClient.put(path, formData, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default mainpageAPI;
