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
  fetch("./data/activities.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(function (response) {
    console.log(response)
    return response.json()
  })
}