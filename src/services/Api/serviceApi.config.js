import axios from "axios"

export const APIHeaders = () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
})

export const API = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    headers: APIHeaders(),
    timeout: 600000
})