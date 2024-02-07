import axios from 'axios';

const api = axios.create({
    baseURL:'https://location-7bkg.onrender.com/api',
});

export const GetAll = () => api.get(`/Location/All`)
export const GetLocationByName = name => api.get(`/Location/${name}`)

export const PostLocation = payload => api.post(`/Location/Add`,payload)