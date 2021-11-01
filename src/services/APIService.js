import axios from 'axios';
import { APIConfig } from '../config/API';

const instance = axios.create(APIConfig);

export default instance;