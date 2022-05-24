import axios from "axios";

const URI_LUCE_API = 'http://localhost:3001'

export const create = (activityAddToState) => {
    return axios.post(`${URI_LUCE_API}/activities`, activityAddToState)
    .then(response => {
      const {data} = response
      return data
    })
}

export const getAll = () => {
    return axios.get(`${URI_LUCE_API}/activities`)
    .then((response) => {
      const {data} = response 
      return data
    })
}