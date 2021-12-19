import { USER_STORAGE_KEY } from 'helpers/constants/user';

const setUser = (user) => {
  window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
};

const getUser = () => {
  return JSON.parse(window.localStorage.getItem(USER_STORAGE_KEY));
};

const removeUser = () => {
  return window.localStorage.removeItem(USER_STORAGE_KEY);
};

export { getUser, setUser, removeUser };
