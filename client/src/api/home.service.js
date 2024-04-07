import config from "../config/config";

export const homeService = {
    getAllClientsData: async () =>{
        const url = `${config.serverBaseURl}/clients`;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          };
          return fetch(url, requestOptions)
          .then((res) => res.json())
          .then((json) => {
            return json;
          })
          .catch((err) => {
            return err;
          });
    },
    deleteAllClient: async () => {
      const url = `${config.serverBaseURl}/clients/clearData`;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          };
          return fetch(url, requestOptions)
          .then((res) => res.json())
          .then((json) => {
            return json;
          })
          .catch((err) => {
            return err;
          });
    },
    scrape: async (size) => {
      const url = `${config.serverBaseURl}/scrape/${size}`;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          };
          return fetch(url, requestOptions)
          .then((res) => res.json())
          .then((json) => {
            return json;
          })
          .catch((err) => {
            return err;
          });
    },
    deleteClient: async(id) => {
      const url = `${config.serverBaseURl}/clients/${id}`;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          };
          return fetch(url, requestOptions)
          .then((res) => res.json())
          .then((json) => {
            return json;
          })
          .catch((err) => {
            return err;
          });
    },
    queryClientData: async(query) => {
      const url = `${config.serverBaseURl}/clients?q=${query}`;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          };
          return fetch(url, requestOptions)
          .then((res) => res.json())
          .then((json) => {
            return json;
          })
          .catch((err) => {
            return err;
          });
    },
    getClientByID: async (id) =>{
      const url = `${config.serverBaseURl}/clients/${id}`;
      const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        };
        return fetch(url, requestOptions)
        .then((res) => res.json())
        .then((json) => {
          return json;
        })
        .catch((err) => {
          return err;
        });
    },
    updateClient: async (body, id) =>{
      const url = `${config.serverBaseURl}/clients/${id}`;
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        };
        return fetch(url, requestOptions)
        .then((res) => res.json())
        .then((json) => {
          return json;
        })
        .catch((err) => {
          return err;
        });
  },
}