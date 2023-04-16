import axios from "axios";

export const getPlacesData = async (type,sw, ne) => {
   try {
     const { data } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
         params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
         },
         // headers: {
         //    'X-RapidAPI-Key': 'e63c9011cdmshb275bdd29b3dce1p1c9099jsn2a548a1316f1',
         //    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
         //  }
     });
     return data;
   } catch (error) {
     console.log(error);
   }
};