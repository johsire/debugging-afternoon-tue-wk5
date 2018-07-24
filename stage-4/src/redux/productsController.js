import axios from 'axios';

export default {
     getAllProducts: function() {
        return axios.get("https://practiceapi.devmountain.com/products/")
        .then(response => response.data);
    }
}
