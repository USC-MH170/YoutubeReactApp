import axios from 'axios';

const KEY = 'AIzaSyDniU7m8QClSnQyjT0W9IVPFsRGgiQVnwE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
