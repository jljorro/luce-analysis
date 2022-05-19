import axios from "axios";

export const create = (activityAddToState) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', activityAddToState)
    .then(response => {
      const {data} = response
      return data
    })
}

export const getAll = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      const {data} = response 
      return data
    })
}