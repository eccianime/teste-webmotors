import Axios from 'axios';

const API_ENDPOINT = 'http://desafioonline.webmotors.com.br/api/OnlineChallenge';

const axios = Axios.create({
    headers: {
      "Content-Type": "application/json"
    }
  });

export default class api {
    getBrands = async () =>{
        let request;
        request = await axios.get(`${API_ENDPOINT}/Make`);
        return request;
    }

    getModels = async id =>{
        return await axios.get(`${API_ENDPOINT}/Model?MakeID=${id}`);
    }

    getVersions = async id =>{
        return await axios.get(`${API_ENDPOINT}/Version?ModelID=${id}`);
    }
}