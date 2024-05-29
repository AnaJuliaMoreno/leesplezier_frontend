
import {locations} from "../constants/locations.js";

const locationNameById=(id)=>{
    const location = locations.find(location => location.id === parseInt(id));
    return location ? location.name : "bieb-locatie";
}
 export default locationNameById;