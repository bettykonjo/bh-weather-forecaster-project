import axios from 'axios';

const getadress = async (adress) => {
    try{
       return await axios.get(`https://geocode.maps.co/search?q=${adress}`) 
    }
    catch(error){
        console.error(`Error: ${error}`);
    }
}
export default getadress;