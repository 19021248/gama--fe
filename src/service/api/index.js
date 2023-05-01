import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  //baseURL: 'https://7122-2001-ee0-4141-ce71-2add-a6c8-1bdd-249b.ngrok-free.app',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
    'X-Requested-With': 'XMLHttpRequest',
    'ngrok-skip-browser-warning': true,
  },
});

export const regist = (params) => {
  return axiosInstance.post('/api/register', params);
};

export const login = (params) => {
  return axiosInstance.post('/api/login', params);
};

export const list = (params) => {
  return axiosInstance.post('/api/project/list', params);
};

export const upload = (payload) => {
  return axiosInstance.post('/api/upload', payload);
};

export const update = (payload) => {
  return axiosInstance.post('/api/file/update', payload);
};

export const getFile = (payload, responseType = '') => {
  return axiosInstance.post('/api/file/read', payload, {
    responseType,
  });
};

export const deletePj = (payload) => {
  return axiosInstance.post('/api/project/delete', payload);
};

export const getUser = (id) => {
  return axiosInstance.get(`/api/user/${id}`);
};
export const getAllUser = (id) => {
  return axiosInstance.get(`/api/user?over_view=1`);
};

export const updateUser = (id, payload) => {
  return axiosInstance.put(`/api/user/${id}`, payload);
};

export const createPj = (params) => {
  return axiosInstance.post('/api/project', params);
};

export const simulate = (params) => {
  return axiosInstance.post('/api/simulate', params);
};
export const simulateLastest = (id) => {
  return axiosInstance.get(`/api/simulate/latest/${id}`);
};

export const readList = (payload) => {
  return axiosInstance.post('/api/file/list', payload);
};

export const downloadSimulation = (payload) => {
  const { fps, id } = payload;
  let config = {
    responseType: 'blob',
  };
  return axiosInstance.get(`/api/simulate/download/${id}?fps=${fps}`, config);
};

export const uploadFile = (payload) => {
  return axiosInstance.post('/api/file/create', payload);
};

export const deleteFile = (id) => {
  return axiosInstance.delete(`/api/file/${id}`);
};

// forum

export const createTopic = (payload) => {
  return axiosInstance.post('/api/forum', payload);
};

// get all unfiltered 0
export const getTopicsAll = () => {
  return axiosInstance.get('/api/forum?user_id=0');
};
// get approved 1
export const getTopicsApproved = (status) => {
  return axiosInstance.get(`/api/forum/?status=1&user_id=0`);
};
// get unapproved 2
export const getTopicsUnapproved = (status) => {
  return axiosInstance.get(`/api/forum/?status=0&user_id=0`);
};
// get self
export const getTopicsSelf = (user_id) => {
  return axiosInstance.get(`/api/forum?created_by=${user_id}`);
};
// get bookmarked
export const getTopicsBookmarked = (user_id) => {
  return axiosInstance.get(`/api/forum?&user_id=${user_id}&bookmarked=1`);
};

// topic reply
export const commentTopic = (payload) => {
  return axiosInstance.get('/api/forum/reply', payload);
};

// topic approve

// topic disapprove

// topic bookmark
