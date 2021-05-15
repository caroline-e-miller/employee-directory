import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getEmployeesByNationality: function (nationality) {
        return axios.get("https://randomuser.me/api/?results=50?nat=gb" + nationality);
    },
    getAllEmployees: function () {
        return axios.get("https://randomuser.me/api/?results=50");
    }
};