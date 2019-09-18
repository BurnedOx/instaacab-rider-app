import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://ec2-13-232-79-179.ap-south-1.compute.amazonaws.com/api/'
});

export default Axios;