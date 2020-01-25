import axios from 'axios';

const KEY = 'AIzaSyAisxpfwjsattlUcK5JwAHJKAYXV35vLpo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});
