import axios from 'axios';
const KEY = 'AIzaSyDmg1SsYE8_OzIPoNo642K6sJTPnhmiHuE';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
    }
});