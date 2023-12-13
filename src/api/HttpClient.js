import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

const handleStatusCode = (error) => {
  console.log(error);
  if (error.status === 403) {
    console.log(error.status);
  } else if (error.status === 400) {
    console.log(error.status);
  } else if (error.status === 404) {
    console.log(error.status);
  } else {
    // 그 외에는 rethrow
    throw error;
  }
};
let isTokenRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (accessToken) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;
    const originalRequest = config;
    if (response && response.status === 400) {
      return Promise.resolve();
    }
    if (response && response.status === 401) {
      if (!isTokenRefreshing) {
        // isTokenRefreshing이 false인 경우에만 token refresh 요청
        isTokenRefreshing = true;
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          // refresh token이 없을 경우 로그아웃 또는 다른 조치 수행
          window.reload();
        }
        try {
          const { data } = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/user/login`,
            {
              id: '2020123456',
              password: '1234',
            }
          );
          // 새로운 토큰 저장
          console.log(data);
          localStorage.setItem('refreshToken', data.rtk);
          sessionStorage.setItem('accessToken', data.atk);
          const accessToken = sessionStorage.getItem('accessToken');
          isTokenRefreshing = false;
          // 새로운 토큰으로 지연되었던 요청 진행
          onTokenRefreshed(accessToken);
          // refreshSubscribers에 저장된 요청들을 모두 처리
          refreshSubscribers.forEach((callback) => callback(accessToken));
          refreshSubscribers = [];
        } catch (refreshError) {
          // 토큰 새로고침 요청이 실패한 경우 로그아웃 또는 다른 조치 수행
          return Promise.reject(refreshError);
        }
      }
      // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
      return new Promise((resolve, reject) => {
        addRefreshSubscriber((accessToken) => {
          originalRequest.headers.Authorization = 'Bearer ' + accessToken;
          resolve(axios(originalRequest));
        });
      });
    }
    return Promise.reject(error);
  }
);

const HttpClient = {
  get: async (path, params = {}, headers = {}) => {
    try {
      const response = await axiosInstance.get(path, { params, headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },

  post: async (path, body, headers = {}) => {
    try {
      const response = await axiosInstance.post(path, body, { headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },

  put: async (path, body, headers = {}) => {
    try {
      const response = await axiosInstance.put(path, body, { headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },

  patch: async (path, body, headers = {}) => {
    try {
      const response = await axiosInstance.patch(path, body, { headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },

  delete: async (path, body, headers = {}) => {
    try {
      const response = await axiosInstance.delete(path, body, { headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },
};

export default HttpClient;
