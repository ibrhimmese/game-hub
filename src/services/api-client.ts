import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'5675ea9e42a64785aa3fbee2aaba0230'
    }
})