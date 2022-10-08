import axios from 'axios'

const baseURL = 'http://127.0.0.1:5000';

export function GetData() {
    axios.get(baseURL + "/item/getItems")
    .then( (response) => { 
        console.log(response);
    })
    .catch( (err) => {
        console.log('err')
    })
}

