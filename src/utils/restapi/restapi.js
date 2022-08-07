import axios from 'axios';

const baseUrl = "https://62ed7664a785760e676b6664.mockapi.io/api/v1/"

const login = async(username, password) => {
    const postData = {
      username: username,
      password: password
    }
    return await axios.post(baseUrl + "login", postData)
}

const getUsers = async() => {
  return await axios.get(baseUrl + "users")
}

const getUserById = (id) => {
  return axios.get(baseUrl + "users/"+ id)
}

const deleteUser = (id) => {
  return axios.delete(baseUrl + "users/"+ id)
}

const addUser = (user) => {
  return axios.post(baseUrl + "users", user)
}
const editOperator = (id, user) => {
  return axios.put(baseUrl + "users/"+ id, user)
}

export const RestApi = {
    login,
    getUsers,
    deleteUser,
    addUser, 
    getUserById,
    editOperator
}