import { API } from "./serviceApi.config";


export const getCharacters = async (page, name) => {
    return API.get(`/character`, {
        // headers: {
        //   Authorization: `Bearer ${updateToken()}`
        // }
        params: {
            // limit: 150,
            // offset: 0,
            // language: 'es-ES',
            page: page,
            name: name
        }
      })
      .then((res) => res)
      .catch((error) => error);
};


export const getCharacterById = async (id) => {
    return API.get(`/character/${id}`, {
        // headers: {
        //   Authorization: `Bearer ${updateToken()}`
        // }
        // params: {
        //     // limit: 150,
        //     // offset: 0,
        //     // language: 'es-ES',
        //     page: page
        // }
      })
      .then((res) => res)
      .catch((error) => error);
};


export const getCharactersByName = async (name) => {
    return API.get(`/character/`, {
        // headers: {
        //   Authorization: `Bearer ${updateToken()}`
        // }
        params: {
            name: name
        }
      })
      .then((res) => res)
      .catch((error) => error);
};