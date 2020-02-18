import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_APIURL,
})

export const search = searchItem => api(`search/${searchItem}`)
