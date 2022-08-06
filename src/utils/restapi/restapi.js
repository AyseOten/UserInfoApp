import axios from 'axios';

const baseUrl = "https://62ed7664a785760e676b6664.mockapi.io/api/v1/"

const login = (username, password) => {
    const postData = {
      username: username,
      password: password
    }
    return axios.post(baseUrl + "login", postData)
}

const getUsers = () => {
  return axios.get(baseUrl + "users")
}

const deleteUser = (id) => {
  return axios.delete(baseUrl + "users/"+ id)
}

const addUser = (user) => {
  return axios.post(baseUrl + "users", user)
}

export const RestApi = {
    login,
    getUsers,
    deleteUser,
    addUser
}