import HttpClient from './HttpClient';

const accessToken = sessionStorage.getItem('accessToken');

const documentAPI = {
  getDocumentList: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/meetingNotes`;
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
  getDocument: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/meetingNotes/get`;
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
  createDocument: async (formData) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/meetingNotes/create`;
      const response = await HttpClient.post(path, formData, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
  uploadFile: async (formData) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/meetingNotes/uploadFile`;
      const response = await HttpClient.post(path, formData, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
  deleteDocument: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/meetingNotes/delete`;
      const response = await HttpClient.delete(path, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
  updateDocument: async (formData) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/api/meetingNotes/update`;
      const response = await HttpClient.put(path, formData, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default documentAPI;
