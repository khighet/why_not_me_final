import axios from "axios";

export default {

    // getArticles: function(){
    //     console.log("trying to run this from src/utils/api.js ")
    //     return axios.get("/api/articles")
    // },

    validateId: function(userData){
        console.log("trying to run this from src/utils/api - validateId " + JSON.stringify(userData));
        return axios.post("/api/logon",userData)


    },
    createProfile: function(userData){
        console.log("trying to run this from src/utils/api - createProfile " + JSON.stringify(userData));
        return axios.post("/api/profiles",userData)
    },// end createProfile

    getMatches: function(){
        console.log("trying to run from scr/utils/api - getMatches")
        return axios.get("/api/matches")
    },
    createOverture: function(userData){
        console.log("trying to run this from src/utils/api - createOverture " + JSON.stringify(userData));
        return axios.post("/api/matches",userData)
    },// end createProfile
};