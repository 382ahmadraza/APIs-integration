'use server';

import axios from "axios";



// export async function createProperty(data: any) {
//     try {
//       const res = await axios.post("https://dummyjson.com/products/add", {
//         data: data, // Strapi expects data inside a "data" object
//       });
  
//       return { data: res.data, error: null };
//     } catch (error) {
//       return { data: null, error: error };
//     }
//   }


export  async function fetchProperties() {

    const url = "https://dummyjson.com/products"
    try {
        const res = await axios.get(url);
        return { data: res.data, error: null }
    } 
    catch (error) {
        return { data: null, error: error }
    }
}


